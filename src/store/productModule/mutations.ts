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
        state.showModal = value;
    },

    setSelectedProduct(state: any, data: any) {
        state.selectedProduct = data.data
    }

}