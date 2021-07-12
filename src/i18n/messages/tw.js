const tw = {
    translation: {
        page_list: [
            {
                text: '首頁',
                url: '/',
            },
            {
                text: '前端技能',
                url: '/frontend',
            },
            {
                text: '後端技能',
                url: '/backend',
            },
            {
                text: '其他技能',
                url: '/others',
            },
        ],
        web_title: '郭蕙瑄履歷表',
        professional_title: '前端工程師',
        coding_life: '和程式為伍的日子 ',
        proverb001: ['。。。', '如果選擇太容易的路，', '可能根本到達不了想要去的地方。'],
        experience: {
            title: '工作經歷',
            period: {
                years: '年',
                months: '月',
            },
            company: [
                {
                    name: '設計接案公司, 台北, 台灣',
                    works: ['網頁前端組組長', '3D 網站研發'],
                },
                {
                    name: '華美航運股份有限公司. 台北, 台灣',
                    works: ['重構和開發運輸管理系統', '開發 OKR 系統（目標和關鍵結果系統）'],
                },
            ],
        },
        skills: {
            title: '技能',
            types: ['前端', '後端', '其他'],
            more: '更多',
        },
        responsibilities: {
            title: '職責',
            list: [
                '撰寫網頁應用程式與除錯',
                '重構和開發共用組件以提高專案品質',
                '團隊合作精神，並能獨立工作',
                '不斷學習和提高技能',
            ],
        },
        projects: {
            title: 'Projects',
            contentList: [
                ['REACT 一頁式網站', 'UI 設計 & 動畫設計'],
                ['Vue 一頁式網站', '網站後台管理 & API', '3D 沉浸式網站'],
                ['Vue 一頁式網站', '網站後台管理 & API', '3D 沉浸式網站'],
                ['行銷登陸頁', 'SVG 動畫 & 動畫設計'],
                ['行銷登陸頁', 'SVG 動畫 & 動畫設計'],
            ],
        },
        proverb002: ['如果不想在世界上虛度一生，那就要一輩子學習。'],
        frontend: {
            page_title: '前端技能',
            javascript_framework: {
                title: 'JavaScript 框架',
                list: [
                    {
                        title: 'Vue.js',
                        contents: ['router', 'vuex', 'i18n', 'axios', '第三方函式庫', 'laravel'],
                    },
                    {
                        title: 'React.js',
                        contents: [
                            'react-router-dom',
                            'hook',
                            'i18next',
                            '第三方函式庫',
                            'laravel',
                        ],
                    },
                ],
            },
            javascript_skills: {
                title: 'JavaScript 技能',
                list: [
                    {
                        title: 'VITE',
                        contents: ['熱模塊替換', '超快速建構工具'],
                    },
                    {
                        title: 'Babylon.js',
                        contents: ['網頁 3D 渲染引擎', '支援 glTF'],
                    },
                    {
                        title: 'gsap',
                        contents: ['網頁動畫', '效能與相容性'],
                    },
                ],
            },
            css_skills: {
                title: 'CSS 技能',
                list: [
                    {
                        title: 'TailwindCss',
                        contents: ['一個功能優先的 CSS 框架', '輕巧的生產環境'],
                    },
                    {
                        title: 'bootstrap',
                        contents: ['前端元件庫', '建立響應式、行動優先的專案'],
                    },
                    {
                        title: 'Sass / Scss',
                        contents: ['縮排語法', '支援定義變數'],
                    },
                ],
            },
        },
        backend: {
            page_title: '後端技能',
            main_view: {
                sql: ['插入', '查詢', '更新', '刪除'],
            },
            php_framework: {
                title: 'PHP 框架',
                list: [
                    {
                        title: 'LARAVEL',
                        contents: ['Blade 樣版', '模型、視圖和控制器'],
                    },
                    {
                        title: 'SMARTY',
                        contents: ['PHP 的網頁模板引擎', '將 HTML 碼與 PHP 程式碼分離'],
                    },
                ],
            },
            php_library: {
                title: 'PHP 函式庫',
                list: [
                    {
                        title: 'TCPDF',
                        contents: ['用於生成 PDF 文檔的 PHP class', '完整支持 UTF-8'],
                    },
                    {
                        title: 'PHPMAILER',
                        contents: ['PHP 電子郵件創建和傳輸 class', 'HTML 訊息和附件'],
                    },
                ],
            },
        },
        others: {
            page_title: '其他技能',
            git: {
                title: 'GIT',
                list: [
                    {
                        title: 'GIT',
                        contents: ['分佈式版本控制系統', '方便的暫存區和多個工作流等功能'],
                    },
                ],
            },
            google_apps_script: {
                title: 'Google Apps Script',
                list: [
                    {
                        title: 'Google Apps Script',
                        contents: ['使用常用的網頁程式語言', '提高生產力', '專為 Google 打造'],
                    },
                    {
                        title: '數據分析',
                        contents: ['SQL', 'Google 試算表', 'Google data studio'],
                    },
                ],
            },
            ui_ux: {
                title: 'UI / UX',
                list: [
                    {
                        title: 'UI / UX',
                        contents: ['使用者介面設計', '使用者經驗設計'],
                    },
                    {
                        title: 'Figma',
                        contents: ['線框圖', '視覺稿', '原型'],
                    },
                ],
            },
        },
    },
};

export default tw;
