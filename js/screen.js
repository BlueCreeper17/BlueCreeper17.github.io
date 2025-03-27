function isMobile() {
    return navigator.maxTouchPoints > 0 || /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function lockOrientation() {
    if (!isMobile()) return; // PC에서는 실행 안 함

    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock("landscape").catch(err => {
            console.warn("화면 회전 잠금 실패:", err);
        });
    } else {
        console.warn("이 브라우저에서는 화면 잠금이 지원되지 않습니다.");
    }
}

// iOS에서 가로 모드 체크 후 경고창 띄우기
function checkOrientationForiOS() {
    if (!isMobile()) return; // PC에서는 실행 안 함

    if (!window.matchMedia("(orientation: landscape)").matches) {
        alert("가로 모드에서만 이용 가능합니다. 기기를 회전해주세요.");
    }
}

// 초기 실행
document.addEventListener("DOMContentLoaded", () => {
    lockOrientation();
    checkOrientationForiOS(); // iOS 대응
});

// 화면 방향 변경 감지
if (isMobile()) {
    window.addEventListener("orientationchange", () => {
        checkOrientationForiOS();
    });
}

//슬라이드 위치 조정
var swiper = new Swiper('.swiper', {
    centeredSlides: true,  // 슬라이드를 중앙 정렬
    initialSlide: 2, // 처음 시작할 슬라이드 인덱스 (0부터 시작)
    slidesPerView: 3, // 한 번에 보이는 슬라이드 개수
    spaceBetween: 20, // 슬라이드 간격 (px 단위)
});
