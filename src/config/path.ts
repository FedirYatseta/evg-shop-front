import fedback1 from '@/image/fedback1.webp'
import fedback2 from '@/image/fedback2.webp'
import fedback3 from '@/image/fedback3.webp'
import fedback4 from '@/image/fedback4.webp'
import fedback5 from '@/image/fedback5.webp'
import fedback6 from '@/image/fedback6.webp'
import fedback7 from '@/image/fedback7.webp'
import fedback8 from '@/image/fedback8.webp'
import fedback9 from '@/image/fedback9.webp'
import fedback10 from '@/image/fedback10.webp'
import fedback11 from '@/image/fedback11.webp'
import fedback12 from '@/image/fedback12.webp'
import fedback13 from '@/image/fedback13.webp'
import fedback14 from '@/image/fedback14.webp'
import fedback15 from '@/image/fedback15.webp'
import icon1 from '@/image/1.jpg'
import icon2 from '@/image/2.jpg'
import icon3 from '@/image/3.jpg'
import icon4 from '@/image/4.jpg'
import icon5 from '@/image/5.jpg'
import icon6 from '@/image/6.jpg'
import icon7 from '@/image/7.jpg'
import icon8 from '@/image/8.jpg'

export const pathConfig = [
    { name: 'Головна', path: '/', },
    { name: 'Бананки', path: '/product/bana', },
    { name: 'Слінги', path: '/product/sling', },
    { name: 'Месенджери', path: '/product/mess', },
    { name: 'Клатчі та гаманці', path: '/product/wallet', },
    { name: 'Ключчниці', path: '/product/klutch', },
    { name: 'Відгуки', path: '/', id: 'feedback' },
    { name: 'Часті питання', path: '/', id: 'question' }
]

export const pathFooter = [
    { name: 'Головна', path: '/' },
    {
        name: 'Каталог', path: '/category', subPath: [
            { name: 'Хіти', path: '/product/hit', },
            { name: 'Новинки', path: '/product/new', },
            { name: 'Бананки', path: '/product/bana' },
            { name: 'Слінги', path: '/product/sling' },
            { name: 'Месенджери', path: '/product/mess' },
            { name: 'Клатчі та гаманці', path: '/product/wallet' },
            { name: 'Ключчниці', path: '/product/klutch' },
        ]
    },
    { name: 'Відгуки', path: '/', id: 'feedback' },
    { name: 'Часті питання', path: '/', id: 'question' }
]

export const pathConfigNew = [
    { name: 'Головна', path: '/' },
    { name: 'Хіти', path: '/product/hit' },
    { name: 'Новинки', path: '/product/new' },
    { name: 'Знижки', path: '/product/sale' },
    { name: 'Бананки', path: '/product/bana' },
    { name: 'Слінги', path: '/product/sling' },
    { name: 'Месенджери', path: '/product/mess' },
    { name: 'Клатчі та гаманці', path: '/product/wallet' },
    { name: 'Ключчниці', path: '/product/klutch', },
    { name: 'Відгуки', path: '/', id: 'feedback' },
    { name: 'Часті питання', path: '/', id: 'question' }
]

export const mainUrlOfFooter = [
    { name: 'Головна', path: '/', id: 'home' },
    { name: 'Каталог', path: '/category', },
    { name: 'Відгуки', path: '/', id: 'feedback' },
    { name: 'Часті питання', path: '/', id: 'question' }
]

export const categoryProduct = [
    { name: 'Новинки', path: '/product/new', image: icon1 },
    { name: 'Хіти продажів', path: '/product/hit', image: icon2 },
    { name: 'Бананки  / сумки на пояс', path: '/product/bana', image: icon3 },
    { name: 'Слінги', path: '/product/sling', image: icon4 },
    { name: 'Месенджери', path: '/product/mess', image: icon5 },
    { name: 'Рюкзаки', path: '/product/wallet', image: icon6 },
    { name: 'Сумки для документів/ноутбука', path: '/product/wallet', image: icon7 },
    { name: 'Клатчі та гаманці', path: '/product/wallet', image: icon8 },
]

export const feedback = [
    { image: fedback1 }, { image: fedback2 }, { image: fedback3 },
    { image: fedback4 }, { image: fedback5 }, { image: fedback6 },
    { image: fedback7 }, { image: fedback8 }, { image: fedback9 },
    { image: fedback10 }, { image: fedback11 }, { image: fedback12 },
    { image: fedback13 }, { image: fedback14 }, { image: fedback15 },
]