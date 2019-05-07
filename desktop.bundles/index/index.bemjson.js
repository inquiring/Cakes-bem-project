module.exports = {
    block: 'page',
    title: 'Торты на заказ',
    lang: 'ru',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' },
    ],
    scripts: [
        { elem: "js", url: "index.min.js" },
    ],
    mods: { theme: "islands" },
    mix: {
        block: 'theme',
        mods: {
            color: 'cakes-normal',    // цвета
            breakpoint: 'default', //
            space: 'default',    // отступы
            menu: 'default',    // размер меню
            size: 'default',    // типографика
            font: 'circe',
            gap: 'small' }     // отступы в сетках
    },
    content: [
        {
            block: 'tpl-layout',
            mix: [{ block: 'theme', mods: { 'color-bg': 'default' } }, ],
            content: [
                // new-menu
                {
                    block: 'new-menu',
                    js: true,
                    content: {
                        elem: 'container',
                        mix: {
                            block: 'tpl-layout',
                            elem: 'container',
                            elemMods: { size: 'l', align: 'center' },
                        },
                        content: [
                            {
                                block: 'new-menu', elem: 'header',
                                content: {
                                    block: 'pt-list',
                                    content: [
                                        {
                                            elem: 'item', elemMods: { 'vertical-align': 'center' },
                                            mix: { block: 'theme', mods: { font: 'playfairDisplay' } },
                                            content: {
                                                block: 'text',
                                                tag: 'a',
                                                attrs: { href: 'index.html' },
                                                mods: { size: 'xs-16-s-20-m-24', view: 'primary', weight: 'bold', view: 'link' },
                                                content: 'Cakes'
                                            }
                                        },
                                        {
                                            elem : 'item',
                                            content: {
                                                block: 'button',
                                                name: 'menu',
                                                text: 'меню',
                                                mix: { block: 'new-menu', elem: 'toogle' },
                                                content: [
                                                    {
                                                        block: 'icon',
                                                        mods: { size: 'm', name: 'hamburger',  }
                                                    },
                                                    {
                                                        block: 'icon',
                                                        mods: { size: 'm', name: 'close', visibility: 'hidden' }
                                                    }
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                            {
                                block: 'new-menu', elem: 'nav', elemMods: { visibility: 'hidden' },
                                content: {
                                    block: 'pt-list',
                                    content: [
                                        {
                                            elem: 'item',
                                            mix: { block: 'new-menu', elem: 'item' },
                                            content: {
                                                block: 'text',
                                                tag: 'a',
                                                attrs: { href: '#products-scroll' },
                                                mods: { size: 'xs-12-s-12-m-13', view: 'primary', transform: 'uppercase', view: 'link' },
                                                mix: { block: 'decorator', mods: { 'space-v': 'm', } },
                                                content: 'Наши торты'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            mix: { block: 'new-menu', elem: 'item' },
                                            content: {
                                                block: 'text',
                                                tag: 'a',
                                                attrs: { href: '#order-scroll' },
                                                mods: { size: 'xs-12-s-12-m-13', view: 'primary', transform: 'uppercase', view: 'link' },
                                                mix: { block: 'decorator', mods: { 'space-v': 'm', } },
                                                content: 'Индивидуальный заказ'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            mix: { block: 'new-menu', elem: 'item' },
                                            content: {
                                                block: 'text',
                                                tag: 'a',
                                                attrs: { href: '#reviews-scroll' },
                                                mods: { size: 'xs-12-s-12-m-13', view: 'primary', transform: 'uppercase', view: 'link' },
                                                mix: { block: 'decorator', mods: { 'space-v': 'm', } },
                                                content: 'Отзывы'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            mix: { block: 'new-menu', elem: 'item' },
                                            content: {
                                                block: 'text',
                                                tag: 'a',
                                                attrs: { href: '#about-scroll' },
                                                mods: { size: 'xs-12-s-12-m-13', view: 'primary', transform: 'uppercase', view: 'link' },
                                                mix: { block: 'decorator', mods: { 'space-v': 'm', } },
                                                content: 'О нас'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            mix: { block: 'new-menu', elem: 'item' },
                                            content: {
                                                block: 'text',
                                                tag: 'a',
                                                attrs: { href: '#delivery-scroll' },
                                                mods: { size: 'xs-12-s-12-m-13', view: 'primary', transform: 'uppercase', view: 'link' },
                                                mix: { block: 'decorator', mods: { 'space-v': 'm', } },
                                                content: 'Как заказать'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            mix: { block: 'new-menu', elem: 'item' },
                                            content: {
                                                block: 'text',
                                                tag: 'a',
                                                attrs: { href: '#contacts-scroll' },
                                                mods: { size: 'xs-12-s-12-m-13', view: 'primary', transform: 'uppercase', view: 'link' },
                                                mix: { block: 'decorator', mods: { 'space-v': 'm', } },
                                                content: 'Контакты'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            mix: { block: 'new-menu', elem: 'item' },
                                            content: {
                                                tag: 'a',
                                                attrs: { href:'tel:89068999296' },
                                                block: 'text',
                                                mods: { size: 'm', view: 'primary', weight: 'bold', view: 'link' },
                                                mix: { block: 'decorator', mods: { 'space-v': 'm', } },
                                                content: '+7 906 899 92 96'
                                            }
                                        }
                                    ]
                                }
                            },
                        ]
                    }
                },
                // hero
                {
                    block: 'hero',
                    content: {
                        block: 'tpl-layout', elem: 'container',
                        elemMods: { size: 'l', align: 'center' },
                        content: {
                            elem: 'content',
                            content: [
                                {
                                    block: 'hero', elem: 'intro',
                                    content: [
                                        {
                                            block: 'hero', elem: 'description',
                                            content: [
                                                {
                                                    block: 'text',
                                                    tag: 'h1',
                                                    mods: { size: 'xs-40-s-60-m-78', view: 'primary', weight: 'bold' },
                                                    mix: [
                                                        { block: 'theme', mods: { font: 'playfairDisplay' } },
                                                        { block: 'decorator', mods: {'indent-b': 'xxs' }}
                                                    ],
                                                    content: 'Торты на заказ'
                                                },
                                                {
                                                    block: 'text',
                                                    tag: 'p',
                                                    mods: { size: 'xs-22-s-36-m-41', view: 'promo',  },
                                                    mix: [
                                                        { block: 'theme', mods: { font: 'introScriptR-H2Base' }
                                                    }],
                                                    content: 'Ручная работа'
                                                },
                                            ]
                                        },
                                        {
                                            block: 'button',
                                            mix: { block: 'hero', elem: 'button' },
                                            mods: { theme: 'cake', size: 'm' },
                                            name: 'Выбрать торт',
                                            val: 'passed',
                                            text: 'Выбрать торт'
                                        },
                                        {
                                            block: 'hero', elem: 'footer',
                                            content: [
                                                {
                                                    block: 'pt-icon-plus',
                                                    mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                                                    content: [
                                                    {
                                                        elem: 'icon',
                                                        mix: [
                                                            { block: 'hero', elem: 'icon' },
                                                            { block: 'decorator', mods: { 'indent-r': 'm' } }
                                                        ],
                                                        content: {
                                                            block: 'icon',
                                                            mods: { view: 'brand', size: 's-35-m-55' },
                                                            content: { html: '<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 61 61" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(.1 0 0 -.1 0 61)"><path d="m213 596c-93-30-181-124-203-218-34-139 36-285 168-349 67-33 187-34 254-1 60 30 120 90 150 150 33 67 32 187-1 254-29 60-89 120-148 149-56 27-161 34-220 15zm216-47c160-80 200-276 86-425-39-51-135-94-210-94-153 0-275 122-275 275 0 108 55 196 151 244 87 43 161 43 248 0z"/><path d="m292 548c3-7 23-16 46-20 56-9 95-31 141-79 26-27 41-37 46-29 11 18-63 89-120 116-54 26-120 33-113 12z"/><path d="m274 484c-19-28-21-81-5-97 20-20 11-25-25-14-41 13-54 2-46-41 6-34 37-68 68-76 13-4 24-11 24-17 0-7-7-8-17-4-42 16-73 17-74 4-5-60 26-109 68-109 20 0 23-5 23-40 0-54 27-56 32-3 2 29 8 39 23 41 38 7 65 43 65 85 0 38-1 39-27 34-16-3-36-9-45-12-11-4-18-3-18 4 0 6 11 13 24 17 31 8 62 42 68 76 8 42-3 51-46 40-36-10-45-5-25 15 27 27-1 123-36 123-8 0-22-11-31-26zm56-54c0-9-6-25-14-35-14-19-15-19-27 8-10 22-10 32 0 54 12 27 13 27 27 8 8-10 14-26 14-35zm-60-100c11-11 20-27 20-35 0-21-26-19-50 5s-26 50-5 50c8 0 24-9 35-20zm120 5c0-19-36-55-55-55-21 0-19 26 5 50s50 26 50 5zm-118-132c22-20 24-53 3-53-19 0-55 36-55 55 0 20 29 19 52-2zm118 2c0-19-36-55-55-55-21 0-19 26 5 50s50 26 50 5z"/><path d="m523 403c-9-3-9-12-2-29 5-14 9-39 9-55 0-20 5-29 16-29 14 0 16 8 10 46-7 53-16 73-33 67z"/></g></svg>' }
                                                        },
                                                    },
                                                    {
                                                        elem: 'block',
                                                        tag: 'span',
                                                        content: {
                                                            block: 'text',
                                                            mods: { size: 's', view: 'black' },
                                                            content: 'Натуральные ингредиенты'
                                                        }
                                                    }]
                                                },
                                                {
                                                    block: 'pt-icon-plus',
                                                    content: [
                                                        {
                                                            elem: 'icon',
                                                            tag: 'span',
                                                            mix: [
                                                                { block: 'decorator', mods: { 'indent-r': 'm' } },
                                                                { block: 'hero', elem: 'icon' }
                                                            ],
                                                            content:  {
                                                                block: 'icon',
                                                                mods: { view: 'brand', size: 's-35-m-55' },
                                                                content: { html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999" ><g fill=""><path d="M484.684 116.809h-71.022c11.595-12.57 18.694-29.348 18.694-47.757 0 0-.014-2.81-.041-3.612-.767-22.718-13.156-42.978-33.139-54.2-20.387-11.446-44.674-11.443-64.967.011l-32.3 18.229C281.68 40.897 265.849 58.105 256 78.339c-9.849-20.234-25.68-37.442-45.908-48.858l-32.3-18.231c-20.293-11.453-44.58-11.457-64.967-.011-19.983 11.221-32.372 31.482-33.139 54.2-.027.802-.041 3.612-.041 3.612 0 18.409 7.099 35.187 18.694 47.758H27.316C12.254 116.809 0 129.064 0 144.126v64.834c0 15.062 12.254 27.316 27.316 27.316h12.506v245.751c0 15.062 12.254 27.316 27.316 27.316h377.723c15.062 0 27.316-12.254 27.316-27.316V236.275h12.506c15.062 0 27.316-12.254 27.316-27.316v-64.834c.001-15.061-12.253-27.316-27.315-27.316zM313.093 49.297l32.3-18.229c13.309-7.512 29.25-7.506 42.642.014 12.99 7.293 21.041 20.424 21.537 35.127.018.546.027 2.843.027 2.843 0 26.334-21.424 47.758-47.758 47.758h-93.813c3.411-28.148 20.027-53.383 45.065-67.513zM102.427 66.208c.497-14.702 8.548-27.833 21.537-35.127 6.702-3.763 14.038-5.643 21.366-5.643 7.317 0 14.626 1.876 21.275 5.63l32.3 18.229c25.038 14.13 41.654 39.365 45.064 67.511h-93.813c-26.333 0-47.757-21.424-47.757-47.757.001.001.01-2.297.028-2.843zm102.374 204.68h-46.842c-6.284 0-11.378 5.095-11.378 11.378s5.094 11.378 11.378 11.378h46.842v192.943H67.138a4.564 4.564 0 0 1-4.56-4.559V236.275h142.223v34.613zm0-57.367H27.316a4.566 4.566 0 0 1-4.56-4.56v-64.834a4.565 4.565 0 0 1 4.56-4.561h177.485v73.955zm79.641 273.065h-56.885V139.564h56.885v347.022zm164.98-4.559a4.565 4.565 0 0 1-4.56 4.56H307.198V293.643h43.355c6.284 0 11.378-5.095 11.378-11.378s-5.094-11.378-11.378-11.378h-43.355v-34.612h142.225v245.752zm39.822-273.066a4.566 4.566 0 0 1-4.56 4.56H307.198v-73.956h177.487a4.566 4.566 0 0 1 4.56 4.561v64.835z"></path><path d="M404.598 293.643h1.138c6.284 0 11.378-5.095 11.378-11.378s-5.094-11.378-11.378-11.378h-1.138c-6.284 0-11.378 5.095-11.378 11.378.001 6.283 5.094 11.378 11.378 11.378zm-301.82 0h1.138c6.284 0 11.378-5.095 11.378-11.378s-5.095-11.378-11.378-11.378h-1.138c-6.284 0-11.378 5.095-11.378 11.378s5.094 11.378 11.378 11.378z"></path></g></svg>' }
                                                            },
                                                        },
                                                        {
                                                        elem: 'block',
                                                        tag: 'span',
                                                        content: {
                                                            block: 'text',
                                                            mods: { size: 's', view: 'black' },
                                                            content: 'Доставка бесплатно при заказе от 2000 рублей*'
                                                        }
                                                    }]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                },
                // наши торты
                {
                    elem: 'section',
                    mix: [
                        { block: 'products' },
                        { block: 'decorator', mods: { 'indent-b': '' } }
                    ],
                    attrs: { id: 'products-scroll' },
                    content: {
                        elem: 'container',
                        elemMods: { size: 'l', align: 'center' },
                        content: [
                            {
                                elem: 'content',
                                content: {
                                    block: 'text',
                                    mods: { size: 'xs-24-s-28-m-40', view: 'primary' },
                                    tag: 'h2',
                                    mix: [
                                        { block: 'theme', mods: { font: 'playfairDisplay' } },
                                        { block: 'decorator', mods: {'indent-b': '' }}
                                    ],
                                    content: 'Наши торты'
                                },
                            },
                            {
                                elem: 'content',
                                content: {
                                    block: 'tpl-grid',
                                    mods: { 'col-gap': 'full', 'row-gap': 'full', 'xs-ratio': '1', '500-ratio': '1-1', 's-columns': '8', 'm-columns': '12' },
                                    content: [
                                        {
                                            block: 'tpl-grid',
                                            elem: 'fraction',
                                            elemMods: { 'xs-col': '1', 'xs-row': '1', 's-col': '5', 's-row': '2', 'm-col': '7' },
                                            content: {
                                                block: 'pt-card',
                                                tag: 'a',
                                                attrs: { href: '#' },
                                                mix: { block: 'product', mods: { size: 'large' }},
                                                content: [
                                                    {

                                                        block: 'pt-card', elem: 'image', elemMods: { size: 'cover' },
                                                        mix: { block: 'product', elem: 'image' },
                                                        content: {
                                                            tag: 'picture',
                                                            content: [
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  1266px)', srcset: '../../img/product/classicCake-desktop.jpg' },
                                                                },
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  700px)', srcset: '../../img/product/classicCake-tablet.jpg' },
                                                                },
                                                                {
                                                                    block: 'image',
                                                                    url: '../../img/product/classicCake-mobile.jpg',
                                                                    alt: 'классический торт'
                                                                },
                                                            ]
                                                        }
                                                    },
                                                    // header
                                                    {
                                                        elem: 'header',
                                                        mix: { block: 'product', elem: 'header' },
                                                        content: {
                                                            elem: 'info',
                                                            content: [
                                                                {
                                                                    block: 'text',
                                                                    tag: 'h3',
                                                                    mods: { size: 'xs-14-s-14-m-24', view: 'primary', weight: 'regular' },
                                                                    mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                    content: 'Классические'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    tag: 'p',
                                                                    mods: { size: 'xs-10-s-12-m-20', view: 'promo', align: 'left' },
                                                                    mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                    content: '24 вида'
                                                                },
                                                            ]
                                                        }
                                                    },
                                                    // footer
                                                    {
                                                        elem: 'footer',
                                                        elemMods: { distribute: 'right', 'vertical-align': 'center', },
                                                        mix: { block: 'product', elem: 'footer' },
                                                        content: {
                                                            block: 'pt-icon-plus',
                                                            tag: 'span',
                                                            mods: { 'vertical-align': 'center' },
                                                            content: [
                                                                {
                                                                    elem: 'block',
                                                                    tag: 'span',
                                                                    content: {
                                                                        block: 'text',
                                                                        tag: 'span',
                                                                        mods: { size: 'xs-0-s-12-m-0', view: 'promo' },
                                                                        content: 'Смотреть'
                                                                    },
                                                                },
                                                                {
                                                                    elem: 'icon',
                                                                    tag: 'span',
                                                                    content: {
                                                                        block: 'icon',
                                                                        mods: { size: 'm', view: 'secondary', name: 'arrow-right' }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                ]
                                            },
                                        },
                                        {
                                            block: 'tpl-grid',
                                            elem: 'fraction',
                                            elemMods: { 'xs-col': '1', 'xs-row': '1', 's-col': '3', 's-row': '1', 'm-col': '5' },
                                            content: {
                                                block: 'pt-card',
                                                tag: 'a',
                                                attrs: { href: '#' },
                                                mix: { block: 'product', mods: { size: 'small' }},
                                                content: [
                                                    {

                                                        block: 'pt-card', elem: 'image', elemMods: { size: 'cover' },
                                                        mix: { block: 'product', elem: 'image' },
                                                        content: {
                                                            tag: 'picture',
                                                            content: [
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  1266px)', srcset: '../../img/product/mousCake-desktop.jpg' },
                                                                },
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  700px)', srcset: '../../img/product/mousCake-tablet.jpg' },
                                                                },
                                                                {
                                                                    block: 'image',
                                                                    url: '../../img/product/mousCake-mobile.jpg',
                                                                    alt: 'муссовый торт'
                                                                },
                                                            ]
                                                        }
                                                    },
                                                    // header
                                                    {
                                                        elem: 'header',
                                                        mix: { block: 'product', elem: 'header' },
                                                        content: [
                                                            {
                                                                elem: 'info',
                                                                content: [
                                                                    {
                                                                        block: 'text',
                                                                        tag: 'h3',
                                                                        mods: { size: 'xs-14-s-14-m-24', view: 'primary', weight: 'regular' },
                                                                        mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                        content: 'Муссовые'
                                                                    },
                                                                    {
                                                                        block: 'text',
                                                                        tag: 'p',
                                                                        mods: { size: 'xs-10-s-12-m-20', view: 'promo', align: 'left' },
                                                                        mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                        content: '12 видов'
                                                                    },
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    // footer
                                                    {
                                                        elem: 'footer',
                                                        elemMods: { distribute: 'right', 'vertical-align': 'center',},
                                                        mix: { block: 'product', elem: 'footer' },
                                                        content: {
                                                            block: 'pt-icon-plus',
                                                            mods: { 'vertical-align': 'center' },
                                                            content: [
                                                                {
                                                                    elem: 'block',
                                                                    tag: 'span',
                                                                    content: {
                                                                        block: 'text',
                                                                        tag: 'span',
                                                                        mods: { size: 'xs-0-s-12-m-0', view: 'promo' },
                                                                        content: 'Смотреть'
                                                                    },
                                                                },
                                                                {
                                                                    elem: 'icon',
                                                                    tag: 'span',
                                                                    content: {
                                                                        block: 'icon',
                                                                        mods: { size: 'm', view: 'secondary', name: 'arrow-right' }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                ]
                                            },
                                        },
                                        {
                                            block: 'tpl-grid',
                                            elem: 'fraction', elemMods: { 'xs-col': '1', 'xs-row': '1', 's-col': '3', 's-row': '1', 'm-col': '5' },
                                            content: {
                                                block: 'pt-card',
                                                tag: 'a',
                                                attrs: { href: '#' },
                                                mix: { block: 'product', mods: { size: 'small' }},
                                                content: [
                                                    {

                                                        block: 'pt-card', elem: 'image', elemMods: { size: 'cover' },
                                                        mix: { block: 'product', elem: 'image' },
                                                        content: {
                                                            tag: 'picture',
                                                            content: [
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  1266px)', srcset: '../../img/product/weddingCake-desktop.jpg' },
                                                                },
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  700px)', srcset: '../../img/product/weddingCake-tablet.jpg' },
                                                                },
                                                                {
                                                                    block: 'image',
                                                                    url: '../../img/product/weddingCake-mobile.jpg',
                                                                    alt: 'свадебный торт'
                                                                },
                                                            ]
                                                        }
                                                    },
                                                    // header
                                                    {
                                                        elem: 'header',
                                                        mix: { block: 'product', elem: 'header' },
                                                        content: {
                                                            elem: 'info',
                                                            content: [
                                                                {
                                                                    block: 'text',
                                                                    tag: 'h3',
                                                                    mods: { size: 'xs-14-s-14-m-24', view: 'primary', weight: 'regular' },
                                                                    mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                    content: 'Свадебные'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    tag: 'p',
                                                                    mods: { size: 'xs-10-s-12-m-20', view: 'promo', align: 'left' },
                                                                    mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                    content: '20 видов'
                                                                },
                                                            ]
                                                        }
                                                    },
                                                    // footer
                                                    {
                                                        elem: 'footer',
                                                        elemMods: { distribute: 'right', 'vertical-align': 'center', },
                                                        mix: { block: 'product', elem: 'footer' },
                                                        content: {
                                                            block: 'pt-icon-plus',
                                                            mods: { 'vertical-align': 'center' },
                                                            content: [
                                                                {
                                                                    elem: 'block',
                                                                    tag: 'span',
                                                                    content: {
                                                                        block: 'text',
                                                                        tag: 'span',
                                                                        mods: { size: 'xs-0-s-12-m-0', view: 'promo' },
                                                                        content: 'Смотреть'
                                                                    },
                                                                },
                                                                {
                                                                    elem: 'icon',
                                                                    tag: 'span',
                                                                    content: {
                                                                        block: 'icon',
                                                                        mods: { size: 'm', view: 'secondary', name: 'arrow-right' }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                ]
                                            },
                                        },
                                        {
                                            block: 'tpl-grid',
                                            elem: 'fraction', elemMods: { 'xs-col': '1', 'xs-row': '1', 's-col': '3', 's-row': '1', 'm-col': '5' },
                                            content: {
                                                block: 'pt-card',
                                                tag: 'a',
                                                attrs: { href: '#' },
                                                mix: { block: 'product', mods: { size: 'small' }},
                                                content: [
                                                    {

                                                        block: 'pt-card', elem: 'image', elemMods: { size: 'cover' },
                                                        mix: { block: 'product', elem: 'image' },
                                                        content: {
                                                            tag: 'picture',
                                                            content: [
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  1266px)', srcset: '../../img/product/menCake-desktop.jpg' },
                                                                },
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  700px)', srcset: '../../img/product/menCake-tablet.jpg' },
                                                                },
                                                                {
                                                                    block: 'image',
                                                                    url: '../../img/product/menCake-mobile.jpg',
                                                                    alt: 'торт для мужчин'
                                                                },
                                                            ]
                                                        }
                                                    },
                                                    // header
                                                    {
                                                        elem: 'header',
                                                        mix: { block: 'product', elem: 'header' },
                                                        content: {
                                                            elem: 'info',
                                                            content: [
                                                                {
                                                                    block: 'text',
                                                                    tag: 'h3',
                                                                    mods: { size: 'xs-14-s-14-m-24', view: 'primary', weight: 'regular' },
                                                                    mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                    content: 'Мужчинам'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    tag: 'p',
                                                                    mods: { size: 'xs-10-s-12-m-20', view: 'promo', align: 'left' },
                                                                    mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                    content: '12 видов'
                                                                },
                                                            ]
                                                        }
                                                    },
                                                    // footer
                                                    {
                                                        elem: 'footer',
                                                        elemMods: { distribute: 'right', 'vertical-align': 'center', },
                                                        mix: { block: 'product', elem: 'footer' },
                                                        content: {
                                                            block: 'pt-icon-plus',
                                                            mods: { 'vertical-align': 'center' },
                                                            content: [
                                                                {
                                                                    elem: 'block',
                                                                    tag: 'span',
                                                                    content: {
                                                                        block: 'text',
                                                                        tag: 'span',
                                                                        mods: { size: 'xs-0-s-12-m-0', view: 'promo' },
                                                                        content: 'Смотреть'
                                                                    },
                                                                },
                                                                {
                                                                    elem: 'icon',
                                                                    tag: 'span',
                                                                    content: {
                                                                        block: 'icon',
                                                                        mods: { size: 'm', view: 'secondary', name: 'arrow-right' }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                ]
                                            },
                                        },
                                        {
                                            block: 'tpl-grid',
                                            elem: 'fraction', elemMods: { 'xs-col': '1', 'xs-row': '1', 's-col': '5', 's-row': '2', 'm-col': '7' },
                                            content: {
                                                block: 'pt-card',
                                                tag: 'a',
                                                attrs: { href: '#' },
                                                mix: { block: 'product', mods: { size: 'large' }},
                                                content: [
                                                    {

                                                        block: 'pt-card', elem: 'image', elemMods: { size: 'cover' },
                                                        mix: { block: 'product', elem: 'image', elemMods: { 'bg-color': 'gray' } },
                                                        content: {
                                                            tag: 'picture',
                                                            content: [
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  1266px)', srcset: '../../img/product/kidsCake-desktop.jpg' },
                                                                },
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  700px)', srcset: '../../img/product/kidsCake-tablet.jpg' },
                                                                },
                                                                {
                                                                    block: 'image',
                                                                    url: '../../img/product/kidsCake-mobile.jpg',
                                                                    alt: 'детский торт'
                                                                },
                                                            ]
                                                        }
                                                    },
                                                    // header
                                                    {
                                                        elem: 'header',
                                                        mix: { block: 'product', elem: 'header' },
                                                        content: {
                                                            elem: 'info',
                                                            content: [
                                                                {
                                                                    block: 'text',
                                                                    tag: 'h3',
                                                                    mods: { size: 'xs-14-s-14-m-24', view: 'primary', weight: 'regular' },
                                                                    mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                    content: 'Детские'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    tag: 'p',
                                                                    mods: { size: 'xs-10-s-12-m-20', view: 'promo', align: 'left' },
                                                                    mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                    content: '18 видов'
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    // footer
                                                    {
                                                        elem: 'footer',
                                                        elemMods: { distribute: 'right', 'vertical-align': 'center',},
                                                        mix: { block: 'product', elem: 'footer' },
                                                        content: {
                                                            block: 'pt-icon-plus',
                                                            mods: { 'vertical-align': 'center' },
                                                            content: [
                                                                {
                                                                    elem: 'block',
                                                                    tag: 'span',
                                                                    content: {
                                                                        block: 'text',
                                                                        tag: 'span',
                                                                        mods: { size: 'xs-0-s-12-m-0', view: 'promo' },
                                                                        content: 'Смотреть'
                                                                    },
                                                                },
                                                                {
                                                                    elem: 'icon',
                                                                    tag: 'span',
                                                                    content: {
                                                                        block: 'icon',
                                                                        mods: { size: 'm', view: 'secondary', name: 'arrow-right' }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                ]
                                            },
                                        },
                                        {
                                            block: 'tpl-grid',
                                            elem: 'fraction', elemMods: { 'xs-col': '1', 'xs-row': '1', 's-col': '3', 's-row': '1', 'm-col': '5' },
                                            content: {
                                                block: 'pt-card',
                                                tag: 'a',
                                                attrs: { href: '#' },
                                                mix: { block: 'product', mods: { size: 'small' }},
                                                content: [
                                                    {
                                                        block: 'pt-card', elem: 'image', elemMods: { size: 'cover' },
                                                        mix: { block: 'product', elem: 'image' },
                                                        content: {
                                                            tag: 'picture',
                                                            content: [
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  1266px)', srcset: '../../img/product/womenCake-desktop.jpg' },
                                                                },
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  700px)', srcset: '../../img/product/womenCake-tablet.jpg' },
                                                                },
                                                                {
                                                                    block: 'image',
                                                                    url: '../../img/product/womenCake-mobile.jpg',
                                                                    alt: 'торт для женщин'
                                                                },
                                                            ]
                                                        }
                                                    },
                                                    // header
                                                    {
                                                        elem: 'header',
                                                        mix: { block: 'product', elem: 'header' },
                                                        content: [
                                                            {
                                                                elem: 'info',
                                                                content: [
                                                                    {
                                                                        block: 'text',
                                                                        tag: 'h3',
                                                                        mods: { size: 'xs-14-s-14-m-24', view: 'primary', weight: 'regular' },
                                                                        mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                        content: 'Женщинам'
                                                                    },
                                                                    {
                                                                        block: 'text',
                                                                        tag: 'p',
                                                                        mods: { size: 'xs-10-s-12-m-20', view: 'promo', align: 'left' },
                                                                        mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                        content: '24 вида'
                                                                    },
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    // footer
                                                    {
                                                        elem: 'footer',
                                                        elemMods: { distribute: 'right', 'vertical-align': 'center', },
                                                        mix: { block: 'product', elem: 'footer' },
                                                        content: {
                                                            block: 'pt-icon-plus',
                                                            mods: { 'vertical-align': 'center' },
                                                            content: [
                                                                {
                                                                    elem: 'block',
                                                                    tag: 'span',
                                                                    content: {
                                                                        block: 'text',
                                                                        tag: 'span',
                                                                        mods: { size: 'xs-0-s-12-m-0', view: 'promo' },
                                                                        content: 'Смотреть'
                                                                    },
                                                                },
                                                                {
                                                                    elem: 'icon',
                                                                    tag: 'span',
                                                                    content: {
                                                                        block: 'icon',
                                                                        mods: { size: 'm', view: 'secondary', name: 'arrow-right' }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                ]
                                            }
                                        }
                                    ],
                                }
                            }
                        ]
                    }
                },
                // order индивидуальный заказ
                {
                    elem: 'section',
                    mix: { block: 'order', js: true },
                    attrs: { id: 'order-scroll' },
                    content: {
                        elem: 'container',
                        elemMods: { size: 'l', align: 'center' },
                        content: {
                            elem: 'content',
                            content: [
                                {
                                    elem: 'heading',
                                    mix: { block: 'text',  mods: { align: 'center'} },
                                    content: {
                                        elem: 'content',
                                        content: [
                                            {
                                                block: 'text',
                                                mods: { size: 'xs-24-s-28-m-40', view: 'primary' },
                                                tag: 'h2',
                                                mix: [
                                                    { block: 'theme', mods: { font: 'playfairDisplay' } },
                                                    { block: 'decorator', mods: {'indent-b': 'xxs' }}
                                                ],
                                                content: 'Идивидуальный заказ'
                                            },
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mods: { size: 'xs-22-s-26-m-35', view: 'promo' },
                                                mix: [
                                                    { block: 'theme', mods: { font: 'introScriptR-H2Base' } },
                                                    { block: 'decorator',  mods: {'indent-t': 'xxs' }}
                                                ],
                                                content: 'Собери торт в три шага'
                                            },
                                        ]
                                    }
                                },
                                // шаг 1
                                {
                                    elem: 'content',
                                    mix: [
                                        { block: 'theme', mods: { 'color-bg': 'normal' } },
                                        { block: 'order', elem: 'card' }
                                    ],
                                    content: [
                                        {
                                            elem: 'heading',
                                            mix: [
                                                { block: 'theme', mods: { font: 'playfairDisplay' } },
                                                { block: 'text', mods: { weight: 'bold', view: 'brand' }},
                                                { block: 'order', elem: 'heading' },
                                            ],
                                            content: [
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    mods: { size: 'xs-30-s-36-m-58' },
                                                    mix: { block: 'decorator', mods: {'indent-r': 's'} },
                                                    content: '01'
                                                },
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    mods: { size: 'xs-16-s-18-m-27' },
                                                    content: 'Выберите начинку'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'carousel',
                                            mods: { orientation: 'horizontal', animate: true },
                                            content: [
                                                {
                                                    elem: 'inner', elemMods: { 's-m-direction': 'row', content: 'center' },
                                                    content: [
                                                        // элемент карусели
                                                        {
                                                            elem: 'item',
                                                            elemMods: { state: 'active' },
                                                            content: [
                                                                //
                                                                {
                                                                    block: 'pt-card',
                                                                    mix: { block: 'filling' },
                                                                    content: {
                                                                        elem: 'content', elemMods: { distribute: 'center' },
                                                                        mix: { block: 'filling', elem: 'content' },
                                                                        content: [
                                                                            // image
                                                                            {
                                                                                elem: 'image',
                                                                                mix: { block: 'filling', elem: 'image' },
                                                                                content: {
                                                                                    tag: 'picture',
                                                                                    content: [
                                                                                        {
                                                                                            tag: 'source',
                                                                                            attrs: { media: '(min-width:  1024px)', srcset: '../../img/filling/filling_item1-desktop.jpg' },
                                                                                        },
                                                                                        {
                                                                                            tag: 'source',
                                                                                            attrs: { media: '(min-width:  700px)', srcset: '../../img/filling/filling_item1-tablet.jpg' },
                                                                                        },
                                                                                        {
                                                                                            block: 'image',
                                                                                            url: '../../img/filling/filling_item1-mobile.jpg',
                                                                                            alt: 'торт Шоколадный ганаш'
                                                                                        },
                                                                                    ]
                                                                                },
                                                                            },
                                                                            // footer
                                                                            {
                                                                                elem: 'footer',
                                                                                mix: { block: 'filling', elem: 'footer' },
                                                                                content: {
                                                                                    elem: 'info',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'text',
                                                                                            tag: 'h3',
                                                                                            mods: { align: 'left', size: 'xs-16-s-18-m-20', view: 'primary', },
                                                                                            mix: { block: 'decorator', mods: { 'indent-v': 'xxs' } },
                                                                                            content: 'Шоколадный ганаш 1'
                                                                                        },
                                                                                        {
                                                                                            block: 'text',
                                                                                            tag: 'p',
                                                                                            mods: { size: 'xs-14-s-14-m-18', view: 'primary', },
                                                                                            mix: { block: 'decorator', mods: {'indent-t': 'xxs'} },
                                                                                            content: "Ароматный шоколадный бисквит, густой шоколадный крем – самый шоколадный из всех возможных десертов!"
                                                                                        },
                                                                                        {
                                                                                            block: 'filling', elem: 'block',
                                                                                            content: [
                                                                                                {
                                                                                                    block: 'text',
                                                                                                    tag: 'p',
                                                                                                    mods: { size: 'xs-18-s-20-m-22', view: 'primary', weight: 'bold' },
                                                                                                    mix: [
                                                                                                        { block: 'theme', mods: { font: 'playfairDisplay' }},
                                                                                                    ],
                                                                                                    content: '1000 руб/кг'
                                                                                                },
                                                                                                {
                                                                                                    block: 'radio',
                                                                                                    mods: {
                                                                                                        theme: 'cake',
                                                                                                        size: 'm',
                                                                                                        type: 'button'
                                                                                                    },
                                                                                                    name: 'radio-islands',
                                                                                                    val: 'Шоколадный ганаш-1',
                                                                                                    text: 'выбрать'
                                                                                                },
                                                                                            ]
                                                                                        },
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                            ]
                                                        },
                                                        // элемент карусели
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                //
                                                                {
                                                                    block: 'pt-card',
                                                                    mix: { block: 'filling' },
                                                                    content: {
                                                                        elem: 'content', elemMods: { distribute: 'center' },
                                                                        content: [
                                                                            // image
                                                                            {
                                                                                elem: 'image',
                                                                                mix: { block: 'filling', elem: 'image' },
                                                                                content: {
                                                                                    tag: 'picture',
                                                                                    content: [
                                                                                        {
                                                                                            tag: 'source',
                                                                                            attrs: { media: '(min-width:  1024px)', srcset: '../../img/filling/filling_item1-desktop.jpg' },
                                                                                        },
                                                                                        {
                                                                                            tag: 'source',
                                                                                            attrs: { media: '(min-width:  700px)', srcset: '../../img/filling/filling_item1-tablet.jpg' },
                                                                                        },
                                                                                        {
                                                                                            block: 'image',
                                                                                            url: '../../img/filling/filling_item1-mobile.jpg',
                                                                                            alt: 'торт Шоколадный ганаш 2'
                                                                                        },
                                                                                    ]
                                                                                },
                                                                            },
                                                                            // footer
                                                                            {
                                                                                elem: 'footer',
                                                                                mix: { block: 'filling', elem: 'footer' },
                                                                                content: {
                                                                                    elem: 'info',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'text',
                                                                                            tag: 'h3',
                                                                                            mods: { align: 'left', size: 'xs-16-s-18-m-20', view: 'primary', },
                                                                                            mix: { block: 'decorator', mods: { 'indent-v': 'xxs' } },
                                                                                            content: 'Шоколадный ганаш 2'
                                                                                        },
                                                                                        {
                                                                                            block: 'text',
                                                                                            tag: 'p',
                                                                                            mods: { size: 'xs-14-s-14-m-18', view: 'primary', },
                                                                                            mix: { block: 'decorator', mods: {'indent-t': 'xxs'} },
                                                                                            content: "Ароматный шоколадный бисквит, густой шоколадный крем – самый шоколадный из всех возможных десертов!"
                                                                                        },
                                                                                        {
                                                                                            block: 'filling', elem: 'block',
                                                                                            content: [
                                                                                                {
                                                                                                    block: 'text',
                                                                                                    tag: 'p',
                                                                                                    mods: { size: 'xs-18-s-20-m-22', view: 'primary', weight: 'bold' },
                                                                                                    mix: { block: 'theme', mods: { font: 'playfairDisplay' }},
                                                                                                    content: '1000 руб/кг'
                                                                                                },
                                                                                                {
                                                                                                    block: 'radio',
                                                                                                    mods: {
                                                                                                        theme: 'cake',
                                                                                                        size: 'm',
                                                                                                        type: 'button'
                                                                                                    },
                                                                                                    name: 'radio-islands',
                                                                                                    val: 'Шоколадный ганаш-2',
                                                                                                    text: 'выбрать'
                                                                                                },
                                                                                            ]
                                                                                        },
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                            ]
                                                        },
                                                        // элемент карусели
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                //
                                                                {
                                                                    block: 'pt-card',
                                                                    mix: { block: 'filling' },
                                                                    content: {
                                                                        elem: 'content', elemMods: { distribute: 'center' },
                                                                        content: [
                                                                            // image
                                                                            {
                                                                                elem: 'image',
                                                                                mix: { block: 'filling', elem: 'image' },
                                                                                content: {
                                                                                    tag: 'picture',
                                                                                    content: [
                                                                                        {
                                                                                            tag: 'source',
                                                                                            attrs: { media: '(min-width:  1024px)', srcset: '../../img/filling/filling_item1-desktop.jpg' },
                                                                                        },
                                                                                        {
                                                                                            tag: 'source',
                                                                                            attrs: { media: '(min-width:  700px)', srcset: '../../img/filling/filling_item1-tablet.jpg' },
                                                                                        },
                                                                                        {
                                                                                            block: 'image',
                                                                                            url: '../../img/filling/filling_item1-mobile.jpg',
                                                                                            alt: 'торт Шоколадный ганаш 3'
                                                                                        },
                                                                                    ]
                                                                                },
                                                                            },
                                                                            // footer
                                                                            {
                                                                                elem: 'footer',
                                                                                mix: { block: 'filling', elem: 'footer' },
                                                                                content: {
                                                                                    elem: 'info',
                                                                                    content: [
                                                                                        {

                                                                                            block: 'text',
                                                                                            tag: 'h3',
                                                                                            mods: { align: 'left', size: 'xs-16-s-18-m-20', view: 'primary', },
                                                                                            mix: { block: 'decorator', mods: { 'indent-v': 'xxs' } },
                                                                                            content: 'Шоколадный ганаш 3'
                                                                                        },
                                                                                        {
                                                                                            block: 'text',
                                                                                            tag: 'p',
                                                                                            mods: { size: 'xs-14-s-14-m-18', view: 'primary', },
                                                                                            mix: { block: 'decorator', mods: {'indent-t': 'xxs'} },
                                                                                            content: "Ароматный шоколадный бисквит, густой шоколадный крем – самый шоколадный из всех возможных десертов!"
                                                                                        },
                                                                                        {
                                                                                            block: 'filling', elem: 'block',
                                                                                            content: [
                                                                                                {
                                                                                                    block: 'text',
                                                                                                    tag: 'p',
                                                                                                    mods: { size: 'xs-18-s-20-m-22', view: 'primary', weight: 'bold' },
                                                                                                    mix: [
                                                                                                        { block: 'theme', mods: { font: 'playfairDisplay' }},
                                                                                                    ],
                                                                                                    content: '1000 руб/кг'
                                                                                                },
                                                                                                {
                                                                                                    block: 'radio',
                                                                                                    mods: {
                                                                                                        theme: 'cake',
                                                                                                        size: 'm',
                                                                                                        type: 'button'
                                                                                                    },
                                                                                                    name: 'radio-islands',
                                                                                                    val: 'Шоколадный ганаш-3',
                                                                                                    text: 'выбрать'
                                                                                                },
                                                                                            ]
                                                                                        },
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                            ]
                                                        },
                                                        // элемент карусели
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                //
                                                                {
                                                                    block: 'pt-card',
                                                                    mix: { block: 'filling' },
                                                                    content: {
                                                                        elem: 'content', elemMods: { distribute: 'center' },
                                                                        content: [
                                                                            // image
                                                                            {
                                                                                elem: 'image',
                                                                                mix: { block: 'filling', elem: 'image' },
                                                                                content: {
                                                                                    tag: 'picture',
                                                                                    content: [
                                                                                        {
                                                                                            tag: 'source',
                                                                                            attrs: { media: '(min-width:  1024px)', srcset: '../../img/filling/filling_item1-desktop.jpg' },
                                                                                        },
                                                                                        {
                                                                                            tag: 'source',
                                                                                            attrs: { media: '(min-width:  700px)', srcset: '../../img/filling/filling_item1-tablet.jpg' },
                                                                                        },
                                                                                        {
                                                                                            block: 'image',
                                                                                            url: '../../img/filling/filling_item1-mobile.jpg',
                                                                                            alt: 'торт Шоколадный ганаш 4'
                                                                                        },
                                                                                    ]
                                                                                },
                                                                            },
                                                                            // footer
                                                                            {
                                                                                elem: 'footer',
                                                                                mix: { block: 'filling', elem: 'footer' },
                                                                                content: {
                                                                                    elem: 'info',
                                                                                    content: [
                                                                                        {

                                                                                            block: 'text',
                                                                                            tag: 'h3',
                                                                                            mods: { align: 'left', size: 'xs-16-s-18-m-20', view: 'primary', },
                                                                                            mix: { block: 'decorator', mods: { 'indent-v': 'xxs' } },
                                                                                            content: 'Шоколадный ганаш 4'
                                                                                        },
                                                                                        {
                                                                                            block: 'text',
                                                                                            tag: 'p',
                                                                                            mods: { size: 'xs-14-s-14-m-18', view: 'primary', },
                                                                                            mix: { block: 'decorator', mods: {'indent-t': 'xxs'} },
                                                                                            content: "Ароматный шоколадный бисквит, густой шоколадный крем – самый шоколадный из всех возможных десертов!"
                                                                                        },
                                                                                        {
                                                                                            block: 'filling', elem: 'block',
                                                                                            content: [
                                                                                                {
                                                                                                    block: 'text',
                                                                                                    tag: 'p',
                                                                                                    mods: { size: 'xs-18-s-20-m-22', view: 'primary', weight: 'bold' },
                                                                                                    mix: [
                                                                                                        { block: 'theme', mods: { font: 'playfairDisplay' }},
                                                                                                    ],
                                                                                                    content: '1000 руб/кг'
                                                                                                },
                                                                                                {
                                                                                                    block: 'radio',
                                                                                                    mods: {
                                                                                                        theme: 'cake',
                                                                                                        size: 'm',
                                                                                                        type: 'button'
                                                                                                    },
                                                                                                    name: 'radio-islands',
                                                                                                    val: 'Шоколадный ганаш-4',
                                                                                                    text: 'выбрать'
                                                                                                },
                                                                                            ]
                                                                                        },
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                            ]
                                                        },
                                                    ]

                                                },
                                                {
                                                    elem: 'control',
                                                    elemMods: { type: 'left', xs: 'hide', 's-view': 'circle' },
                                                    content: {
                                                        block: 'icon',
                                                        mods: { size: 'm', name: 'arrow-left', view: 'brand' },
                                                        mix: { block: 'decorator', mods: { 'indent-t': 'xs' }},
                                                    }
                                                },
                                                {
                                                    elem: 'control',
                                                    elemMods: { type: 'right', xs: 'hide', 's-view': 'circle' },
                                                    content: {
                                                        block: 'icon',
                                                        mods: { size: 'm', name: 'arrow-right', view: 'brand' },
                                                        mix: { block: 'decorator', mods: { 'indent-t': 'xs' }},
                                                    }
                                                },
                                                {
                                                    elem: 'paginator', elem: 'paginator', elemMods: { position: 'order-1' },
                                                    content: [
                                                        {
                                                            elem: 'paginator-button',
                                                            elemMods: { state: 'active' },
                                                        },
                                                        {
                                                            elem: 'paginator-button',
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                // шаг 2
                                {
                                    elem: 'content',
                                    mix: [
                                        { block: 'theme', mods: { 'color-bg': 'normal' } },
                                        { block: 'order', elem: 'card' }
                                    ],
                                    content: [
                                        {
                                            elem: 'heading',
                                            mix: [
                                                { block: 'theme', mods: { font: 'playfairDisplay' } },
                                                { block: 'text', mods: { weight: 'bold', view: 'brand' }},
                                                { block: 'order', elem: 'heading' },
                                            ],
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'xs-30-s-36-m-58', },
                                                    mix: { block: 'decorator', mods: {'indent-r': 's'} },
                                                    content: '02'
                                                },
                                                {
                                                    block: 'text',
                                                    mods: { size: 'xs-16-s-18-m-27' },
                                                    content: 'Размер'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'carousel',
                                            mods: { orientation: 'horizontal', animate: true },
                                            content: [
                                                {
                                                    elem: 'inner',
                                                    elemMods: { 's-m-direction': 'row', content: 'center' },
                                                    content: [
                                                        // первый слайд шага2
                                                        {
                                                            elem: 'item',
                                                            elemMods: { 's-m-display': 'block', state: 'active' },
                                                            mix: { block: 'decorator', mods: { 'indent-a': 'xxs', }},
                                                            content: {
                                                                block: 'pt-card',
                                                                mix: [
                                                                    { block: 'size' },
                                                                ],
                                                                content: {
                                                                    elem: 'content',
                                                                    elemMods: { distribute: 'center', 'space-h': '' },
                                                                    content: [
                                                                        {
                                                                            block: 'size', elem: 'label',
                                                                            tag: 'label',
                                                                            attrs: { for: 'small' }
                                                                        },
                                                                        {
                                                                            block: 'size', elem: 'input',
                                                                            tag: 'input',
                                                                            attrs: { type: 'radio', name: 'size', id: 'small', 'value': '1кг' }
                                                                        },
                                                                        {
                                                                            elem: 'image',
                                                                            mix: { block: 'size', elem: 'image-wrapper', elemMods: { size: 'small' }, },
                                                                            content: [
                                                                                {
                                                                                    block: 'size', elem: 'image', elemMods: { size: 'small' },
                                                                                    content: {
                                                                                        block: 'text',
                                                                                        mods: { size: 'xs-14-s-12-m-18' },
                                                                                        tag: 'span',
                                                                                        mix: { block: 'size', elem: 'image-text' },
                                                                                        content: '1кг'
                                                                                    },
                                                                                },
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            mods: { size: 'xs-14-s-12-m-18' },
                                                                            tag: 'p',
                                                                            mix: { block: 'decorator', mods: { 'indent-b': 'xxxs',  } },
                                                                            content: '17-18 см'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            mods: { size: 'xs-14-s-12-m-18' },
                                                                            tag: 'p',
                                                                            mix: { block: 'decorator', mods: { 'indent-t': 'xxxs',  } },
                                                                            content: '(1 - 6 персон)'
                                                                        },
                                                                        {
                                                                            block: 'button',
                                                                            mix: { block: 'size', elem: 'button' },
                                                                            mods: {
                                                                                's-m': 'hide',
                                                                                'xs-align': 'center',
                                                                                theme: 'cake',
                                                                                size: 'm',
                                                                                width: 'small',
                                                                                togglable: 'check'
                                                                            },
                                                                            text: 'ВЫБРАТЬ'
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                        },
                                                        // второй слайд шага2
                                                        {
                                                            elem: 'item',
                                                            elemMods: { 's-m-display': 'block', },
                                                            mix: { block: 'decorator', mods: { 'indent-a': 'xxs', }},
                                                            content: {
                                                                block: 'pt-card',
                                                                mix: [
                                                                    { block: 'size' },
                                                                ],
                                                                content: {
                                                                    elem: 'content',
                                                                    elemMods: { distribute: 'center', 'space-a': '' },
                                                                    content: [
                                                                        {
                                                                            block: 'size', elem: 'label',
                                                                            tag: 'label',
                                                                            attrs: { for: 'medium' }
                                                                        },
                                                                        {
                                                                            block: 'size', elem: 'input',
                                                                            tag: 'input',
                                                                            attrs: { type: 'radio', name: 'size', id: 'medium', 'value': '2кг' }
                                                                        },
                                                                        {
                                                                            elem: 'image',
                                                                            mix: { block: 'size', elem: 'image-wrapper', elemMods: { size: 'medium' }, },
                                                                            content: [
                                                                                {
                                                                                    block: 'size', elem: 'image', elemMods: { size: 'medium' },
                                                                                    content: {
                                                                                        block: 'text',
                                                                                        mods: { size: 'xs-14-s-12-m-18' },
                                                                                        tag: 'span',
                                                                                        mix: { block: 'size', elem: 'image-text' },
                                                                                        content: '2кг'
                                                                                    },
                                                                                },
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            mods: { size: 'xs-14-s-12-m-18' },
                                                                            tag: 'p',
                                                                            mix: { block: 'decorator', mods: { 'indent-b': 'xxxs',  } },
                                                                            content: '23-24 см'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            mods: { size: 'xs-14-s-12-m-18' },
                                                                            tag: 'p',
                                                                            mix: { block: 'decorator', mods: { 'indent-t': 'xxxs',  } },
                                                                            content: '(10–12 персон)'
                                                                        },
                                                                        {
                                                                            block: 'button',
                                                                            mix: { block: 'size', elem: 'button' },
                                                                            mods: {
                                                                                's-m': 'hide',
                                                                                'xs-align': 'center',
                                                                                theme: 'cake',
                                                                                size: 'm',
                                                                                width: 'small',
                                                                                togglable: 'check'
                                                                            },
                                                                            text: 'ВЫБРАТЬ'
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                        },
                                                        // третий слайд шага2
                                                        {
                                                            elem: 'item',
                                                            elemMods: { 's-m-display': 'block', },
                                                            mix: { block: 'decorator', mods: { 'indent-a': 'xxs', }},
                                                            content: {
                                                                block: 'pt-card',
                                                                mix: [
                                                                    { block: 'size' },
                                                                ],
                                                                content: {
                                                                    elem: 'content',
                                                                    elemMods: { distribute: 'center', 'space-a': '' },
                                                                    content: [
                                                                        {
                                                                            block: 'size', elem: 'label',
                                                                            tag: 'label',
                                                                            attrs: { for: 'large' }
                                                                        },
                                                                        {
                                                                            block: 'size', elem: 'input',
                                                                            tag: 'input',
                                                                            attrs: { type: 'radio', name: 'size', id: 'large', 'value': '5кг' }
                                                                        },
                                                                        {
                                                                            elem: 'image',
                                                                            mix: { block: 'size', elem: 'image-wrapper', elemMods: { size: 'large' }, },
                                                                            content: [
                                                                                {
                                                                                    block: 'size', elem: 'image', elemMods: { size: 'large-two' },
                                                                                },
                                                                                {
                                                                                    block: 'size', elem: 'image', elemMods: { size: 'large' },
                                                                                    content: {
                                                                                        block: 'text',
                                                                                        mods: { size: 'xs-14-s-12-m-18' },
                                                                                        tag: 'span',
                                                                                        mix: { block: 'size', elem: 'image-text' },
                                                                                        content: '5кг'
                                                                                    },
                                                                                },
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            mods: { size: 'xs-14-s-12-m-18' },
                                                                            tag: 'p',
                                                                            mix: { block: 'decorator', mods: { 'indent-b': 'xxxs',  } },
                                                                            content: 'Два яруса 25 и 20 см'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            mods: { size: 'xs-14-s-12-m-18' },
                                                                            tag: 'p',
                                                                            mix: { block: 'decorator', mods: { 'indent-t': 'xxxs',  } },
                                                                            content: '(15–20 персон)'
                                                                        },
                                                                        {
                                                                            block: 'button',
                                                                            mix: { block: 'size', elem: 'button' },
                                                                            mods: {
                                                                                's-m': 'hide',
                                                                                'xs-align': 'center',
                                                                                theme: 'cake',
                                                                                size: 'm',
                                                                                width: 'small',
                                                                                togglable: 'check'
                                                                            },
                                                                            text: 'ВЫБРАТЬ'
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                        },
                                                        // четвертый слайд шага2
                                                        {
                                                            elem: 'item',
                                                            elemMods: { 's-m-display': 'block', },
                                                            mix: { block: 'decorator', mods: { 'indent-a': 'xxs', }},
                                                            content: {
                                                                block: 'pt-card',
                                                                mix: [
                                                                    { block: 'size' },
                                                                ],
                                                                content: {
                                                                    elem: 'content',
                                                                    elemMods: { distribute: 'center', 'space-a': '' },
                                                                    content: [
                                                                        {
                                                                            block: 'size', elem: 'label',
                                                                            tag: 'label',
                                                                            attrs: { for: 'extralarge' }
                                                                        },
                                                                        {
                                                                            block: 'size', elem: 'input',
                                                                            tag: 'input',
                                                                            attrs: { type: 'radio', name: 'size', id: 'extralarge', 'value': '8кг' }
                                                                        },
                                                                        {
                                                                            elem: 'image',
                                                                            mix: { block: 'size', elem: 'image-wrapper', elemMods: { size: 'extralarge' }, },
                                                                            content: [
                                                                                {
                                                                                    block: 'size', elem: 'image', elemMods: { size: 'extralarge-third' },
                                                                                },
                                                                                {
                                                                                    block: 'size', elem: 'image', elemMods: { size: 'extralarge-two' },
                                                                                },
                                                                                {
                                                                                    block: 'size', elem: 'image', elemMods: { size: 'extralarge' },
                                                                                    content: {
                                                                                        block: 'text',
                                                                                        mods: { size: 'xs-14-s-12-m-18' },
                                                                                        tag: 'span',
                                                                                        mix: { block: 'size', elem: 'image-text' },
                                                                                        content: '8кг'
                                                                                    },
                                                                                },
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            mods: { size: 'xs-14-s-12-m-18' },
                                                                            tag: 'p',
                                                                            mix: { block: 'decorator', mods: { 'indent-b': 'xxxs',  } },
                                                                            content: 'Три яруса 30, 25 и 18 см'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            mods: { size: 'xs-14-s-12-m-18' },
                                                                            tag: 'p',
                                                                            mix: { block: 'decorator', mods: { 'indent-t': 'xxxs',  } },
                                                                            content: '(25–30 персон)'
                                                                        },
                                                                        {
                                                                            block: 'button',
                                                                            mix: { block: 'size', elem: 'button' },
                                                                            mods: {
                                                                                's-m': 'hide',
                                                                                'xs-align': 'center',
                                                                                theme: 'cake',
                                                                                size: 'm',
                                                                                width: 'small',
                                                                                togglable: 'check'
                                                                            },
                                                                            text: 'ВЫБРАТЬ'
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                        },
                                                    ]
                                                },
                                                {
                                                    elem: 'paginator', elemMods: { position: 'order-2' },
                                                    content: [
                                                        {
                                                            elem: 'paginator-button',
                                                            elemMods: { state: 'active' },
                                                        },
                                                        {
                                                            elem: 'paginator-button',
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                    ],
                                },
                                // шаг 3
                                {
                                    elem: 'content',
                                    mix: [
                                        { block: 'theme', mods: { 'color-bg': 'normal' } },
                                        { block: 'order', elem: 'card', elemMods: { bg: 'image' } },
                                    ],
                                    content: [
                                        // оглавление
                                        {
                                            elem: 'heading',
                                            mix: [
                                                { block: 'theme', mods: { font: 'playfairDisplay' } },
                                                { block: 'text', mods: { weight: 'bold', view: 'brand' }},
                                                { block: 'order', elem: 'heading' },
                                            ],
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'xs-30-s-36-m-58', },
                                                    mix: { block: 'decorator', mods: {'indent-r': 's'} },
                                                    content: '03'
                                                },
                                                {
                                                    block: 'text',
                                                    mods: { size: 'xs-16-s-18-m-27' },
                                                    content: 'Оформление'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'content',
                                            content: [
                                                {
                                                    block: 'carousel',
                                                    mods: { orientation: 'horizontal', animate: true },
                                                    content: [
                                                        {
                                                            elem: 'inner',
                                                            elemMods: { 's-m-display': 'block', 's-m-direction': 'row' },
                                                            mix: {
                                                                block: 'decorForm',
                                                                js: true,
                                                            },
                                                            attrs: { name: 'decorForm'},
                                                            content: [
                                                                // элемент карусели
                                                                {
                                                                    elem: 'item',
                                                                    elemMods: { state: 'active' },
                                                                    content: [
                                                                        // карта #1
                                                                        {
                                                                            block: 'pt-card',
                                                                            mix: { block: 'decor' },
                                                                            content: {
                                                                                elem: 'content', elemMods: { distribute: 'center' },
                                                                                content: [
                                                                                    // переключатель
                                                                                    {
                                                                                        block: 'decor', elem: 'label',
                                                                                        tag: 'label',
                                                                                        attrs: { for: 'decor-1' }
                                                                                    },
                                                                                    {
                                                                                        block: 'decor', elem: 'input',
                                                                                        tag: 'input',
                                                                                        js: true,
                                                                                        attrs: { type: 'radio', name: 'decor', id: 'decor-1', 'value': 'Ягодное ассорти-1' }
                                                                                    },
                                                                                    //image
                                                                                    {
                                                                                        elem: 'image',
                                                                                        mix: { block: 'decor', elem: 'image' },
                                                                                        content: {
                                                                                        tag: 'picture',
                                                                                            content: [
                                                                                                {
                                                                                                    tag: 'source',
                                                                                                    attrs: { media: '(min-width:  1024px)', srcset: '../../img/decor/decor_item2-desktop.jpg' },
                                                                                                },
                                                                                                {
                                                                                                    tag: 'source',
                                                                                                    attrs: { media: '(min-width:  700px)', srcset: '../../img/decor/decor_item2-tablet.jpg' },
                                                                                                },
                                                                                                {
                                                                                                    block: 'image',
                                                                                                    url: '../../img/decor/decor_item2-mobile.jpg',
                                                                                                    alt: 'торт ягодное ассорти'
                                                                                                },
                                                                                            ]
                                                                                        }
                                                                                    },
                                                                                    // footer
                                                                                    {
                                                                                        elem: 'footer',
                                                                                        mix: { block: 'decor', elem: 'footer' },
                                                                                        content: {
                                                                                            elem: 'content', elemMods: { distribute: 'center' },
                                                                                            content: [
                                                                                                {
                                                                                                    block: 'text',
                                                                                                    tag: 'h3',
                                                                                                    mods: { align: 'center', size: 'xs-14-s-14-m-20', view: 'primary', },
                                                                                                    mix: { block: 'decorator', mods: {'indent-b': 'xxs' }},
                                                                                                    content: 'Ягодное ассорти'
                                                                                                },
                                                                                                {
                                                                                                    block: 'text',
                                                                                                    tag: 'p',
                                                                                                    mods: { align: 'center', size: 'xs-14-s-14-m-20', view: 'primary', weight: 'bold', },
                                                                                                    mix: [
                                                                                                        { block: 'theme', mods: { font: 'playfairDisplay' } },
                                                                                                        { block: 'decorator', mods: {'indent-t': 'xxs' }}
                                                                                                    ],
                                                                                                    content: '700 руб/кг'
                                                                                                },
                                                                                                {
                                                                                                    block: 'button',
                                                                                                    mods: {
                                                                                                        's-m': 'hide',
                                                                                                        theme: 'cake',
                                                                                                        size: 'm',
                                                                                                        width: 'small',
                                                                                                        togglable: 'check'
                                                                                                    },
                                                                                                    text: 'ВЫБРАТЬ'
                                                                                                },
                                                                                            ]
                                                                                        }
                                                                                    },
                                                                                ]
                                                                            }
                                                                        },
                                                                        // карта #2
                                                                        {
                                                                            block: 'pt-card',
                                                                            mix: { block: 'decor', mods: { 'xs-visibility': 'hidden'} },
                                                                            content: {
                                                                                elem: 'content', elemMods: { distribute: 'center' },
                                                                                content: [
                                                                                    // переключатель
                                                                                    {
                                                                                        block: 'decor', elem: 'label',
                                                                                        tag: 'label',
                                                                                        attrs: { for: 'decor-2' }
                                                                                    },
                                                                                    {
                                                                                        block: 'decor', elem: 'input',
                                                                                        js: true,
                                                                                        tag: 'input',
                                                                                        attrs: { type: 'radio', name: 'decor', id: 'decor-2', 'value': 'Маршмеллоу-1' }
                                                                                    },
                                                                                    //image
                                                                                    {
                                                                                        elem: 'image',
                                                                                        mix: { block: 'decor', elem: 'image' },
                                                                                        content: {
                                                                                        tag: 'picture',
                                                                                            content: [
                                                                                                {
                                                                                                    tag: 'source',
                                                                                                    attrs: { media: '(min-width:  1024px)', srcset: '../../img/decor/decor_item1-desktop.jpg' },
                                                                                                },
                                                                                                {
                                                                                                    tag: 'source',
                                                                                                    attrs: { media: '(min-width:  700px)', srcset: '../../img/decor/decor_item1-tablet.jpg' },
                                                                                                },
                                                                                                {
                                                                                                    block: 'image',
                                                                                                    url: '../../img/decor/decor_item1-mobile.jpg',
                                                                                                    alt: 'торт Маршмеллоу'
                                                                                                },
                                                                                            ]
                                                                                        }
                                                                                    },
                                                                                    // footer
                                                                                    {
                                                                                        elem: 'footer',
                                                                                        mix: { block: 'decor', elem: 'footer' },
                                                                                        content: {
                                                                                            elem: 'content', elemMods: { distribute: 'center' },
                                                                                            content: [
                                                                                                {
                                                                                                    block: 'text',
                                                                                                    tag: 'h3',
                                                                                                    mods: { align: 'center', size: 'xs-14-s-14-m-20', view: 'primary', },
                                                                                                    mix: { block: 'decorator', mods: {'indent-b': 'xxs' }},
                                                                                                    content: 'Маршмеллоу'
                                                                                                },
                                                                                                {
                                                                                                    block: 'text',
                                                                                                    tag: 'p',
                                                                                                    mods: { align: 'center', size: 'xs-14-s-14-m-20', view: 'primary', weight: 'bold', },
                                                                                                    mix: [
                                                                                                        { block: 'theme', mods: { font: 'playfairDisplay' } },
                                                                                                        { block: 'decorator', mods: {'indent-t': 'xxs' }}
                                                                                                    ],
                                                                                                    content: '600 руб/кг'
                                                                                                },
                                                                                                {
                                                                                                    block: 'button',
                                                                                                    mods: {
                                                                                                        's-m': 'hide',
                                                                                                        theme: 'cake',
                                                                                                        size: 'm',
                                                                                                        width: 'small',
                                                                                                        togglable: 'check'
                                                                                                    },
                                                                                                    text: 'ВЫБРАТЬ'
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            },
                                                                        },
                                                                    ]
                                                                },
                                                                // элемент карусели
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        // карта #2
                                                                        {
                                                                            block: 'pt-card',
                                                                            mix: { block: 'decor', },
                                                                            content: {
                                                                                elem: 'content', elemMods: { distribute: 'center' },
                                                                                content: [
                                                                                    // переключатель
                                                                                    {
                                                                                        block: 'decor', elem: 'label',
                                                                                        tag: 'label',
                                                                                        attrs: { for: 'decor-3' }
                                                                                    },
                                                                                    {
                                                                                        block: 'decor', elem: 'input',
                                                                                        js: true,
                                                                                        tag: 'input',
                                                                                        attrs: { type: 'radio', name: 'decor', id: 'decor-3', 'value': 'Маршмеллоу-2' }
                                                                                    },
                                                                                    //image
                                                                                    {
                                                                                        elem: 'image',
                                                                                        mix: { block: 'decor', elem: 'image' },
                                                                                        content: {
                                                                                        tag: 'picture',
                                                                                            content: [
                                                                                                {
                                                                                                    tag: 'source',
                                                                                                    attrs: { media: '(min-width:  1024px)', srcset: '../../img/decor/decor_item1-desktop.jpg' },
                                                                                                },
                                                                                                {
                                                                                                    tag: 'source',
                                                                                                    attrs: { media: '(min-width:  700px)', srcset: '../../img/decor/decor_item1-tablet.jpg' },
                                                                                                },
                                                                                                {
                                                                                                    block: 'image',
                                                                                                    url: '../../img/decor/decor_item1-mobile.jpg',
                                                                                                    alt: 'торт Маршмеллоу'
                                                                                                },
                                                                                            ]
                                                                                        }
                                                                                    },
                                                                                    // footer
                                                                                    {
                                                                                        elem: 'footer',
                                                                                        mix: { block: 'decor', elem: 'footer' },
                                                                                        content: {
                                                                                            elem: 'content', elemMods: { distribute: 'center' },
                                                                                            content: [
                                                                                                {
                                                                                                    block: 'text',
                                                                                                    tag: 'h3',
                                                                                                    mods: { align: 'center', size: 'xs-14-s-14-m-20', view: 'primary', },
                                                                                                    mix: { block: 'decorator', mods: {'indent-b': 'xxs' }},
                                                                                                    content: 'Маршмеллоу'
                                                                                                },
                                                                                                {
                                                                                                    block: 'text',
                                                                                                    tag: 'p',
                                                                                                    mods: { align: 'center', size: 'xs-14-s-14-m-20', view: 'primary', weight: 'bold', },
                                                                                                    mix: [
                                                                                                        { block: 'theme', mods: { font: 'playfairDisplay' } },
                                                                                                        { block: 'decorator', mods: {'indent-t': 'xxs' }}
                                                                                                    ],
                                                                                                    content: '600 руб/кг'
                                                                                                },
                                                                                                {
                                                                                                    block: 'button',
                                                                                                    mods: {
                                                                                                        's-m': 'hide',
                                                                                                        theme: 'cake',
                                                                                                        size: 'm',
                                                                                                        width: 'small',
                                                                                                        togglable: 'check'
                                                                                                    },
                                                                                                    text: 'ВЫБРАТЬ'
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            },
                                                                        },
                                                                        // карта #1
                                                                        {
                                                                            block: 'pt-card',
                                                                            mix: { block: 'decor', mods: { 'xs-visibility': 'hidden'} },
                                                                            content: {
                                                                                elem: 'content', elemMods: { distribute: 'center' },
                                                                                content: [
                                                                                    // переключатель
                                                                                    {
                                                                                        block: 'decor', elem: 'label',
                                                                                        tag: 'label',
                                                                                        attrs: { for: 'decor-4' }
                                                                                    },
                                                                                    {
                                                                                        block: 'decor', elem: 'input',
                                                                                        tag: 'input',
                                                                                        js: true,
                                                                                        attrs: { type: 'radio', name: 'decor', id: 'decor-4', 'value': 'Ягодное ассорти-2' }
                                                                                    },
                                                                                    //image
                                                                                    {
                                                                                        elem: 'image',
                                                                                        mix: { block: 'decor', elem: 'image' },
                                                                                        content: {
                                                                                        tag: 'picture',
                                                                                            content: [
                                                                                                {
                                                                                                    tag: 'source',
                                                                                                    attrs: { media: '(min-width:  1024px)', srcset: '../../img/decor/decor_item2-desktop.jpg' },
                                                                                                },
                                                                                                {
                                                                                                    tag: 'source',
                                                                                                    attrs: { media: '(min-width:  700px)', srcset: '../../img/decor/decor_item2-tablet.jpg' },
                                                                                                },
                                                                                                {
                                                                                                    block: 'image',
                                                                                                    url: '../../img/decor/decor_item2-mobile.jpg',
                                                                                                    alt: 'Ягодное ассорти-2'
                                                                                                },
                                                                                            ]
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'footer',
                                                                                        mix: { block: 'decor', elem: 'footer' },
                                                                                        content: {
                                                                                            elem: 'content', elemMods: { distribute: 'center' },
                                                                                            content: [
                                                                                                {
                                                                                                    block: 'text',
                                                                                                    tag: 'h3',
                                                                                                    mods: { align: 'center', size: 'xs-14-s-14-m-20', view: 'primary', },
                                                                                                    mix: { block: 'decorator', mods: {'indent-b': 'xxs' }},
                                                                                                    content: 'Ягодное ассорти'
                                                                                                },
                                                                                                {
                                                                                                    block: 'text',
                                                                                                    tag: 'p',
                                                                                                    mods: { align: 'center', size: 'xs-14-s-14-m-20', view: 'primary', weight: 'bold', },
                                                                                                    mix: [
                                                                                                        { block: 'theme', mods: { font: 'playfairDisplay' } },
                                                                                                        { block: 'decorator', mods: {'indent-t': 'xxs' }}
                                                                                                    ],
                                                                                                    content: '700 руб/кг'
                                                                                                },
                                                                                                {
                                                                                                    block: 'button',
                                                                                                    mods: {
                                                                                                        's-m': 'hide',
                                                                                                        theme: 'cake',
                                                                                                        size: 'm',
                                                                                                        width: 'small',
                                                                                                        togglable: 'check'
                                                                                                    },
                                                                                                    text: 'ВЫБРАТЬ'
                                                                                                },
                                                                                            ]
                                                                                        }
                                                                                    },
                                                                                ]
                                                                            }
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                        {
                                                            elem: 'control',
                                                            elemMods: { type: 'left', xs: 'hide', 's-view': 'circle' },
                                                            content: {
                                                                block: 'icon',
                                                                mods: { size: 'm', name: 'arrow-left', view: 'brand' },
                                                                mix: { block: 'decorator', mods: { 'indent-t': 'xs' }},
                                                            }
                                                        },
                                                        {
                                                            elem: 'control',
                                                            elemMods: { type: 'right', xs: 'hide', 's-view': 'circle' },
                                                            content: {
                                                                block: 'icon',
                                                                mods: { size: 'm', name: 'arrow-right', view: 'brand' },
                                                                mix: { block: 'decorator', mods: { 'indent-t': 'xs' }},
                                                            }
                                                        },
                                                        {
                                                            elem: 'paginator', elemMods: { position: 'order-3' },
                                                            content: [
                                                                {
                                                                    elem: 'paginator-button',
                                                                    elemMods: { state: 'active' },
                                                                },
                                                                {
                                                                    elem: 'paginator-button',
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        // оглавление формы
                                        {
                                            elem: 'heading',
                                            mix: { block: 'theme', mods: { font: 'playfairDisplay' } },
                                            content: {
                                                block: 'text',
                                                mods: { size: 'xs-22-s-18-m-27', weight: 'bold', view: 'primary', },
                                                content: "Ваш выбор"
                                            },
                                        },
                                        // форма
                                        {
                                            block: 'pt-form',
                                            mods: { view: 'choice' },
                                            content: [
                                                {
                                                    elem: 'item',
                                                    elemMods: { 'space-a': 'xs' },
                                                    content: [
                                                        {
                                                            elem: 'label',
                                                            elemMods: { width: '100' },
                                                            content: {
                                                                block: 'text', mods: { size: 'xs-20-s-18-m-27', view: 'brand' },
                                                                mix: [
                                                                    { block: 'theme', mods: { font: 'introScriptR-H2Base' } },
                                                                    { block: 'decorator', mods: {'indent-v': 'xs' }}
                                                                ],
                                                                content: 'Начинка'
                                                            }
                                                        },
                                                        {
                                                            elem: 'control',
                                                            content: {
                                                                block: 'input',
                                                                mods: { theme: 'islands', size: 'l', width: 'available' },
                                                                id: 'fillingInput',
                                                                placeholder: 'выберите начинку'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    elemMods: { 'space-a': 'xs', },
                                                    content: [
                                                        {
                                                            elem: 'label',
                                                            elemMods: { width: '100' },
                                                            content: {
                                                                block: 'text', mods: { size: 'xs-20-s-18-m-27', view: 'brand' },
                                                                mix: [
                                                                    { block: 'theme', mods: { font: 'introScriptR-H2Base' } },
                                                                    { block: 'decorator', mods: {'indent-v': 'xs' }}
                                                                ],
                                                                content: 'Размер'
                                                            }
                                                        },
                                                        {
                                                            elem: 'control',
                                                            content: {
                                                                block: 'input',
                                                                mods: { theme: 'islands', size: 'l', width: 'available' },
                                                                id: 'sizeInput',
                                                                placeholder: 'выберите размер'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    elemMods: { 'space-a': 'xs', },
                                                    content: [
                                                        {
                                                            elem: 'label',
                                                            elemMods: { width: '100' },
                                                            content: {
                                                                block: 'text', mods: { size: 'xs-20-s-18-m-27', view: 'brand' },
                                                                mix: [
                                                                    { block: 'theme', mods: { font: 'introScriptR-H2Base' } },
                                                                    { block: 'decorator', mods: {'indent-v': 'xs' }}
                                                                ],
                                                                content: 'Оформление'
                                                            }
                                                        },
                                                        {
                                                            elem: 'control',
                                                            content: {
                                                                block: 'input',
                                                                mods: { theme: 'islands', size: 'l', width: 'available' },
                                                                id: 'decorInput',
                                                                placeholder: 'выберите оформление'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    elemMods: { 'space-a': 'xs', },
                                                    content: [
                                                        {
                                                            block: 'button',
                                                            mods: { theme: 'cake', size: 'm', width: 'small', type: 'submit' },
                                                            text: 'ЗАКАЗАТЬ ТОРТ'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                            ]
                        }
                    },
                },
                // reviews отзывы
                {
                    elem: 'section',
                    attrs: { id: 'reviews-scroll' },
                    mix: [
                        { block: 'decorator', mods: { 'indent-b': '' } },
                        { block: 'reviews' },
                    ],
                    content: {
                        elem: 'container',
                        elemMods: { size: 'l', align: 'center' },
                        content: {
                            elem: 'content',
                            mix: { block: 'reviews', elem: 'content' },
                            content: [
                                {
                                    block: 'tpl-layout', elem: 'header',
                                    content: {
                                        block: 'text',
                                        tag: 'h2',
                                        mods: { align: 'center', size: 'xs-24-s-28-m-40', view: 'primary', weight: 'bold', },
                                        mix: { block: 'theme', mods: { font: 'playfairDisplay' } },
                                        content: 'Отзывы'
                                    }
                                },
                                {
                                    block: 'carousel',
                                    mods: { orientation: 'horizontal', animate: true },
                                    content: [
                                        {
                                            elem: 'inner',
                                            content: [
                                                // первый слайд
                                                {
                                                    elem: 'item',
                                                    elemMods: { state: 'active' },
                                                    content: {
                                                        block: 'pt-icon-plus',
                                                        mods: { 'xs-direction': 'column', 'vertical-align': 'center' },
                                                        mix: { block: 'decorator', mods: {'space-a': 'l' }},
                                                        content: [
                                                            {
                                                                elem: 'icon',
                                                                content: {
                                                                    block: 'avatar',
                                                                    content: [
                                                                    // здесь может быть блок счетчика или уведомлений,
                                                                    // которые располагаются поверх аватарки
                                                                    {
                                                                        block: 'image',
                                                                        mix: { block: 'avatar', elem: 'photo', elemMods: { size: 'a' } },
                                                                        url: '../../img/reviews/reviews1-desktop.jpg',
                                                                        alt: 'пользователь оставивший отзыв'
                                                                    }]
                                                                }
                                                            },
                                                            {
                                                                elem: 'block',
                                                                content: [
                                                                    {
                                                                        block: 'text',
                                                                        tag: 'h3',
                                                                        mods: { size: 'xs-14-s-16-m-27', view: 'primary', },
                                                                        mix: [
                                                                            { block: 'decorator', mods: { 'indent-b': 'xxs'} },
                                                                        ],
                                                                        content: 'Мария'
                                                                    },
                                                                    {
                                                                        block: 'text',
                                                                        tag: 'p',
                                                                        mods: { size: 'xs-12-s-14-m-20', view: 'primary', },
                                                                        mix: [
                                                                            { block: 'decorator', mods: { 'indent-t': 'xxs'} },
                                                                        ],
                                                                        content: 'юрист, 33года'
                                                                    },
                                                                    {
                                                                        block: 'text',
                                                                        content: [
                                                                            {
                                                                                block: 'text',
                                                                                mods: { size: 'xs-12-s-14-m-18', view: 'primary', display: 'inline' },
                                                                                mix: { block: 'reviews', elem: 'text' },
                                                                                content: "Заказывала торт брауни на юбилей мужа. Гости были в восторге! Отдельное спасибо за своевременную доставку! Теперь будем заказывать торты только у вас для наших семейных праздников:)"
                                                                            },
                                                                            {
                                                                                block: 'text',
                                                                                tag: 'a',
                                                                                attrs: { href: '#' },
                                                                                mods: { size: 'xs-12-s-14-m-16', align: 'left', view: 'brand', style: 'italic' },
                                                                                mix: { block: 'decorator', 'indent-b': 'xxs' },
                                                                                content: 'Развернуть'
                                                                            }
                                                                        ]
                                                                    },
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                },
                                                // второй слайд
                                                {
                                                    elem: 'item',
                                                    content: {
                                                        block: 'pt-icon-plus',
                                                        mods: { 'xs-direction': 'column', 'vertical-align': 'center' },
                                                        mix: { block: 'decorator', mods: {'space-a': 'l' }},
                                                        content: [
                                                            {
                                                                elem: 'icon',
                                                                content: {
                                                                    block: 'avatar',
                                                                    content: [
                                                                    // здесь может быть блок счетчика или уведомлений,
                                                                    // которые располагаются поверх аватарки
                                                                    {
                                                                        block: 'image',
                                                                        mix: { block: 'avatar', elem: 'photo', elemMods: { size: 'a' } },
                                                                        url: '../../img/reviews/reviews2-desktop.jpg',
                                                                        alt: 'пользователь оставивший отзыв'
                                                                    }]
                                                                }
                                                            },
                                                            {
                                                                elem: 'block',
                                                                content: [
                                                                    {
                                                                        block: 'text',
                                                                        tag: 'h3',
                                                                        mods: { size: 'xs-14-s-16-m-27', view: 'primary', },
                                                                        mix: [
                                                                            { block: 'decorator', mods: { 'indent-b': 'xxs'} },
                                                                        ],
                                                                        content: 'Джим'
                                                                    },
                                                                    {
                                                                        block: 'text',
                                                                        tag: 'p',
                                                                        mods: { size: 'xs-12-s-14-m-20', view: 'primary', },
                                                                        mix: [
                                                                            { block: 'decorator', mods: { 'indent-t': 'xxs'} },
                                                                        ],
                                                                        content: 'дантист, 40лет'
                                                                    },
                                                                    {
                                                                        block: 'text',
                                                                        content: [
                                                                            {
                                                                                block: 'text',
                                                                                mods: { size: 'xs-12-s-14-m-18', view: 'primary', },
                                                                                mix: { block: 'reviews', elem: 'text' },
                                                                                content: "Заказывал торт маршмеллоу на юбилей жены. Гости были в восторге! Отдельное спасибо за своевременную доставку! Теперь будем есть все торты, чтобы росли животы:)"
                                                                            },
                                                                            {
                                                                                block: 'text',
                                                                                tag: 'a',
                                                                                attrs: { href: '#' },
                                                                                mods: { size: 'xs-12-s-14-m-16', align: 'left', view: 'brand', style: 'italic' },
                                                                                mix: { block: 'decorator', 'indent-b': 'xxs' },
                                                                                content: 'Развернуть'
                                                                            }
                                                                        ]
                                                                    },
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                },
                                                // третий слайд
                                                {
                                                    elem: 'item',
                                                    content: {
                                                        block: 'pt-icon-plus',
                                                        mods: { 'xs-direction': 'column', 'vertical-align': 'center' },
                                                        mix: { block: 'decorator', mods: {'space-a': 'l' }},
                                                        content: [
                                                            {
                                                                elem: 'icon',
                                                                content: {
                                                                    block: 'avatar',
                                                                    content: [
                                                                    // здесь может быть блок счетчика или уведомлений,
                                                                    // которые располагаются поверх аватарки
                                                                    {
                                                                        elem: 'photo',
                                                                        elemMods: { size: 'a' },
                                                                        content: [
                                                                        {
                                                                            block: 'image',
                                                                            mix: { block: 'avatar', elem: 'photo', elemMods: { size: 'a' } },
                                                                            url: '../../img/reviews/reviews3-desktop.jpg',
                                                                            alt: 'пользователь оставивший отзыв'
                                                                        }]
                                                                    }]
                                                                }
                                                            },
                                                            {
                                                                elem: 'block',
                                                                content: [
                                                                    {
                                                                        block: 'text',
                                                                        tag: 'h3',
                                                                        mods: { size: 'xs-14-s-16-m-27', view: 'primary', },
                                                                        mix: [
                                                                            { block: 'decorator', mods: { 'indent-b': 'xxs'} },
                                                                        ],
                                                                        content: 'Том'
                                                                    },
                                                                    {
                                                                        block: 'text',
                                                                        tag: 'p',
                                                                        mods: { size: 'xs-12-s-14-m-20', view: 'primary', },
                                                                        mix: [
                                                                            { block: 'decorator', mods: { 'indent-t': 'xxs'} },
                                                                        ],
                                                                        content: 'пианист, 28 лет'
                                                                    },
                                                                    {
                                                                        block: 'text',
                                                                        content: [
                                                                            {
                                                                                block: 'text',
                                                                                mods: { size: 'xs-12-s-14-m-18', view: 'primary', },
                                                                                mix: { block: 'reviews', elem: 'text' },
                                                                                content: "Заказывал торт детский на день рождение дочери. Дети были в восторге! Теперь будем есть все торты, чтобы росли животы:)"
                                                                            },
                                                                            {
                                                                                block: 'text',
                                                                                tag: 'a',
                                                                                attrs: { href: '#' },
                                                                                mods: { size: 'xs-12-s-14-m-16', align: 'left', view: 'brand', style: 'italic' },
                                                                                mix: { block: 'decorator', 'indent-b': 'xxs' },
                                                                                content: 'Развернуть'
                                                                            }
                                                                        ]
                                                                    },
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                },
                                            ]
                                        },
                                        {
                                            elem: 'control',
                                            elemMods: { type: 'left', xs: 'hide', 's-view': 'circle' },
                                            content: {
                                                block: 'icon',
                                                mods: { size: 'm', name: 'arrow-left', view: 'brand' },
                                                mix: { block: 'decorator', mods: { 'indent-t': 'xs' }}
                                            }
                                        },
                                        {
                                            elem: 'control',
                                            elemMods: { type: 'right', xs: 'hide', 's-view': 'circle' },
                                            content: {
                                                block: 'icon',
                                                mods: { size: 'm', name: 'arrow-right', view: 'brand' },
                                                mix: { block: 'decorator', mods: { 'indent-t': 'xs' }}
                                            }
                                        },
                                        {
                                            elem: 'paginator',
                                            mix: { block: 'reviews', elem: 'paginator' },
                                            content: [
                                                {
                                                    elem: 'paginator-button',
                                                    elemMods: { state: 'active' },
                                                },
                                                {
                                                    elem: 'paginator-button',
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                        }
                    }
                },
                // about о нас
                {
                    elem: 'section',
                    attrs: { id: 'about-scroll' },
                    mix: [{ block: 'about' }, { block: 'decorator', mods: { 'indent-b': 'xxl' } }],
                    content: {
                        elem: 'container',
                        elemMods: { size: 'l', align: 'center' },
                        content: {
                            elem: 'content',
                            content: [
                                {
                                    block: "tpl-grid",
                                    mods: { 'xs-ratio': '1-1', 's-columns': '6', 'm-columns': '12', 'col-gap': '', 'row-gap': ''},
                                    content: [
                                        {
                                            elem: 'fraction',
                                            elemMods: { 'xs-col':'3', 'xs-order': '', 's-col':'3','s-order': '', 'm-col':'6', 'm-row':'2' },
                                            content: [
                                                // О нас
                                                {
                                                    block: 'text',
                                                    tag: 'h2',
                                                    mods: { 'xs-align': 'center', size: 'xs-24-s-28-m-40', view: 'primary', weight: 'bold', },
                                                    mix: [
                                                        { block: 'theme', mods: { font: 'playfairDisplay' } },
                                                        { block: 'decorator', mods: { 'indent-v': 'xxs'} }
                                                    ],
                                                    content: 'О нас'
                                                },
                                                // О кондитере
                                                {
                                                    block: 'text',
                                                    tag: 'p',
                                                    mods: { size: 'xs-22-s-26-m-35', view: 'secondary', },
                                                    mix: [
                                                        { block: 'theme', mods: { font: 'introScriptR-H2Base' } },
                                                        { block: 'decorator', mods: { 'indent-b': 'xxs'} }
                                                    ],
                                                    content: 'О кондитере'
                                                },
                                                {
                                                    block: 'text',
                                                    tag: 'p',
                                                    mods: { size: 'xs-14-s-14-m-20', view: 'primary', weight: 'bold' },
                                                    mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
                                                    content: 'Кондитер - как призвание'
                                                },
                                                {
                                                    block: 'text',
                                                    tag: 'p',
                                                    mods: { size: 'xs-14-s-14-m-20', view: 'primary', },
                                                    mix: { block: 'decorator', mods: { 'indent-v': 'xs' } },
                                                    content: "Павел — профессиональный повар в различных гастрономических областях, но однажды его сердце покорило кондитерское искусство. С ранних лет он увлекался утонченным мастерством и обратился к своим талантам как кондитер."
                                                },
                                                {
                                                    block: 'text',
                                                    tag: 'p',
                                                    mods: { size: 'xs-14-s-14-m-20', view: 'primary', weight: 'bold' },
                                                    mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
                                                    content: 'Принцип – натуральные ингредиенты'
                                                },
                                                {
                                                    block: 'text',
                                                    tag: 'p',
                                                    mods: { size: 'xs-14-s-14-m-20', view: 'primary', },
                                                    mix: { block: 'decorator', mods: { 'indent-v': 'xs' } },
                                                    content: "Сегодня Павел радует изделиями не только близких, но и тех, кто предпочитает качественную продукцию для торжества, а главным принципом является выбор натуральных ингредиентов."
                                                },
                                            ]
                                        },
                                        // фото
                                        {
                                            elem: 'fraction',
                                            elemMods: { 'xs-col':'1', 'xs-order': '-1', 's-col':'3','s-row':'3', 'm-col':'6', 'm-row':'3' },
                                            content: {
                                                block: 'about', elem: 'avatar',
                                                content: {
                                                    block: 'avatar',
                                                    content: [
                                                    {
                                                        elem: 'photo',
                                                        elemMods: { size: 'l' },
                                                        mix: { block: 'about', elem: 'image' },
                                                        content: {
                                                            tag: 'picture',
                                                            content: [
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  1024px)', srcset: '../../img/about/about-desktop.jpg' },
                                                                },
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  700px)', srcset: '../../img/about/about-tablet.jpg' },
                                                                },
                                                                {
                                                                    block: 'image',
                                                                    url: '../../img/about/about-mobile.jpg',
                                                                    alt: 'кондитер'
                                                                },
                                                            ]
                                                        }
                                                    }]
                                                }
                                            }
                                        },
                                        // social
                                        {
                                            elem: 'fraction',
                                            elemMods: { 'xs-col':'1', 'xs-order': '-1', 's-col':'3', 's-row':'1', 'm-col':'6', 'm-row':'2' },
                                            content: {
                                                block: 'about', elem: 'social',
                                                tag: 'ul',
                                                content: [
                                                    {
                                                        block: 'icon-background',
                                                        mods: { size: '36', view: 'normal' },
                                                        tag: 'li',
                                                        content: {
                                                            block: 'social-icon',
                                                            tag: 'a',
                                                            attrs: { href: '#' },
                                                            mods: { hover: 'default', size: 's', view: 'brand', 'display': 'block' },
                                                            mix: { block: 'decorator', mods: { 'space-a': 'xs' } },
                                                            content: { html: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 32 32" style=""><g ><path style=" " d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z "></path></g></svg>' }
                                                        },
                                                    },
                                                    {
                                                        block: 'icon-background',
                                                        mods: { size: '36', view: 'normal' },
                                                        tag: 'li',
                                                        content: {
                                                            block: 'social-icon',
                                                            tag: 'a',
                                                            attrs: { href: '#' },
                                                            mods: { hover: 'default', size: 's', view: 'brand', 'display': 'block' },
                                                            mix: { block: 'decorator', mods: { 'space-a': 'xs', } },
                                                            content: { html: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 16 16" style=""><g ><path style=" " d="M 7.695313 3.019531 C 6.867188 3.011719 6.242188 3.050781 5.71875 3.320313 C 5.503906 3.429688 5.351563 3.570313 5.234375 3.734375 C 5.171875 3.816406 5.113281 3.890625 5.085938 4.0625 C 5.070313 4.144531 5.058594 4.28125 5.144531 4.429688 C 5.230469 4.582031 5.414063 4.683594 5.539063 4.703125 C 5.632813 4.714844 5.832031 4.796875 5.867188 4.84375 C 5.949219 4.960938 5.980469 5.046875 5.992188 5.09375 C 6.003906 5.140625 6 5.109375 6 5.109375 L 6 5.15625 C 6 5.15625 6.03125 5.648438 6.011719 6.15625 C 6 6.40625 5.976563 6.667969 5.9375 6.84375 C 5.898438 7.019531 5.800781 7.0625 5.941406 6.980469 C 5.84375 7.039063 5.878906 7.0625 5.757813 7 C 5.632813 6.941406 5.308594 6.667969 4.882813 5.902344 C 4.457031 5.132813 4.148438 4.734375 4.078125 4.648438 C 4.050781 4.570313 3.984375 4.410156 3.757813 4.234375 C 3.464844 4.007813 3.164063 4.003906 3.164063 4.003906 L 3.136719 4 L 0.953125 4 C 0.953125 4 0.828125 4.003906 0.683594 4.035156 C 0.539063 4.066406 0.332031 4.101563 0.136719 4.34375 C 0.136719 4.34375 0.132813 4.34375 0.132813 4.34375 C -0.0664063 4.597656 -0.03125 4.828125 -0.015625 4.96875 C 0.00390625 5.113281 0.046875 5.226563 0.046875 5.226563 L 0.0546875 5.25 L 0.0664063 5.273438 C 0.0664063 5.273438 1.734375 8.832031 3.726563 11 C 5.597656 13.039063 7.765625 13 7.765625 13 L 8.996094 13 L 9.023438 12.996094 C 9.023438 12.996094 9.417969 13.015625 9.75 12.644531 C 9.917969 12.453125 9.957031 12.273438 9.976563 12.140625 C 10 12.003906 10 11.894531 10 11.894531 L 10 11.925781 C 10 11.925781 10.015625 11.667969 10.085938 11.398438 C 10.121094 11.265625 10.171875 11.132813 10.21875 11.058594 C 10.242188 11.015625 10.242188 11.027344 10.25 11.015625 C 10.335938 11.078125 10.476563 11.222656 10.625 11.40625 C 10.929688 11.769531 11.273438 12.273438 11.753906 12.621094 C 12.101563 12.867188 12.429688 12.976563 12.679688 13.015625 C 12.847656 13.042969 12.96875 13.039063 13.050781 13.03125 L 14.75 13 L 14.765625 13 C 14.765625 13 15.117188 12.992188 15.46875 12.769531 C 15.640625 12.660156 15.839844 12.460938 15.90625 12.175781 C 15.976563 11.890625 15.898438 11.582031 15.734375 11.296875 C 15.789063 11.394531 15.722656 11.265625 15.671875 11.164063 C 15.621094 11.0625 15.542969 10.925781 15.425781 10.753906 C 15.199219 10.417969 14.824219 9.945313 14.203125 9.34375 C 13.910156 9.0625 13.722656 8.90625 13.605469 8.796875 C 13.640625 8.746094 13.644531 8.742188 13.777344 8.585938 C 13.988281 8.339844 14.296875 7.976563 14.6875 7.433594 C 15.15625 6.777344 15.496094 6.242188 15.714844 5.796875 C 15.933594 5.355469 16.109375 4.988281 15.914063 4.535156 C 15.808594 4.289063 15.621094 4.195313 15.484375 4.136719 C 15.34375 4.078125 15.21875 4.054688 15.101563 4.035156 C 14.871094 4 14.667969 4 14.667969 4 L 12.6875 4.015625 C 12.628906 4.003906 12.402344 3.960938 12.109375 4.148438 C 11.820313 4.328125 11.753906 4.519531 11.738281 4.578125 C 11.691406 4.644531 11.363281 5.109375 10.90625 5.921875 C 10.445313 6.742188 10.132813 6.964844 10.09375 6.984375 C 10.082031 6.972656 10.105469 6.976563 10.050781 6.945313 C 10.027344 6.925781 10.003906 6.910156 9.984375 6.699219 C 9.96875 6.488281 9.988281 6.15625 9.988281 5.765625 C 9.988281 4.925781 10.0625 4.488281 10.019531 4.070313 C 10 3.859375 9.914063 3.601563 9.726563 3.429688 C 9.539063 3.261719 9.335938 3.199219 9.125 3.144531 C 8.792969 3.0625 8.34375 3.027344 7.695313 3.019531 Z M 7.6875 4.019531 C 8.292969 4.027344 8.71875 4.074219 8.875 4.113281 C 9.007813 4.148438 9.027344 4.164063 9.023438 4.15625 C 9.023438 4.164063 9.023438 4.160156 9.023438 4.171875 C 9.039063 4.339844 8.988281 4.878906 8.988281 5.765625 C 8.988281 6.113281 8.960938 6.449219 8.988281 6.785156 C 9.015625 7.121094 9.136719 7.53125 9.492188 7.773438 L 9.496094 7.773438 C 9.453125 7.746094 9.945313 8.113281 10.414063 7.945313 C 10.882813 7.773438 11.253906 7.34375 11.78125 6.410156 C 12.242188 5.582031 12.582031 5.117188 12.582031 5.117188 L 12.613281 5.070313 L 12.636719 5.023438 C 12.636719 5.023438 12.628906 5.019531 12.636719 5.015625 L 14.667969 5 C 14.667969 5 14.808594 5 14.945313 5.023438 C 14.949219 5.023438 14.953125 5.023438 14.957031 5.023438 C 14.9375 5.03125 14.953125 5.082031 14.816406 5.359375 C 14.640625 5.714844 14.324219 6.222656 13.875 6.851563 C 13.503906 7.363281 13.226563 7.695313 13.019531 7.9375 C 12.8125 8.175781 12.65625 8.289063 12.554688 8.601563 C 12.503906 8.753906 12.515625 8.980469 12.589844 9.132813 C 12.660156 9.28125 12.746094 9.363281 12.832031 9.445313 C 13.003906 9.609375 13.207031 9.769531 13.503906 10.0625 C 14.085938 10.625 14.414063 11.039063 14.597656 11.3125 C 14.691406 11.453125 14.746094 11.550781 14.78125 11.621094 C 14.816406 11.691406 14.792969 11.664063 14.871094 11.796875 C 14.9375 11.917969 14.925781 11.933594 14.925781 11.925781 C 14.859375 11.964844 14.691406 12 14.6875 12 L 12.988281 12.03125 L 12.941406 12.042969 C 12.941406 12.042969 12.945313 12.046875 12.839844 12.03125 C 12.730469 12.011719 12.558594 11.964844 12.339844 11.808594 C 12.070313 11.617188 11.730469 11.171875 11.394531 10.765625 C 11.230469 10.566406 11.0625 10.371094 10.851563 10.214844 C 10.640625 10.058594 10.308594 9.914063 9.96875 10.027344 C 9.675781 10.121094 9.484375 10.335938 9.363281 10.535156 C 9.242188 10.738281 9.171875 10.949219 9.117188 11.140625 C 9.015625 11.527344 9 11.875 9 11.875 L 9 11.90625 C 9 11.90625 9 11.929688 8.992188 11.964844 C 8.972656 11.972656 8.945313 11.992188 8.929688 12 L 7.734375 12 C 7.734375 12 6.082031 12.085938 4.460938 10.328125 C 2.726563 8.433594 1.183594 5.265625 1.054688 5 L 3.066406 5 C 3.085938 5.007813 3.15625 5.035156 3.148438 5.03125 C 3.101563 4.992188 3.171875 5.078125 3.171875 5.078125 L 3.203125 5.152344 L 3.257813 5.214844 C 3.257813 5.214844 3.566406 5.589844 4.007813 6.386719 C 4.480469 7.242188 4.878906 7.6875 5.324219 7.902344 C 5.769531 8.117188 6.238281 7.964844 6.4375 7.851563 C 6.808594 7.636719 6.851563 7.335938 6.914063 7.058594 C 6.976563 6.78125 6.996094 6.484375 7.007813 6.195313 C 7.03125 5.640625 7 5.167969 7 5.132813 C 6.996094 5.121094 6.996094 4.984375 6.957031 4.835938 C 6.914063 4.683594 6.835938 4.484375 6.6875 4.273438 C 6.625 4.1875 6.566406 4.230469 6.5 4.167969 C 6.777344 4.089844 7.074219 4.011719 7.6875 4.019531 Z "></path></g></svg>' }
                                                        }
                                                    },
                                                    {
                                                        block: 'icon-background',
                                                        mods: { size: '36', view: 'normal' },
                                                        tag: 'li',
                                                        content: {
                                                            block: 'social-icon',
                                                            tag: 'a',
                                                            attrs: { href: '#' },
                                                            mods: { hover: 'default', size: 's', view: 'brand', 'display': 'block' },
                                                            mix: { block: 'decorator', mods: { 'space-a': 'xs', } },
                                                            content: { html: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 50 50" style=""><g ><path style=" " d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z "></path></g></svg>' }
                                                        }
                                                    },
                                                ]
                                            },
                                        },
                                    ]
                                }
                            ]
                        }
                    }
                },
                // quote цитата
                {
                   block: 'quote',
                   content: {
                       block: 'pt-icon-plus',
                       mods: { 'vertical-align': 'center', 'flex-direction': 'column' },
                       content: [
                           {
                               elem: 'block',
                               tag: 'blockquote',
                               mix: { block: 'decorator', mods: { 'indent-v': 'm' } },
                               content: [
                                   {
                                       block: 'text',
                                       mods: { align: 'center', size: 'xs-60-s-77-m-140', view: 'desable', width: 'blockquote' },
                                       mix: [
                                           { block: 'theme', mods: { 'color': 'normal'} },
                                           { block: 'theme', mods: { font: 'playfairDisplay' } }
                                       ],
                                       content: '’’'
                                   },
                                   {
                                       block: 'text',
                                       mods: { size: 'xs-13-s-14-m-25', style: 'italic', align: 'center', view: 'primary', weight: 'bold', style: 'italic', width: 'blockquote' },
                                       mix: { block: 'theme', mods: { font: 'playfairDisplay' } },
                                       content: "Я за простые рецепты. В Италии это называют cucina povera: когда обычные ингредиенты превращаются в божественное блюдо."
                                   },
                               ]
                           },
                           {
                               block: 'signature'
                           },
                       ]
                   }
                },
                // advantages наши преимущества
                {
                    elem: 'section',
                    mix: { block: 'advantages' },
                    content: {
                        elem: 'container',
                        elemMods: { size: 'l', align: 'center' },
                        content: [
                            {
                                elem: 'heading',
                                content: {
                                    block: 'text', mods: { align: 'center'} ,
                                    content: [
                                        {
                                            block: 'text',
                                            tag: 'h2',
                                            mods: { size: 'xs-24-s-28-m-40', view: 'primary', },
                                            mix: [
                                                { block: 'theme', mods: { font: 'playfairDisplay' } },
                                                { block: 'decorator', mods: { 'indent-b': 'xs' }}
                                            ],
                                            content: 'Наши преимущества'
                                        },
                                        {
                                            block: 'text',
                                            tag: 'p',
                                            mods: { size: 'xs-22-s-26-m-35', view: 'promo', },
                                            mix: { block: 'theme', mods: { font: 'introScriptR-H2Base' } },
                                            content: 'Почему нас выбирают?'
                                        },
                                    ]
                                }
                            },
                            {
                                block: 'tpl-layout', elem: 'content',
                                mix: [
                                    { block: 'advantages', elem: 'item' },
                                    { block: 'theme', mods: { 'xs-color-bg': 'default'} },
                                    { block: 'text', mods: {'xs-align': 'center' } },
                                    { block: 'decorator', mods: { 'space-v': 'l' }},
                                ],
                                content: [
                                    {
                                        block: 'pt-icon-plus',
                                        mods: { 'vertical-align': 'center', 'xs-direction': 'column', distribute: 'between' },
                                        content: [
                                        {
                                            elem: 'icon',
                                            mix: { block: 'decorator', mods: { 'indent-h': 'm' }},
                                            content: [
                                            {
                                                // тут иконка
                                                block: 'icon',
                                                mods: { hover: 'default', size: '', view: 'brand', },
                                                content: { html: '<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 61 61" width="61" height="61" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(.1 0 0 -.1 0 61)"><path d="m213 596c-93-30-181-124-203-218-34-139 36-285 168-349 67-33 187-34 254-1 60 30 120 90 150 150 33 67 32 187-1 254-29 60-89 120-148 149-56 27-161 34-220 15zm216-47c160-80 200-276 86-425-39-51-135-94-210-94-153 0-275 122-275 275 0 108 55 196 151 244 87 43 161 43 248 0z"/><path d="m292 548c3-7 23-16 46-20 56-9 95-31 141-79 26-27 41-37 46-29 11 18-63 89-120 116-54 26-120 33-113 12z"/><path d="m274 484c-19-28-21-81-5-97 20-20 11-25-25-14-41 13-54 2-46-41 6-34 37-68 68-76 13-4 24-11 24-17 0-7-7-8-17-4-42 16-73 17-74 4-5-60 26-109 68-109 20 0 23-5 23-40 0-54 27-56 32-3 2 29 8 39 23 41 38 7 65 43 65 85 0 38-1 39-27 34-16-3-36-9-45-12-11-4-18-3-18 4 0 6 11 13 24 17 31 8 62 42 68 76 8 42-3 51-46 40-36-10-45-5-25 15 27 27-1 123-36 123-8 0-22-11-31-26zm56-54c0-9-6-25-14-35-14-19-15-19-27 8-10 22-10 32 0 54 12 27 13 27 27 8 8-10 14-26 14-35zm-60-100c11-11 20-27 20-35 0-21-26-19-50 5s-26 50-5 50c8 0 24-9 35-20zm120 5c0-19-36-55-55-55-21 0-19 26 5 50s50 26 50 5zm-118-132c22-20 24-53 3-53-19 0-55 36-55 55 0 20 29 19 52-2zm118 2c0-19-36-55-55-55-21 0-19 26 5 50s50 26 50 5z"/><path d="m523 403c-9-3-9-12-2-29 5-14 9-39 9-55 0-20 5-29 16-29 14 0 16 8 10 46-7 53-16 73-33 67z"/></g></svg>' }
                                            }]
                                        },
                                        {
                                            elem: 'block',
                                            content: [
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mods: { size: 'xs-14-s-14-m-20', view: 'black', weight: 'bold', },
                                                mix:{ block: 'decorator', mods: { 'indent-b': 'xxs' }},
                                                content: 'Без искусственных добавок'
                                            },
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mods: { size: 'xs-14-s-14-m-20', view: 'black', },
                                                mix:{ block: 'decorator', mods: { 'indent-t': 'xxs' }},
                                                content: 'Работаем  с натуральными ингредиентами и свежими продуктами'
                                            }]
                                        }]
                                    },
                                    {
                                        block: 'pt-icon-plus',
                                        mods: { 'vertical-align': 'center', 'xs-direction': 'column' },
                                        content: [
                                        {
                                            elem: 'icon',
                                            mix: { block: 'decorator', mods: { 'indent-r': 'xs' }},
                                            content: [
                                            {
                                                // тут иконка
                                                block: 'icon',
                                                mods: { hover: 'default', size: '', view: 'brand', 'display': 'block', distribute: 'between' },
                                                content: { html: '<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 84 50" width="84" height="50" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(.1 0 0 -.1 0 50)"><path d="m72 480c-92-56-94-190-5-243 19-11 32-25 29-31-21-48-37-122-34-158l3-43 376-3c434-3 409-8 390 85-35 176-145 292-307 325l-54 11 6 33c5 26 2 35-11 40-23 9-54-21-37-38 23-23 12-35-35-41-27-3-61-9-78-12-26-5-32-2-47 24-37 66-130 91-196 51zm160-49c77-87-11-216-124-182-71 22-102 117-57 175 29 37 55 47 109 42 34-3 51-11 72-35zm383-80c101-50 168-149 190-278l7-43h-91-90l-3 102-3 103-72 3c-72 3-72 3-53 22 25 25 26 60 2 60-10 0-23-5-29-11-9-9-19-6-39 10-15 11-40 21-55 21-24 0-29-4-29-25 0-14 11-37 25-50l24-25h-69-69l-3-102-3-103h-85-85l3 35c2 19 11 57 20 83 16 46 20 50 72 67 63 21 97 57 106 112 6 32 11 38 43 47 20 6 78 9 128 7 81-3 102-7 158-35zm-185-71c9-16 8-20-5-20-20 0-57 38-50 50 8 14 42-5 55-30zm170-119c0-35-4-51-16-55-25-9-29-8-69 24-47 37-59 37-114 0-24-17-50-30-58-30-25 0-63 47-63 80v30h160 160zm-98-58c20-19 39-27 63-27 27 0 35-4 35-18 0-17-13-18-160-18h-160v30c0 35-1 34 35 16 32-17 79-7 109 24 27 27 44 25 78-7z"/><path d="m79 394c-12-15-11-16 9-10 29 9 30-14 2-39s-25-35 10-35c17 0 30 5 30 11s-7 9-15 5c-8-3-15-2-15 3s7 14 15 21c20 16 19 46-1 54-21 8-20 8-35-10z"/><path d="m161 374c-26-44-26-44 3-44 13 0 27-6 29-12 4-10 8-9 16 2 6 8 11 17 11 20s-5 12-11 20c-8 11-12 12-16 3-2-7-9-13-15-13s-3 11 6 25c18 28 20 35 7 35-5 0-18-16-30-36z"/><path d="m580 324c0-9 5-14 12-12 18 6 21 28 4 28-9 0-16-7-16-16z"/><path d="m620 305c0-3 22-26 49-52 33-32 55-65 67-101 10-28 25-52 32-52 34 0-23 124-79 174-34 31-69 47-69 31z"/></g></svg>' }
                                            }]
                                        },
                                        {
                                            elem: 'block',
                                            content: [
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mods: { size: 'xs-14-s-14-m-20', view: 'black', weight: 'bold', },
                                                mix:{ block: 'decorator', mods: { 'indent-b': 'xxs' }},
                                                content: 'Свежий торт в день торжества'
                                            },
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mods: { size: 'xs-14-s-14-m-20', view: 'black', },
                                                mix:{ block: 'decorator', mods: { 'indent-t': 'xxs' }},
                                                content: 'Торты изготавливаются в течение суток до отправки'
                                            }]
                                        }]
                                    },
                                ]
                            },
                            {
                                block: 'tpl-layout', elem: 'content',
                                mix: { block: 'advantages', elem: 'item' },
                                content: [
                                    {
                                        block: 'text',
                                        tag: 'h2',
                                        mods: { size: 'xs-24-s-28-m-40', view: 'primary', },
                                        mix: [
                                            { block: 'theme', mods: { font: 'playfairDisplay' } },
                                            { block: 'decorator', mods: { 'indent-b': 'xs' }}
                                        ],
                                        content: 'Забота о клиентах'
                                    },
                                    {
                                        block: 'text',
                                        tag: 'p',
                                        mods: { size: 'xs-22-s-26-m-35', view: 'promo', },
                                        mix: [
                                            { block: 'theme', mods: { font: 'introScriptR-H2Base' } },
                                            { block: 'decorator', mods: { 'indent-t': 'l' }},
                                            { block: 'decorator', mods: { 'indent-b': 'xs' }}
                                        ],
                                        content: 'Для нас важно'
                                    },
                                    {
                                        block: 'text',
                                        tag: 'p',
                                        mods: { size: 'xs-14-s-14-m-20', view: 'black', },
                                        mix: [
                                            { block: 'decorator', mods: { 'indent-v': 'xxs' }}
                                        ],
                                        content: 'Нам важно чтобы каждый торт был безупречным, как внутри, так и снаружи, чтобы он был создан исключительно для вас и для вашего события.'
                                    },
                                ]
                            }
                        ]
                    }
                },
                // delivery как заказать
                {
                    elem: 'section',
                    attrs: { id: 'delivery-scroll' },
                    mix: [
                        { block: 'theme', mods: { color: 'whitepaper-inverse' } },
                        { block: 'delivery' },
                    ],
                    content: {
                        elem: 'container',
                        elemMods: { size: 'l', align: 'center' },
                        content: {
                            elem: 'content',
                            mix: { block: 'delivery', elem: 'content' },
                            content: [
                                {
                                    block: 'text',
                                    tag: 'h2',
                                    mods: {  size: 'xs-24-s-28-m-40', 'xs-align': 'center', view: 'primary' },
                                    mix: [
                                        { block: 'theme', mods: { font: 'playfairDisplay' } },
                                    ],
                                    content: 'Как заказать'
                                },
                                {
                                    block: 'pt-list',
                                    mix: { block: 'delivery-list'},
                                    tag: 'ol',
                                    content: [
                                    {
                                        elem: 'item',
                                        mix: { block: 'delivery-list', elem: 'item'},
                                        tag: 'li',
                                        content: [
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mods: { size: 'xs-15-s-15-m-21', view: 'primary', weight: 'bold', },
                                                mix: { block: 'decorator', mods: { 'indent-b': 'xxxs' }},
                                                content: "Срок заказа"
                                            },
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mods: { size: 'xs-14-s-14-m-20', view: 'primary', },
                                                mix: { block: 'decorator', mods: { 'indent-t': 'xxxs' }},
                                                content: "Размещать заказы желательно за 2-3 дня. На выходные заказы лучше размещать минимум за неделю."
                                            },
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        mix: { block: 'delivery-list', elem: 'item'},
                                        tag: 'li',
                                        content: [
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mods: { size: 'xs-15-s-15-m-21', view: 'primary', weight: 'bold', },
                                                mix: { block: 'decorator', mods: { 'indent-b': 'xxxs' }},
                                                content: "Доставка по городу"
                                            },
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mods: { size: 'xs-14-s-14-m-20', view: 'primary', },
                                                mix: { block: 'decorator', mods: { 'indent-t': 'xxxs' }},
                                                content: " Доставка в пределах города 200 рублей, при заказе на сумму более 2000  доставка бесплатно."
                                            },
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        mix: { block: 'delivery-list', elem: 'item'},
                                        tag: 'li',
                                        content: [
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mods: { size: 'xs-15-s-15-m-21', view: 'primary', weight: 'bold', },
                                                mix: { block: 'decorator', mods: { 'indent-b': 'xxxs' }},
                                                content: "Доставка за городом"
                                            },
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mods: { size: 'xs-14-s-14-m-20', view: 'primary', },
                                                mix: { block: 'decorator', mods: { 'indent-t': 'xxxs' }},
                                                content: "Доставка за пределами города рассчитывается индивидуально."
                                            },
                                        ]
                                    }]
                                }
                            ]
                        }
                    }
                },
                // contacts контакты
                {
                    elem: 'section',
                    mix: { block: 'contacts' },
                    attrs: { id: 'contacts-scroll' },
                    content: {
                        elem: 'container',
                        elemMods: { size: 'l', align: 'center' },
                        content: {
                            elem: 'content',
                            content: [
                            {
                                elem: 'header',
                                content: [
                                    {
                                        block: 'text',
                                        tag: 'h2',
                                        mods: { 'xs-align': 'center', size: 'xs-24-s-28-m-40', view: 'primary', weight: 'bold', },
                                        mix: { block: 'theme', mods: { font: 'playfairDisplay' } },
                                        content: 'Контакты'
                                    },
                                ]
                            },
                            {
                                block: "tpl-grid",
                                mods: { 'xs-ratio': '1', 's-columns': '8', 'm-columns': '12', "col-gap": "third", "row-gap": "half"},
                                content: [
                                    {
                                        elem: 'fraction',
                                        elemMods: { 'xs-col': '1', 's-col': '3', 'm-col':'5' },
                                        content: [
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mods: { size: 'xs-22-s-22-m-35', view: 'primary', },
                                                mix: [
                                                    { block: 'theme', mods: { font: 'introScriptR-H2Base' } },
                                                    { block: 'decorator', mods: { 'indent-v': 'xxxs' }}],
                                                content: 'Остались вопросы?'
                                            },
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mods: { size: 'xs-14-s-14-m-20', view: 'primary', },
                                                content: 'Заполните форму ниже и наш кондитер свяжется с Вами'
                                            },
                                            {
                                                block: 'pt-form',
                                                content: [
                                                {
                                                    elem: 'item',
                                                    elemMods: { 'space-v': 'xs', distribute: 'default', 'vertical-align': 'center' },
                                                    content: [
                                                        {
                                                            elem: 'control',
                                                            content: {
                                                                block: 'input',
                                                                mods: { theme: 'cake', size: 'l', width: 'available' },
                                                                placeholder: 'Ваше имя'
                                                            }
                                                        },
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    elemMods: { 'space-v': 'xs', distribute: 'default', 'vertical-align': 'center' },
                                                    content: {
                                                        elem: 'control',
                                                        content: {
                                                            block: 'input',
                                                            mods: { theme: 'cake', size: 'l', width: 'available' },
                                                            placeholder: 'Email адрес'
                                                        }
                                                    },
                                                },
                                                {
                                                    elem: 'item',
                                                    elemMods: { 'space-v': 'xs', distribute: 'default', 'vertical-align': 'center' },
                                                    content: {
                                                        elem: 'control',
                                                        content: {
                                                            block: 'textarea',
                                                            mods: { theme: 'islands', size: 'l', width: 'available' },
                                                            mix: { block: 'textarea', mods: { theme: 'cake' }},
                                                            placeholder: 'Ваш вопрос'
                                                        }
                                                    }
                                                },
                                                {
                                                        block: 'button',
                                                        mix: { block: 'contacts', elem: 'button' },
                                                        mods: {
                                                            theme: 'cake',
                                                            size: 'm',
                                                            width: 'small',
                                                            type: 'submit'
                                                        },
                                                        text: 'Отправить'
                                                }]
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { 'xs-col': '1', 's-col': '1', 'm-col':'1' },
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { 'xs-col': '1', 's-col': '3', 'm-col':'5' },
                                        content: [
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mods: { size: 'xs-14-s-14-m-20', view: 'primary', },
                                                mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
                                                content: 'Или позвоните по телефону:'
                                            },
                                            {
                                                block: 'text',
                                                tag: 'a',
                                                attrs: { href:'tel:89068999296' },
                                                mods: { size: 'xs-14-s-14-m-20', view: 'link', },
                                                mix: { block: 'decorator', mods: { 'indent-t': 'xxs' } },
                                                content: '+7 906 899 92 96'
                                            },
                                            {
                                                tag: 'br'
                                            },
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mods: { size: 'xs-14-s-14-m-20', view: 'primary', display: 'inline' },
                                                mix: { block: 'decorator', mods: { 'indent-r': 's' } },
                                                content: 'Наша почта:'
                                            },
                                            {
                                                block: 'text',
                                                tag: 'a',
                                                attrs: { href:'mailto:bakerybypavel@mail.ru' },
                                                mods: { size: 'xs-14-s-14-m-20', view: 'link', },
                                                content: 'bakerybypavel@mail.ru'
                                            },
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mods: { size: 'xs-14-s-14-m-20', view: 'primary', },
                                                content: 'Мы в соц. сетях:'
                                            },
                                            {
                                                block: 'contacts',
                                                elem: 'social',
                                                tag: 'ul',
                                                mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
                                                content: [
                                                    {
                                                        block: 'icon-background',
                                                        mods: { size: '63', view: 'normal' },
                                                        tag: 'li',
                                                        content: {
                                                            block: 'social-icon',
                                                            tag: 'a',
                                                            attrs: { href: '#' },
                                                            mods: { hover: 'default', size: 'm', view: 'brand', 'display': 'block' },
                                                            mix: { block: 'decorator', mods: { 'space-a': 'm' } },
                                                            content: { html: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32" style=""><g ><path style=" " d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z "></path></g></svg>' }
                                                        },
                                                    },
                                                    {
                                                        block: 'icon-background',
                                                        mods: { size: '63', view: 'normal' },
                                                        mix: { block: 'decorator', mods: { 'indent-l': 'xxl' } },
                                                        tag: 'li',
                                                        content: {
                                                            block: 'social-icon',
                                                            tag: 'a',
                                                            attrs: { href: '#' },
                                                            mods: { hover: 'default', size: 'm', view: 'brand', 'display': 'block' },
                                                            mix: { block: 'decorator', mods: { 'space-a': 'm', } },
                                                            content: { html: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 16 16" style=""><g ><path style=" " d="M 7.695313 3.019531 C 6.867188 3.011719 6.242188 3.050781 5.71875 3.320313 C 5.503906 3.429688 5.351563 3.570313 5.234375 3.734375 C 5.171875 3.816406 5.113281 3.890625 5.085938 4.0625 C 5.070313 4.144531 5.058594 4.28125 5.144531 4.429688 C 5.230469 4.582031 5.414063 4.683594 5.539063 4.703125 C 5.632813 4.714844 5.832031 4.796875 5.867188 4.84375 C 5.949219 4.960938 5.980469 5.046875 5.992188 5.09375 C 6.003906 5.140625 6 5.109375 6 5.109375 L 6 5.15625 C 6 5.15625 6.03125 5.648438 6.011719 6.15625 C 6 6.40625 5.976563 6.667969 5.9375 6.84375 C 5.898438 7.019531 5.800781 7.0625 5.941406 6.980469 C 5.84375 7.039063 5.878906 7.0625 5.757813 7 C 5.632813 6.941406 5.308594 6.667969 4.882813 5.902344 C 4.457031 5.132813 4.148438 4.734375 4.078125 4.648438 C 4.050781 4.570313 3.984375 4.410156 3.757813 4.234375 C 3.464844 4.007813 3.164063 4.003906 3.164063 4.003906 L 3.136719 4 L 0.953125 4 C 0.953125 4 0.828125 4.003906 0.683594 4.035156 C 0.539063 4.066406 0.332031 4.101563 0.136719 4.34375 C 0.136719 4.34375 0.132813 4.34375 0.132813 4.34375 C -0.0664063 4.597656 -0.03125 4.828125 -0.015625 4.96875 C 0.00390625 5.113281 0.046875 5.226563 0.046875 5.226563 L 0.0546875 5.25 L 0.0664063 5.273438 C 0.0664063 5.273438 1.734375 8.832031 3.726563 11 C 5.597656 13.039063 7.765625 13 7.765625 13 L 8.996094 13 L 9.023438 12.996094 C 9.023438 12.996094 9.417969 13.015625 9.75 12.644531 C 9.917969 12.453125 9.957031 12.273438 9.976563 12.140625 C 10 12.003906 10 11.894531 10 11.894531 L 10 11.925781 C 10 11.925781 10.015625 11.667969 10.085938 11.398438 C 10.121094 11.265625 10.171875 11.132813 10.21875 11.058594 C 10.242188 11.015625 10.242188 11.027344 10.25 11.015625 C 10.335938 11.078125 10.476563 11.222656 10.625 11.40625 C 10.929688 11.769531 11.273438 12.273438 11.753906 12.621094 C 12.101563 12.867188 12.429688 12.976563 12.679688 13.015625 C 12.847656 13.042969 12.96875 13.039063 13.050781 13.03125 L 14.75 13 L 14.765625 13 C 14.765625 13 15.117188 12.992188 15.46875 12.769531 C 15.640625 12.660156 15.839844 12.460938 15.90625 12.175781 C 15.976563 11.890625 15.898438 11.582031 15.734375 11.296875 C 15.789063 11.394531 15.722656 11.265625 15.671875 11.164063 C 15.621094 11.0625 15.542969 10.925781 15.425781 10.753906 C 15.199219 10.417969 14.824219 9.945313 14.203125 9.34375 C 13.910156 9.0625 13.722656 8.90625 13.605469 8.796875 C 13.640625 8.746094 13.644531 8.742188 13.777344 8.585938 C 13.988281 8.339844 14.296875 7.976563 14.6875 7.433594 C 15.15625 6.777344 15.496094 6.242188 15.714844 5.796875 C 15.933594 5.355469 16.109375 4.988281 15.914063 4.535156 C 15.808594 4.289063 15.621094 4.195313 15.484375 4.136719 C 15.34375 4.078125 15.21875 4.054688 15.101563 4.035156 C 14.871094 4 14.667969 4 14.667969 4 L 12.6875 4.015625 C 12.628906 4.003906 12.402344 3.960938 12.109375 4.148438 C 11.820313 4.328125 11.753906 4.519531 11.738281 4.578125 C 11.691406 4.644531 11.363281 5.109375 10.90625 5.921875 C 10.445313 6.742188 10.132813 6.964844 10.09375 6.984375 C 10.082031 6.972656 10.105469 6.976563 10.050781 6.945313 C 10.027344 6.925781 10.003906 6.910156 9.984375 6.699219 C 9.96875 6.488281 9.988281 6.15625 9.988281 5.765625 C 9.988281 4.925781 10.0625 4.488281 10.019531 4.070313 C 10 3.859375 9.914063 3.601563 9.726563 3.429688 C 9.539063 3.261719 9.335938 3.199219 9.125 3.144531 C 8.792969 3.0625 8.34375 3.027344 7.695313 3.019531 Z M 7.6875 4.019531 C 8.292969 4.027344 8.71875 4.074219 8.875 4.113281 C 9.007813 4.148438 9.027344 4.164063 9.023438 4.15625 C 9.023438 4.164063 9.023438 4.160156 9.023438 4.171875 C 9.039063 4.339844 8.988281 4.878906 8.988281 5.765625 C 8.988281 6.113281 8.960938 6.449219 8.988281 6.785156 C 9.015625 7.121094 9.136719 7.53125 9.492188 7.773438 L 9.496094 7.773438 C 9.453125 7.746094 9.945313 8.113281 10.414063 7.945313 C 10.882813 7.773438 11.253906 7.34375 11.78125 6.410156 C 12.242188 5.582031 12.582031 5.117188 12.582031 5.117188 L 12.613281 5.070313 L 12.636719 5.023438 C 12.636719 5.023438 12.628906 5.019531 12.636719 5.015625 L 14.667969 5 C 14.667969 5 14.808594 5 14.945313 5.023438 C 14.949219 5.023438 14.953125 5.023438 14.957031 5.023438 C 14.9375 5.03125 14.953125 5.082031 14.816406 5.359375 C 14.640625 5.714844 14.324219 6.222656 13.875 6.851563 C 13.503906 7.363281 13.226563 7.695313 13.019531 7.9375 C 12.8125 8.175781 12.65625 8.289063 12.554688 8.601563 C 12.503906 8.753906 12.515625 8.980469 12.589844 9.132813 C 12.660156 9.28125 12.746094 9.363281 12.832031 9.445313 C 13.003906 9.609375 13.207031 9.769531 13.503906 10.0625 C 14.085938 10.625 14.414063 11.039063 14.597656 11.3125 C 14.691406 11.453125 14.746094 11.550781 14.78125 11.621094 C 14.816406 11.691406 14.792969 11.664063 14.871094 11.796875 C 14.9375 11.917969 14.925781 11.933594 14.925781 11.925781 C 14.859375 11.964844 14.691406 12 14.6875 12 L 12.988281 12.03125 L 12.941406 12.042969 C 12.941406 12.042969 12.945313 12.046875 12.839844 12.03125 C 12.730469 12.011719 12.558594 11.964844 12.339844 11.808594 C 12.070313 11.617188 11.730469 11.171875 11.394531 10.765625 C 11.230469 10.566406 11.0625 10.371094 10.851563 10.214844 C 10.640625 10.058594 10.308594 9.914063 9.96875 10.027344 C 9.675781 10.121094 9.484375 10.335938 9.363281 10.535156 C 9.242188 10.738281 9.171875 10.949219 9.117188 11.140625 C 9.015625 11.527344 9 11.875 9 11.875 L 9 11.90625 C 9 11.90625 9 11.929688 8.992188 11.964844 C 8.972656 11.972656 8.945313 11.992188 8.929688 12 L 7.734375 12 C 7.734375 12 6.082031 12.085938 4.460938 10.328125 C 2.726563 8.433594 1.183594 5.265625 1.054688 5 L 3.066406 5 C 3.085938 5.007813 3.15625 5.035156 3.148438 5.03125 C 3.101563 4.992188 3.171875 5.078125 3.171875 5.078125 L 3.203125 5.152344 L 3.257813 5.214844 C 3.257813 5.214844 3.566406 5.589844 4.007813 6.386719 C 4.480469 7.242188 4.878906 7.6875 5.324219 7.902344 C 5.769531 8.117188 6.238281 7.964844 6.4375 7.851563 C 6.808594 7.636719 6.851563 7.335938 6.914063 7.058594 C 6.976563 6.78125 6.996094 6.484375 7.007813 6.195313 C 7.03125 5.640625 7 5.167969 7 5.132813 C 6.996094 5.121094 6.996094 4.984375 6.957031 4.835938 C 6.914063 4.683594 6.835938 4.484375 6.6875 4.273438 C 6.625 4.1875 6.566406 4.230469 6.5 4.167969 C 6.777344 4.089844 7.074219 4.011719 7.6875 4.019531 Z "></path></g></svg>' }
                                                        }
                                                    },
                                                ]
                                            }
                                        ],
                                    }
                                ]
                            }]
                        }
                    }
                },
                //footer
                {
                    block: 'footer',
                    mix: {
                        block: 'theme',
                        mods: { 's-max-color': 'whitepaper-inverse' }
                    },
                    content: [
                        {
                            elem: 'container',
                            mix: {
                                block: 'tpl-layout',
                                elem: 'container',
                                elemMods: { size: 'l', align: 'center' }
                            },
                            content: {
                                block: 'footer', elem: 'content',
                                content: [
                                    // footer__nav
                                    {
                                        block: 'pt-list',
                                        mix: { block: 'footer', elem: 'nav' },
                                        content: [
                                            {
                                                block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'm' },
                                                content: {
                                                    block: 'text',
                                                    mix: { block: 'theme', mods: { font: 'playfairDisplay' } },
                                                    tag: 'a',
                                                    attrs: { href: 'index.html' },
                                                    mods: { size: 'xs-28-s-18-m-28', view: 'primary', weight: 'bold', view: 'link' },
                                                    content: 'Cakes'
                                                },
                                            },
                                            {
                                                block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'm', 'vertical-align': 'baseline' },
                                                content: {
                                                    block: 'text',
                                                    tag: 'a',
                                                    attrs: { href: '#products-scroll' },
                                                    mods: { size: 'xs-14-s-12-m-16', view: 'primary', view: 'link'  },
                                                    val: '1',
                                                    content: 'Наши торты'
                                                },
                                            },
                                            {
                                                block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'm', 'vertical-align': 'baseline' },
                                                content: {
                                                    tag: 'a',
                                                    attrs: { href: '#order-scroll' },
                                                    block: 'text',
                                                    mods: { size: 'xs-14-s-12-m-16', view: 'primary', view: 'link'  },
                                                    mix: { block: 'footer-menu', elem: 'item' },
                                                    val: '2',
                                                    content: 'Индивидуальный заказ'
                                                },
                                            },
                                            {
                                                block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'm', 'vertical-align': 'baseline' },
                                                content: {
                                                    tag: 'a',
                                                    attrs: { href: '#reviews-scroll' },
                                                    block: 'text',
                                                    mods: { size: 'xs-14-s-12-m-16', view: 'primary', view: 'link'  },
                                                    mix: { block: 'footer-menu', elem: 'item' },
                                                    val: '3',
                                                    content: 'Отзывы'
                                                },
                                            },
                                            {
                                                block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'm', 'vertical-align': 'baseline' },
                                                content: {
                                                    tag: 'a',
                                                    attrs: { href: '#about-scroll' },
                                                    block: 'text',
                                                    mods: { size: 'xs-14-s-12-m-16', view: 'primary', view: 'link'  },
                                                    mix: { block: 'footer-menu', elem: 'item' },
                                                    val: '4',
                                                    content: 'О нас'
                                                },
                                            },
                                            {
                                                block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'm', 'vertical-align': 'baseline' },
                                                content: {
                                                    tag: 'a',
                                                    attrs: { href: '#delivery-scroll' },
                                                    block: 'text',
                                                    mods: { size: 'xs-14-s-12-m-16', view: 'primary', view: 'link'  },
                                                    mix: { block: 'footer-menu', elem: 'item' },
                                                    val: '5',
                                                    content: 'Как заказать'
                                                },
                                            },
                                            {
                                                block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'm', 'vertical-align': 'baseline' },
                                                content: {
                                                    tag: 'a',
                                                    attrs: { href: '#contacts-scroll' },
                                                    block: 'text',
                                                    mods: { size: 'xs-14-s-12-m-16', view: 'primary', view: 'link'  },
                                                    mix: { block: 'footer-menu', elem: 'item' },
                                                    val: '6',
                                                    content: 'Контакты'
                                                }
                                            },
                                        ]
                                    },
                                    // footer__social
                                    {
                                        block: 'footer', elem: 'social',
                                        content: [
                                            {
                                                block: 'social-icon',
                                                tag: 'a',
                                                attrs: { href: '#' },
                                                mods: { hover: 'default', size: '32', view: 'primary', },
                                                mix: { block: 'decorator', mods: { 'indent-a': 'xs' } },
                                                content: { html: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32" style=""><g ><path style=" " d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z "></path></g></svg>' }
                                            },
                                            {
                                                block: 'social-icon',
                                                tag: 'a',
                                                attrs: { href: '#' },
                                                mods: { hover: 'default', size: '32', view: 'primary',  },
                                                mix: { block: 'decorator', mods: { 'indent-a': 'xs', } },
                                                content: { html: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 16 16" style=""><g ><path style=" " d="M 7.695313 3.019531 C 6.867188 3.011719 6.242188 3.050781 5.71875 3.320313 C 5.503906 3.429688 5.351563 3.570313 5.234375 3.734375 C 5.171875 3.816406 5.113281 3.890625 5.085938 4.0625 C 5.070313 4.144531 5.058594 4.28125 5.144531 4.429688 C 5.230469 4.582031 5.414063 4.683594 5.539063 4.703125 C 5.632813 4.714844 5.832031 4.796875 5.867188 4.84375 C 5.949219 4.960938 5.980469 5.046875 5.992188 5.09375 C 6.003906 5.140625 6 5.109375 6 5.109375 L 6 5.15625 C 6 5.15625 6.03125 5.648438 6.011719 6.15625 C 6 6.40625 5.976563 6.667969 5.9375 6.84375 C 5.898438 7.019531 5.800781 7.0625 5.941406 6.980469 C 5.84375 7.039063 5.878906 7.0625 5.757813 7 C 5.632813 6.941406 5.308594 6.667969 4.882813 5.902344 C 4.457031 5.132813 4.148438 4.734375 4.078125 4.648438 C 4.050781 4.570313 3.984375 4.410156 3.757813 4.234375 C 3.464844 4.007813 3.164063 4.003906 3.164063 4.003906 L 3.136719 4 L 0.953125 4 C 0.953125 4 0.828125 4.003906 0.683594 4.035156 C 0.539063 4.066406 0.332031 4.101563 0.136719 4.34375 C 0.136719 4.34375 0.132813 4.34375 0.132813 4.34375 C -0.0664063 4.597656 -0.03125 4.828125 -0.015625 4.96875 C 0.00390625 5.113281 0.046875 5.226563 0.046875 5.226563 L 0.0546875 5.25 L 0.0664063 5.273438 C 0.0664063 5.273438 1.734375 8.832031 3.726563 11 C 5.597656 13.039063 7.765625 13 7.765625 13 L 8.996094 13 L 9.023438 12.996094 C 9.023438 12.996094 9.417969 13.015625 9.75 12.644531 C 9.917969 12.453125 9.957031 12.273438 9.976563 12.140625 C 10 12.003906 10 11.894531 10 11.894531 L 10 11.925781 C 10 11.925781 10.015625 11.667969 10.085938 11.398438 C 10.121094 11.265625 10.171875 11.132813 10.21875 11.058594 C 10.242188 11.015625 10.242188 11.027344 10.25 11.015625 C 10.335938 11.078125 10.476563 11.222656 10.625 11.40625 C 10.929688 11.769531 11.273438 12.273438 11.753906 12.621094 C 12.101563 12.867188 12.429688 12.976563 12.679688 13.015625 C 12.847656 13.042969 12.96875 13.039063 13.050781 13.03125 L 14.75 13 L 14.765625 13 C 14.765625 13 15.117188 12.992188 15.46875 12.769531 C 15.640625 12.660156 15.839844 12.460938 15.90625 12.175781 C 15.976563 11.890625 15.898438 11.582031 15.734375 11.296875 C 15.789063 11.394531 15.722656 11.265625 15.671875 11.164063 C 15.621094 11.0625 15.542969 10.925781 15.425781 10.753906 C 15.199219 10.417969 14.824219 9.945313 14.203125 9.34375 C 13.910156 9.0625 13.722656 8.90625 13.605469 8.796875 C 13.640625 8.746094 13.644531 8.742188 13.777344 8.585938 C 13.988281 8.339844 14.296875 7.976563 14.6875 7.433594 C 15.15625 6.777344 15.496094 6.242188 15.714844 5.796875 C 15.933594 5.355469 16.109375 4.988281 15.914063 4.535156 C 15.808594 4.289063 15.621094 4.195313 15.484375 4.136719 C 15.34375 4.078125 15.21875 4.054688 15.101563 4.035156 C 14.871094 4 14.667969 4 14.667969 4 L 12.6875 4.015625 C 12.628906 4.003906 12.402344 3.960938 12.109375 4.148438 C 11.820313 4.328125 11.753906 4.519531 11.738281 4.578125 C 11.691406 4.644531 11.363281 5.109375 10.90625 5.921875 C 10.445313 6.742188 10.132813 6.964844 10.09375 6.984375 C 10.082031 6.972656 10.105469 6.976563 10.050781 6.945313 C 10.027344 6.925781 10.003906 6.910156 9.984375 6.699219 C 9.96875 6.488281 9.988281 6.15625 9.988281 5.765625 C 9.988281 4.925781 10.0625 4.488281 10.019531 4.070313 C 10 3.859375 9.914063 3.601563 9.726563 3.429688 C 9.539063 3.261719 9.335938 3.199219 9.125 3.144531 C 8.792969 3.0625 8.34375 3.027344 7.695313 3.019531 Z M 7.6875 4.019531 C 8.292969 4.027344 8.71875 4.074219 8.875 4.113281 C 9.007813 4.148438 9.027344 4.164063 9.023438 4.15625 C 9.023438 4.164063 9.023438 4.160156 9.023438 4.171875 C 9.039063 4.339844 8.988281 4.878906 8.988281 5.765625 C 8.988281 6.113281 8.960938 6.449219 8.988281 6.785156 C 9.015625 7.121094 9.136719 7.53125 9.492188 7.773438 L 9.496094 7.773438 C 9.453125 7.746094 9.945313 8.113281 10.414063 7.945313 C 10.882813 7.773438 11.253906 7.34375 11.78125 6.410156 C 12.242188 5.582031 12.582031 5.117188 12.582031 5.117188 L 12.613281 5.070313 L 12.636719 5.023438 C 12.636719 5.023438 12.628906 5.019531 12.636719 5.015625 L 14.667969 5 C 14.667969 5 14.808594 5 14.945313 5.023438 C 14.949219 5.023438 14.953125 5.023438 14.957031 5.023438 C 14.9375 5.03125 14.953125 5.082031 14.816406 5.359375 C 14.640625 5.714844 14.324219 6.222656 13.875 6.851563 C 13.503906 7.363281 13.226563 7.695313 13.019531 7.9375 C 12.8125 8.175781 12.65625 8.289063 12.554688 8.601563 C 12.503906 8.753906 12.515625 8.980469 12.589844 9.132813 C 12.660156 9.28125 12.746094 9.363281 12.832031 9.445313 C 13.003906 9.609375 13.207031 9.769531 13.503906 10.0625 C 14.085938 10.625 14.414063 11.039063 14.597656 11.3125 C 14.691406 11.453125 14.746094 11.550781 14.78125 11.621094 C 14.816406 11.691406 14.792969 11.664063 14.871094 11.796875 C 14.9375 11.917969 14.925781 11.933594 14.925781 11.925781 C 14.859375 11.964844 14.691406 12 14.6875 12 L 12.988281 12.03125 L 12.941406 12.042969 C 12.941406 12.042969 12.945313 12.046875 12.839844 12.03125 C 12.730469 12.011719 12.558594 11.964844 12.339844 11.808594 C 12.070313 11.617188 11.730469 11.171875 11.394531 10.765625 C 11.230469 10.566406 11.0625 10.371094 10.851563 10.214844 C 10.640625 10.058594 10.308594 9.914063 9.96875 10.027344 C 9.675781 10.121094 9.484375 10.335938 9.363281 10.535156 C 9.242188 10.738281 9.171875 10.949219 9.117188 11.140625 C 9.015625 11.527344 9 11.875 9 11.875 L 9 11.90625 C 9 11.90625 9 11.929688 8.992188 11.964844 C 8.972656 11.972656 8.945313 11.992188 8.929688 12 L 7.734375 12 C 7.734375 12 6.082031 12.085938 4.460938 10.328125 C 2.726563 8.433594 1.183594 5.265625 1.054688 5 L 3.066406 5 C 3.085938 5.007813 3.15625 5.035156 3.148438 5.03125 C 3.101563 4.992188 3.171875 5.078125 3.171875 5.078125 L 3.203125 5.152344 L 3.257813 5.214844 C 3.257813 5.214844 3.566406 5.589844 4.007813 6.386719 C 4.480469 7.242188 4.878906 7.6875 5.324219 7.902344 C 5.769531 8.117188 6.238281 7.964844 6.4375 7.851563 C 6.808594 7.636719 6.851563 7.335938 6.914063 7.058594 C 6.976563 6.78125 6.996094 6.484375 7.007813 6.195313 C 7.03125 5.640625 7 5.167969 7 5.132813 C 6.996094 5.121094 6.996094 4.984375 6.957031 4.835938 C 6.914063 4.683594 6.835938 4.484375 6.6875 4.273438 C 6.625 4.1875 6.566406 4.230469 6.5 4.167969 C 6.777344 4.089844 7.074219 4.011719 7.6875 4.019531 Z "></path></g></svg>' }
                                            }
                                        ]
                                    },
                                    // footer__copyright
                                    {
                                        block: 'footer', elem: 'copyright',
                                        mix: { block: 'decorator', mods: { 'space-v': 'm' } },
                                        content: {
                                            block: 'text',
                                            tag: 'span',
                                            mods: { size: 'xs-14-s-12-m-16', view: 'primary',  },
                                            mix: { block: 'decorator', mods: { 'indent-l': 's'} },
                                            content: 'Ⓒ 2018 Cakes'
                                        }
                                    }
                                ],
                            }
                        },
                    ]
                },
            ]
        }
    ]
};
