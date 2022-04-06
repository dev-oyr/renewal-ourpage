/** 파이어베이스 관리자 설정 (DBCtrl.js 와 같은 경로에 FirebaseAdminConfig.js 파일 생성할 것)
 * @param id 마스터키 아이디(이메일 주소)
 * @param pw 마스터키 암호
 * @param apiConfig 파이어베이스 Config
 */
import { id, pw, apiConfig } from './FirebaseAdminConfig';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import recruitStep from '../datas/recruitStep.json';

/** 파이어베이스 초기화 및 초반 관리자 로그인 상태 */
// 파이어베이스 초기화
firebase.initializeApp(apiConfig);

// 마스터키로 관리자 로그인
firebase.auth().onAuthStateChanged(async (user) => {
    // 로그인한 사용자가 없으면 관리자로 로그인
    if (!user) {
        firebase
            .auth()
            .signInWithEmailAndPassword(id, pw)
            .catch((err) => {
                const errCode = err.code;
                const errMsg = err.message;
                console.error(errCode, errMsg);
                // alert(`Firebase 마스터 인증 오류 발생!\n 에러 코드: ${errCode}\n 에러 내용: ${errMsg}`);
                alert('현재 데이터베이스 비활성화 상태입니다.');
            });
    } else {
        // 세션 스토리지에도 저장함...
        console.log('saving current user at session storage...');
        if (await dbCtrl.userCurrent) {
            sessionStorage.setItem('currentUser', JSON.stringify({ stdno: user.displayName, name: (await dbCtrl.userCurrent)['name'] }));
        } else {
            sessionStorage.setItem('currentUser', null);
        }
    }
});
// 파이어베이스 실시간 데이터베이스 선언
const fbdb = firebase.database();

/** 필요한 각종 데이터베이스 함수 나열할 것 */
const dbCtrl = {
    /** 관리자 로그인 상태를 해제하고 회원 로그인
     * @param stdNo 회원 학번
     * @param pw 회원 암호
     * @callback callback.onSuccess 로그인 후 작업 콜백 함수
     * @callback callback.onError 로그인 실패 시 콜백 함수
     */
    userLogin(stdNo, pw, callback = { onSuccess(session) {}, onError(err) {} }) {
        // users 테이블에서 학번으로 이메일 조회
        fbdb.ref('/users/' + stdNo)
            .once('value')
            .then((snapshot) => {
                // 학번이 없으면 에러
                if (!snapshot.val()) {
                    callback.onError({ code: 'stdNoNotFound', message: 'Current student number not found' });
                    return;
                }
                // 회원 이메일 및 암호로 회원 로그인
                firebase
                    .auth()
                    .signInWithEmailAndPassword(snapshot.val().email, pw)
                    .then(async (res) => {
                        firebase.auth().currentUser.updateProfile({
                            displayName: stdNo,
                        });
                        // 로그인이 끝난 후 처리 함수 호출(현재 로그인 한 사용자 정보)
                        callback.onSuccess(await this.userCurrent);
                    })
                    .catch((err) => {
                        console.error(err.code, err.message);
                        callback.onError(err);
                    });
            })
            .catch((err) => {
                console.error(err.code, err.message);
                console.error('회원 데이터 조회 실패!');
                callback.onError(err);
            });
    },
    /** 사용자 로그아웃
     * @callback callback.onSuccess 로그아웃 후 작업 콜백 함수
     * @callback callback.onError 로그아웃 실패 시 콜백 함수
     */
    userLogout(callback = { onSuccess() {}, onError(err) {} }) {
        firebase
            .auth()
            .signOut()
            .then(() => {
                callback.onSuccess();
            })
            .catch((err) => {
                callback.onError(err);
            });
    },
    /** @async userCurrent 현재 로그인 사용자 정보 */
    get userCurrent() {
        const session = firebase.auth().currentUser;
        if (!session || session.email === id) {
            return null;
        }
        return new Promise((resolve, reject) => {
            fbdb.ref('/users/' + session.displayName)
                .once('value')
                .then((snapshot) => {
                    resolve(snapshot.val());
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    /** 지원서 제출
     * @param sub 구분 카테고리
     * @param form 제출 데이터
     * @callback callback.onSuccess 제출 후 작업 콜백 함수
     * @callback callback.onError 제출 실패 시 콜백 함수
     */
    submitApplication(
        sub = '',
        form = {
            stdNo: '<학번>',
            birthday: '<생년월일>',
            email: '<이메일>',
            gender: '<성별>',
            grade: '<학년/학기>',
            introduce: '<자기소개>',
            major: '<학과>',
            military: '<군필여부>',
            motive: '<지원동기>',
            myWish: '<만들고 싶은 웹 서비스>',
            name: '<이름>',
            phone: '<연락처>',
            projDetail: '<프로젝트 상세 설명>',
            projGithub: '<프로젝트 깃허브 주소>',
            projName: '<프로젝트 이름>',
            projOtherLink: '<프로젝트 기타 링크>',
            projSummary: '<프로젝트 요약>',
            projTechStacks: '<프로젝트 기술 스택>',
        },
        callback = { onSuccess(res) {}, onError(err) {} },
    ) {
        fbdb.ref(`/applications/${sub}/${form.stdNo}`).set(
            {
                birthday: form.birthday,
                email: form.email,
                gender: form.gender,
                grade: form.grade,
                introduce: form.introduce,
                major: form.major,
                military: form.military,
                motive: form.motive,
                myWish: form.myWish,
                name: form.name,
                phone: form.phone,
                projDetail: form.projDetail,
                projGithub: form.projGithub,
                projName: form.projName,
                projOtherLink: form.projOtherLink,
                projSummary: form.projSummary,
                projTechStacks: form.projTechStacks,
            },
            (err) => {
                if (err) {
                    callback.onError(err);
                } else {
                    callback.onSuccess(null);
                }
            },
        );
    },
    /** 모든 지원서 조회
     * @param sub 구분 카테고리
     * @callback callback.onSuccess 조회 후 작업 콜백 함수
     * @callback callback.onError 조회 실패 시 콜백 함수
     */
    getAllApplications(sub = '', callback = { onSuccess(res) {}, onError(err) {} }) {
        fbdb.ref(`/applications/${sub}`)
            .once('value')
            .then((snapshot) => {
                callback.onSuccess(snapshot.val());
            })
            .catch((err) => {
                callback.onError(err);
            });
    },
    /** 특정 지원서 조회
     * @param sub 구분 카테고리
     * @param stdNo 조회할 학번
     * @callback callback.onSuccess 조회 후 작업 콜백 함수
     * @callback callback.onError 조회 실패 시 콜백 함수
     */
    getApplication(sub = '', stdNo = '', callback = { onSuccess(res) {}, onError(err) {} }) {
        fbdb.ref(`/applications/${sub}/${stdNo}`)
            .once('value')
            .then((snapshot) => {
                callback.onSuccess(snapshot.val());
            })
            .catch((err) => {
                callback.onError(err);
            });
    },
    /** 지원서 업데이트 시 실행할 함수
     * @param sub 구분 카테고리
     * @callback callback.onSuccess 업데이트 시 작업 콜백 함수
     * @callback callback.onError 업데이트 실패 시 콜백 함수
     */
    onApplicationUpdated(sub = '', callback = { onSuccess(res) {}, onError(err) {} }) {
        fbdb.ref(`/applications/${sub}`).on('value', (snapshot) => {
            callback.onSuccess(snapshot.val());
        });
    },
    isApplyAvailable(enabled) {
        let starts = recruitStep.Step1.str_day;
        let ends = recruitStep.Step1.end_day;

        starts = starts.replace('년 ', '-');
        starts = starts.replace('월 ', '-');
        starts = starts.replace('일 ', '');
        starts = starts.replace(starts.substr(starts.indexOf('('), starts.indexOf(')') + 1), '');
        starts = new Date(starts);
        starts.setHours(0);
        starts.setMinutes(0);
        starts.setSeconds(0);
        starts.setMilliseconds(0);

        ends = ends.replace('년 ', '-');
        ends = ends.replace('월 ', '-');
        ends = ends.replace('일 ', '');
        ends = ends.replace(ends.substr(ends.indexOf('('), ends.indexOf(')') + 1), '');
        ends = new Date(ends);
        ends.setDate(ends.getDate() + 1);
        ends.setHours(0);
        ends.setMinutes(0);
        ends.setSeconds(0);
        ends.setMilliseconds(0);

        const today = new Date();
        return enabled ? starts <= today && ends > today : true;
    },
};

export { dbCtrl, firebase, fbdb };
