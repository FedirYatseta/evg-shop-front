import MutationTree from 'vuex'

export const mutations: MutationTree<any, any> = {
    setProduct(state: any, prod: any) {
        state.product = prod.data
    },
    setSelectedSort(state: any, selectedSort: any) {
        console.log('Sort', selectedSort)

        state.selectedSort = selectedSort
    },
    setSearchQuery(state: any, searchQuery: any) {
        state.searchQuery = searchQuery
    },
    setShowModal(state: any, value: any,) {
        if (!state.showModal) {
            document.body.classList.add('modal-open');
        }
        else {
            document.body.classList.remove('modal-open');
        }
        state.showModal = value;
    },

    setSelectedProduct(state: any, data: any) {
        state.selectedProduct = data.data
    },

    setProductToOrder(state: any, data: any) {

        if (!state.showModalBuy) {
            document.body.classList.add('modal-open');
        }
        else {
            document.body.classList.remove('modal-open');
        }
        state.showModalBuy = true
        const [product] = state.product.filter(x => x._id === data)
        state.buyProduct = [...state.buyProduct, {
            id: product._id, title: product.title,
            image: product.imageSrc[0],
            price: product.price, count: 1
        }]
    },

    setShowBuyModal(state: any, value: any) {
        state.showModalBuy = value
    },

    decrease(state: any, id: any) {

        const newArr = state.buyProduct.map(item => {

            if (item.id === id)
                item.count + 1
            return item
        })
        console.log('Arr', newArr)
        state.buyProduct
    }

}