import { useRouter } from 'vue-router'

const useScrollToElement = () => {
    const router = useRouter()

    // Об'єкт, що відображає відповідність між item.id та ID елементів на сторінці
    const sections = {
        question: 'question',
        feedback: 'feedback',
        aboutus: 'aboutus',
        footer: 'footer',
        home: 'home',
        catalog: 'catalog',
    }

    const scrollToElement = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleReviewsClick = (item) => {
        // Перевіряємо, чи існує відповідний ID елемента для item.id
        if (sections[item.id]) {
            // Якщо існує, прокручуємо до відповідного елемента
            setTimeout(() => {
                scrollToElement(sections[item.id])
            }, 500);
        } else {
            // Якщо немає відповідного ID, виконуємо перехід за маршрутом
            router.push(item.path)
        }
    }

    return { handleReviewsClick }
}

export default useScrollToElement
