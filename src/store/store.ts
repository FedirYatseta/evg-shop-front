import { createStore } from 'vuex'
import { product } from './productModule/index'
import createPersistedState from 'vuex-persistedstate'

export interface State {
    isAuth: boolean
}

const orderProduct = createPersistedState({
    key: 'product',
    paths: ['product.buyProduct', 'product.selectedProduct', 'product.product'] // Якщо ви хочете зберігати лише певні поля стану
})
const productModule = {
    namespaced: true,
    ...product,
};

const storeOptions = {
    state: {
        isAuth: false
    },
    modules: {
        product: productModule,
    },
    plugins: [orderProduct],
};

export const store = createStore<State>(storeOptions);



