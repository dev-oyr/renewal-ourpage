const filter = 'win16|win32|win64|mac|macintel';
let isMobile = false;

if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
    isMobile = true;
} else {
    isMobile = false;
}

export default isMobile;
