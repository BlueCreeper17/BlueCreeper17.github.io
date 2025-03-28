function forceLandscapeMode() {
    const heroArea = document.querySelector('.hero_area');
    const swiper = document.querySelector('.swiper');

    if (window.innerHeight > window.innerWidth) {
        // 세로 모드일 때 회전 적용
        heroArea.style.transform = 'rotate(90deg)';
        heroArea.style.width = '100vh';
        heroArea.style.height = '100vw';

        swiper.style.transform = 'rotate(90deg)';
        swiper.style.width = '100vh';
        swiper.style.height = '100vw';
    } else {
        // 가로 모드일 때 원래대로
        heroArea.style.transform = 'rotate(0deg)';
        heroArea.style.width = '100vw';
        heroArea.style.height = '100vh';

        swiper.style.transform = 'rotate(0deg)';
        swiper.style.width = '400px';
        swiper.style.height = '600px';
    }
}

// 페이지 로드 및 화면 크기 변경 시 실행
window.addEventListener('load', forceLandscapeMode);
window.addEventListener('resize', forceLandscapeMode);

