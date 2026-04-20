// 导航栏滚动效果
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('nav-fixed');
        } else {
            nav.classList.remove('nav-fixed');
        }
    });
});

// 轮播图功能
function initCarousel() {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;

    const carouselInner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    
    let currentIndex = 0;
    let interval;
    const intervalTime = 5000; // 轮播间隔时间，5秒
    
    // 更新轮播图位置
    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        // 更新指示器状态
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    // 切换到下一张
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }
    
    // 切换到上一张
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }
    
    // 开始自动轮播
    function startAutoPlay() {
        interval = setInterval(nextSlide, intervalTime);
    }
    
    // 停止自动轮播
    function stopAutoPlay() {
        clearInterval(interval);
    }
    
    // 绑定按钮事件
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }
    
    // 绑定指示器点击事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            stopAutoPlay();
            startAutoPlay();
        });
    });
    
    // 鼠标悬停时暂停轮播
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    
    // 开始自动轮播
    startAutoPlay();
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
}); 