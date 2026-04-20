document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    
    let currentIndex = 0;
    const totalItems = items.length;

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
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    // 切换到上一张
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    // 切换到指定幻灯片
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    // 绑定按钮点击事件
    prevBtn.addEventListener('click', () => {
        prevSlide();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
    });

    // 绑定指示器点击事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // 触摸事件支持
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', () => {
        const difference = touchStartX - touchEndX;
        if (Math.abs(difference) > 50) { // 最小滑动距离
            if (difference > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    });
}); 