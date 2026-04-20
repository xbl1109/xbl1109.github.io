document.addEventListener('DOMContentLoaded', function() {
    // 获取所有轮播图中的按钮
    const carouselButtons = document.querySelectorAll('.carousel-content button');
    
    // 为每个按钮添加点击事件
    carouselButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            
            // 根据按钮文本执行不同的操作
            switch(buttonText) {
                case '了解更多':
                    // 滚动到中医文化介绍部分
                    scrollToSection('中医文化介绍');
                    break;
                case '文化传承':
                    // 跳转到传承页面
                    window.location.href = 'heritage.html';
                    break;
                case '探索中药':
                    // 跳转到草药页面
                    window.location.href = 'herbs.html';
                    break;
                case '养生之道':
                    // 跳转到养生页面
                    window.location.href = 'wellness.html';
                    break;
                case '了解针灸':
                    // 滚动到经络介绍部分
                    window.location.href = 'meridians.html';
                    break;
                case '经络养生':
                    // 滚动到养生部分
                    window.location.href = 'wellness.html#meridian-wellness';
                    break;
                case '浏览药材':
                    // 滚动到药材列表部分
                    scrollToSection('草药分类');
                    break;
                case '配伍知识':
                    // 弹出配伍知识弹窗
                    showHerbCombinationKnowledge();
                    break;
                default:
                    console.log('未定义的按钮动作:', buttonText);
            }
        });
    });
    
    // 滚动到指定标题的部分
    function scrollToSection(sectionTitle) {
        const headings = document.querySelectorAll('h2, h3');
        for (let heading of headings) {
            if (heading.textContent.includes(sectionTitle)) {
                heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
        }
    }
    
    // 显示配伍知识弹窗
    function showHerbCombinationKnowledge() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <div class="p-8">
                    <div class="flex justify-between items-start mb-6">
                        <h2 class="text-3xl font-bold ink-text">中药配伍知识</h2>
                        <button class="text-gray-500 hover:text-gray-700" onclick="this.closest('.fixed').remove()">
                            <i class="ri-close-line text-2xl"></i>
                        </button>
                    </div>
                    <div class="space-y-6">
                        <p class="text-gray-700">中药配伍是中医用药的重要原则，通过合理搭配不同药物，可以增强疗效、减少毒副作用。以下是中药配伍的几种基本方式：</p>
                        
                        <div>
                            <h3 class="text-lg font-semibold text-primary mb-2">七情配伍</h3>
                            <ul class="list-disc list-inside space-y-2">
                                <li class="text-gray-700"><span class="font-semibold">相须</span>：两药相互配合，增强功效</li>
                                <li class="text-gray-700"><span class="font-semibold">相使</span>：一药辅助另一药，提高疗效</li>
                                <li class="text-gray-700"><span class="font-semibold">相畏</span>：一药能减轻或消除另一药的毒副作用</li>
                                <li class="text-gray-700"><span class="font-semibold">相恶</span>：两药配伍会降低药效</li>
                                <li class="text-gray-700"><span class="font-semibold">相杀</span>：一药能消除另一药的毒性</li>
                                <li class="text-gray-700"><span class="font-semibold">相反</span>：两药配伍会产生毒副作用或降低疗效</li>
                                <li class="text-gray-700"><span class="font-semibold">相反相成</span>：两药性质相反但配伍后能产生新的功效</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 class="text-lg font-semibold text-primary mb-2">君臣佐使</h3>
                            <ul class="list-disc list-inside space-y-2">
                                <li class="text-gray-700"><span class="font-semibold">君药</span>：主要治疗药物，针对主要病症</li>
                                <li class="text-gray-700"><span class="font-semibold">臣药</span>：辅助君药增强疗效，或治疗次要症状</li>
                                <li class="text-gray-700"><span class="font-semibold">佐药</span>：协助君臣药，或减轻毒副作用</li>
                                <li class="text-gray-700"><span class="font-semibold">使药</span>：引药直达病处，或调和诸药</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
}); 