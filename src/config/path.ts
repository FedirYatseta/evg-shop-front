import fedback1 from '@/image/fedback1.jpg'
import fedback2 from '@/image/fedback2.jpg'
import fedback3 from '@/image/fedback3.jpg'
import fedback4 from '@/image/fedback4.jpg'
import fedback5 from '@/image/fedback5.jpg'
import fedback6 from '@/image/fedback6.jpg'
import fedback7 from '@/image/fedback7.jpg'
import fedback8 from '@/image/fedback8.jpg'
import fedback9 from '@/image/fedback9.jpg'
import fedback10 from '@/image/fedback10.jpg'
import fedback11 from '@/image/fedback11.jpg'
import fedback12 from '@/image/fedback12.jpg'
import fedback13 from '@/image/fedback13.jpg'
import fedback14 from '@/image/fedback14.jpg'
import fedback15 from '@/image/fedback15.jpg'
import icon1 from '@/image/1.jpg'
import icon2 from '@/image/2.jpg'
import icon3 from '@/image/3.jpg'
import icon4 from '@/image/4.jpg'
import icon5 from '@/image/5.jpg'
import icon6 from '@/image/6.jpg'

export const pathConfig = [
    { name: 'Головна', path: '/', id: 'home' },
    { name: 'Всі сумки', path: '/product', id: 'home' },
    { name: 'Бананки', path: '/product/bana', id: 'home' },
    { name: 'Слінги', path: '/product/sling', id: 'home' },
    { name: 'Месенджери', path: '/product/mess', id: 'home' },
    { name: 'Клатчі та гаманці', path: '/product/wallet', id: 'home' },
    { name: 'Ключчниці', path: '/product/klutch', id: 'home' },
    { name: 'Відгуки', path: '/', id: 'feedback' },
    { name: 'Часті питання', path: '/', id: 'question' }
]

export const pathFooter = [
    { name: 'Головна', path: '/', id: 'home' },
    {
        name: 'Каталог', path: '/category', id: 'home', subPath: [
            { name: 'Бананки', path: '/product/bana' },
            { name: 'Слінги', path: '/product/sling' },
            { name: 'Месенджери', path: '/product/mess' },
            { name: 'Клатчі та гаманці', path: '/product/wallet' },
            { name: 'Ключчниці', path: '/product/klutch' },
        ]
    },
    { name: 'Всі Сумки', path: '/product', id: 'home' },
    { name: 'Відгуки', path: '/', id: 'feedback' },
    { name: 'Часті питання', path: '/', id: 'question' }
]

export const pathConfigNew = [
    { name: 'Головна', path: '/', id: 'home' },
    { name: 'Хіти', path: '/product/hit', id: 'home' },
    { name: 'Новинки', path: '/product/new', id: 'home' },
    { name: 'Знижки', path: '/product/sale', id: 'home' },
    { name: 'Всі сумки', path: '/product', id: 'home' },
    { name: 'Бананки', path: '/product/bana', id: 'home' },
    { name: 'Слінги', path: '/product/sling', id: 'home' },
    { name: 'Месенджери', path: '/product/mess', id: 'home' },
    { name: 'Клатчі та гаманці', path: '/product/wallet', id: 'home' },
    { name: 'Ключчниці', path: '/product/klutch', id: 'home' },
    { name: 'Відгуки', path: '/', id: 'feedback ' },
    { name: 'Часті питання', path: '/', id: 'question' }
]

export const categoryProduct = [
    { name: 'Бананки', path: '/product/bana', image: icon1 },
    { name: 'Слінги', path: '/product/sling', image: icon2 },
    { name: 'Новинки', path: '/product/new', image: icon3 },
    { name: 'Хіти', path: '/product/hit', image: icon4 },
    { name: 'Клатчі та гаманці', path: '/product/wallet', image: icon5 },
    { name: 'Месенджери', path: '/product/mess', image: icon6 },
]

export const feedback = [
    { image: fedback1 }, { image: fedback2 }, { image: fedback3 },
    { image: fedback4 }, { image: fedback5 }, { image: fedback6 },
    { image: fedback7 }, { image: fedback8 }, { image: fedback9 },
    { image: fedback10 }, { image: fedback11 }, { image: fedback12 },
    { image: fedback13 }, { image: fedback14 }, { image: fedback15 },
]