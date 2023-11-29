import icon1 from '@/image/1.png'
import icon2 from '@/image/Image1.jpg'
import icon3 from '@/image/Image2.jpg'
import icon4 from '@/image/Image3.jpg'
import icon5 from '@/image/Image4.jpg'
import icon6 from '@/image/Image5.jpg'

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
    { name: 'Бананки', path: '/product/bana', image: icon2 },
    { name: 'Слінги', path: '/product/sling', image: icon3 },
    { name: 'Месенджери', path: '/product/mess', image: icon4 },
    { name: 'Клатчі та гаманці', path: '/product/wallet', image: icon5 },
    { name: 'Ключчниці', path: '/product/klutch', image: icon6 },
]

export const feedback = [
    { image: icon1 }, { image: icon1 }, { image: icon1 },
    { image: icon1 }, { image: icon1 }, { image: icon1 }
]