import { actions } from "./actions"
import { getters } from "./getters"
import { mutations } from "./mutations"
import type { ProductState } from "./types"
import Module from 'vuex'

const state: ProductState = {
    showModal: false,
    product: [],
    selectedProduct: [],
    buyProduct: [],
    selectedSort: '',
    searchQuery: '',
    showModalBuy: false,
    shop: import.meta.env.VITE_SHOP_ID,
    confShop: [],
    sortOptions: [
        { value: 'title', name: 'По назві' },
        { value: 'size', name: 'По розміру' },
        { value: 'type', name: 'По типу' },
        { value: 'hitProduct', name: 'Хіт' },
        { value: 'newProduct', name: 'Нові товари' },

    ],

}


export const product: Module<any, any> = {
    state,
    getters,
    actions,
    mutations
}