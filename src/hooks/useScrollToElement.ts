import { useRouter } from 'vue-router'

const useScrollToElement = () => {
    const router = useRouter()



    const scrollToElement = (id) => {
        // Ваша логіка прокрутки до елемента з вказаним ID на сторінці "Головна"
        // Ви можете використовувати JavaScript, наприклад, такий метод:
        const element = document.getElementById(id)


        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    const handleReviewsClick = (item) => {


        if (item.id === 'question') {
            // Перехід до розділу з ID "question" на сторінці "Головна"
            setTimeout(() => {
                scrollToElement('question')
            }, 500);
        } else if (item.id === 'feedback') {

            // Перехід до розділу з ID "feedback" на сторінці "Головна"

            setTimeout(() => {
                scrollToElement('feedback')
            }, 500);

        }
        else {
            // Зазвичай переход за маршрутом

            router.push(item.path)
        }
    }

    return { handleReviewsClick }
}

export default useScrollToElement