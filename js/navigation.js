document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const mobileMenuBtn = document.createElement('button');
    const mobileMenu = document.createElement('div');
    
    // 创建移动端菜单按钮
    mobileMenuBtn.className = 'md:hidden text-primary hover:text-primary/80 transition-colors';
    mobileMenuBtn.innerHTML = '<i class="ri-menu-line text-2xl"></i>';
    
    // 创建移动端菜单
    mobileMenu.className = 'mobile-menu hidden md:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 transform translate-x-full';
    mobileMenu.innerHTML = `
        <div class="p-6">
            <div class="flex justify-between items-center mb-8">
                <a href="index.html">
                    <img src="./images/logo.png" alt="中医文化" class="h-12 w-auto">
                </a>
                <button class="close-menu text-primary hover:text-primary/80 transition-colors">
                    <i class="ri-close-line text-2xl"></i>
                </button>
            </div>
            <div class="flex flex-col space-y-6">
                <a href="index.html" class="text-primary hover:text-primary/80 font-medium transition-colors">中医文化</a>
                <a href="herbs.html" class="text-primary hover:text-primary/80 font-medium transition-colors">中医草药</a>
                <a href="heritage.html" class="text-primary hover:text-primary/80 font-medium transition-colors">中医传承</a>
                <a href="meridians.html" class="text-primary hover:text-primary/80 font-medium transition-colors">中医经络</a>
                <a href="wellness.html" class="text-primary hover:text-primary/80 font-medium transition-colors">中医养生</a>
                <div class="pt-6 border-t border-gray-200">
                    <a href="login.html" class="block text-primary hover:text-primary/80 font-medium transition-colors mb-4">登录</a>
                    <a href="register.html" class="block bg-primary text-white px-6 py-2 rounded-button hover:bg-primary/90 transition-colors text-center">
                        注册
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // 插入移动端菜单按钮和菜单
    const navContainer = nav.querySelector('.max-w-7xl');
    navContainer.appendChild(mobileMenuBtn);
    document.body.appendChild(mobileMenu);
    
    // 处理菜单打开/关闭
    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        setTimeout(() => {
            mobileMenu.classList.toggle('translate-x-full');
        }, 10);
    }
    
    mobileMenuBtn.addEventListener('click', toggleMenu);
    mobileMenu.querySelector('.close-menu').addEventListener('click', toggleMenu);
    
    // 处理导航栏固定效果
    let lastScrollTop = 0;
    const scrollThreshold = 100; // 滚动阈值
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 当滚动超过阈值时添加固定样式
        if (scrollTop > scrollThreshold) {
            nav.classList.add('nav-fixed');
        } else {
            nav.classList.remove('nav-fixed');
        }
        
        lastScrollTop = scrollTop;
    });
}); 