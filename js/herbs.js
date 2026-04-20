// 草药详细信息数据
const herbDetails = {
    '人参': {
        name: '人参',
        latinName: 'Panax ginseng',
        category: '补益类',
        properties: '性平，味甘、微苦',
        meridians: '归脾、肺、心、肾经',
        functions: [
            '大补元气，复脉固脱',
            '补脾益肺，生津止渴',
            '安神益智'
        ],
        usage: '3-9g，单煎或入复方。大补元气宜单用或为主药，温补心脾宜配伍使用。',
        precautions: '实证、热证忌服，阴虚火旺者慎服。',
        combinations: [
            '配黄芪可增强补气效果',
            '配当归可补气养血',
            '配白术、茯苓可健脾益气'
        ]
    },
    '黄芪': {
        name: '黄芪',
        latinName: 'Astragalus membranaceus',
        category: '补益类',
        properties: '性微温，味甘',
        meridians: '归脾、肺经',
        functions: [
            '补气固表，止汗',
            '利尿托毒，排脓',
            '敛疮生肌'
        ],
        usage: '10-30g，单煎或入复方。用量宜大，久煎。',
        precautions: '表实邪实、热盛及阴虚火旺者忌服。',
        combinations: [
            '配党参可增强补气效果',
            '配当归可补气养血',
            '配白术可健脾益气'
        ]
    },
    '当归': {
        name: '当归',
        latinName: 'Angelica sinensis',
        category: '补益类',
        properties: '性温，味甘、辛',
        meridians: '归肝、心、脾经',
        functions: [
            '补血活血，调经止痛',
            '润肠通便',
            '外用生肌止痛'
        ],
        usage: '5-15g，煎服。补血宜酒炖，活血宜生用。',
        precautions: '气虚便溏者慎服，月经过多及滑胎者忌服。',
        combinations: [
            '配川芎可活血调经',
            '配黄芪可补气养血',
            '配白芍可养血调经'
        ]
    },
    '金银花': {
        name: '金银花',
        latinName: 'Lonicera japonica',
        category: '清热类',
        properties: '性寒，味甘',
        meridians: '归肺、心、胃经',
        functions: [
            '清热解毒',
            '凉散风热',
            '用于痈肿疔疮，喉痹'
        ],
        usage: '10-15g，煎服。鲜品效佳。',
        precautions: '脾胃虚寒者慎服。',
        combinations: [
            '配连翘可增强清热解毒效果',
            '配菊花可清热明目',
            '配板蓝根可解毒消炎'
        ]
    },
    '菊花': {
        name: '菊花',
        latinName: 'Chrysanthemum morifolium',
        category: '清热类',
        properties: '性微寒，味甘、苦',
        meridians: '归肺、肝经',
        functions: [
            '散风清热',
            '平肝明目',
            '清热解毒'
        ],
        usage: '5-10g，泡茶或入药煎服。',
        precautions: '胃寒者慎服。',
        combinations: [
            '配桑叶可清肝明目',
            '配金银花可清热解毒',
            '配防风可疏散风热'
        ]
    },
    '肉桂': {
        name: '肉桂',
        latinName: 'Cinnamomum cassia',
        category: '温里类',
        properties: '性大热，味辛、甘',
        meridians: '归肾、脾、心、肝经',
        functions: [
            '补火助阳，引火归源',
            '散寒止痛',
            '活血通经'
        ],
        usage: '2-5g，煎服。补阳宜重用，散寒止痛宜轻用。',
        precautions: '阴虚火旺及有热者忌服。',
        combinations: [
            '配附子可温补命门',
            '配当归可温经止痛',
            '配白芍可缓急止痛'
        ]
    }
};

// 显示草药详情的函数
function showHerbDetail(herbName) {
    const herb = herbDetails[herbName];
    if (!herb) return;

    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div class="p-8">
                <div class="flex justify-between items-start mb-6">
                    <h2 class="text-3xl font-bold ink-text">${herb.name}</h2>
                    <button class="text-gray-500 hover:text-gray-700" onclick="this.closest('.fixed').remove()">
                        <i class="ri-close-line text-2xl"></i>
                    </button>
                </div>
                <div class="space-y-6">
                    <div>
                        <h3 class="text-lg font-semibold text-primary mb-2">基本信息</h3>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <p class="text-sm text-gray-600">学名</p>
                                <p class="text-primary">${herb.latinName}</p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-600">分类</p>
                                <p class="text-primary">${herb.category}</p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-600">性味</p>
                                <p class="text-primary">${herb.properties}</p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-600">归经</p>
                                <p class="text-primary">${herb.meridians}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold text-primary mb-2">功效与作用</h3>
                        <ul class="list-disc list-inside space-y-2">
                            ${herb.functions.map(func => `<li class="text-gray-700">${func}</li>`).join('')}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold text-primary mb-2">用法用量</h3>
                        <p class="text-gray-700">${herb.usage}</p>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold text-primary mb-2">使用禁忌</h3>
                        <p class="text-gray-700">${herb.precautions}</p>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold text-primary mb-2">常用配伍</h3>
                        <ul class="list-disc list-inside space-y-2">
                            ${herb.combinations.map(combo => `<li class="text-gray-700">${combo}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

// 分类筛选功能
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const herbCards = document.querySelectorAll('.herb-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // 更新按钮状态
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // 筛选草药卡片
            herbCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}); 