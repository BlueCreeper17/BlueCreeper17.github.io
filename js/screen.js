// 화면이 세로인지 감지하고 가로로 변환
function forceLandscapeMode() {
    if (window.innerHeight > window.innerWidth) {
        document.querySelector('.game-container').style.transform = 'rotate(90deg)';
    } else {
        document.querySelector('.game-container').style.transform = 'rotate(0deg)';
    }
}

// 화면 크기 변경될 때 이벤트 감지
window.addEventListener('resize', forceLandscapeMode);
window.addEventListener('load', forceLandscapeMode);
