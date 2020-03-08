import React from 'react';

function Step3() {
    return (
        <>
            <div className="step3_Header">작성완료 !</div>
            <div className="step3_desc">
                <h4 style={{ fontWeight: 600 }}>개인정보 수집 및 이용에 대한 안내</h4>
                <p>
                    1. 목적: 지원자 개인 식별, 지원의사 확인, 고지사한 정달, 입사 지원자와의 원활한 의사소통, 지원이력 확인, 합격 시
                    회원정보 활용
                </p>
                <p>2. 항목: 이름, 생년월일, 연락처, 이메일, 학번, 학과, 성별</p>
                <p>3. 보유기간: 회원 탈퇴 및 제명 시까지 보유</p>
                <p>위 개인정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 지원자 동록이 제한될 수 있습니다.</p>
                <h4 style={{ fontWeight: 600 }}>제출 전 검토해 주세요! 동의 및 제출하시겠습니까?</h4>
            </div>
        </>
    );
}

export default Step3;
