import { actions } from "./actions"
import { getters } from "./getters"
import { mutations } from "./mutations"
import type { ProductState } from "./types"
import ModuleTree from 'vuex'

const state: ProductState = {
    product: [],
    selectedProduct: [],
    buyProduct: [],
    selectedSort: '',
    searchQuery: '',
    shop: import.meta.env.VITE_SHOP_ID,
    confShop: [],
    sortOptions: [
        { value: 'price', name: 'По ціні ' },
        { value: 'type', name: 'По типу' },
        { value: 'hitProduct', name: 'Хіт' },
        { value: 'newProduct', name: 'Нові товари' },

    ],

}


export const product: ModuleTree<any> = {
    state,
    getters,
    actions,
    mutations
}