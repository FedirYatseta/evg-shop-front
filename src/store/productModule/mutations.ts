import MutationTree from 'vuex'

export const mutations: MutationTree<any, any> = {
    setProduct(state: any, prod: any) {
        state.product = prod.data
    },

    setProductNew(state: any, prod: any) {
        state.product = [...state.product, ...prod.data]
    },
    setSelectedSort(state: any, selectedSort: any) {

        state.selectedSort = selectedSort
    },
    setSearchQuery(state: any, searchQuery: any) {
        state.searchQuery = searchQuery
    },


    setSelectedProduct(state: any, payload: any) {
        console.log('payload', payload)

        state.selectedProduct = []
        const newObj = {
            ...payload.data,
            imageSrc: payload.data.videoUrl ? [...payload.data.imageSrc, payload.data.videoUrl] : [...payload.data.imageSrc]
        }
        state.selectedProduct = newObj
        console.log('state', state.selectedProduct)

    },


    setProductToOrder(state: any, data: any) {

        // Шукаємо товар за ід
        const product = state.product.find(x => x._id === data);
        if (product) {
            // Якщо товар знайдено, додаємо його до списку куплених товарів
            const existingProduct = state.buyProduct.find(item => item.id === product._id);

            if (existingProduct) {
                // Якщо товар вже існує у списку, збільшуємо кількість
                existingProduct.count++;
            } else {
                // Якщо товар ще не існує у списку, додаємо його
                state.buyProduct.push({
                    id: product._id,
                    title: product.title,
                    size: product.size,
                    image: product.imageSrc[0],
                    price: product.price,
                    oldPrice: product.oldPrice,
                    count: 1
                });
            }
        }
    }
    ,



    setDecrease(state: any, id: any) {

        const newArr = state.buyProduct.map(item => {

            if (item.id === id)
                item.count -= 1
            return item
        })


    },
    setIncrease(state: any, id: any) {

        const newArr = state.buyProduct.map(item => {

            if (item.id === id)
                item.count += 1
            return item
        })


    },

    deleteProduct(state: any, id: any) {
        const data = state.buyProduct.filter(i => i.id !== id)
        state.buyProduct = data
    },
    setOrder(state: any, res: any) {

        state.message = res
    },

    setConf(state: any, data: any) {
        state.confShop = data.data
    },


}