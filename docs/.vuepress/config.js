module.exports = {
    title: '周军和申玉的小窝',
    description: '周军和申玉的小窝',
    theme: 'reco',
    base: '/lovely-room/',
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: './favicon.ico' }]
    ],
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            { text: 'J&Y', link: '/' },
            // {
            //     text: '周军的博客',
            //     items: [
            //         { text: 'Github', link: 'https://github.com/optimist-zj' },
            //         { text: '掘金', link: 'https://juejin.cn/user/317097882963767' }
            //     ]
            // }
        ],
        sidebar: [
            {
                title: '介绍',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "J&Y", path: "/" },
                    { title: "J", path: "/introduce/J" },
                    { title: "Y", path: "/introduce/Y" }
                ]
            },
            {
                title: "深圳生活",
                path: '/shenzhen',
                collapsable: false, // 不折叠
                children: [
                    { title: "大浪9区", path: "/shenzhen/longhua" },
                    { title: "水口花园", path: "/shenzhen/shuikouGarden" },
                    { title: "上川村", path: "/shenzhen/shangchuanVillage" },
                ],
            }
        ]
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    }
}
