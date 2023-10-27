import { createStore } from 'vuex'
import { product } from './productModule/index'

export interface State {
    isAuth: boolean
}
const productModule = {
    namespaced: true,
    ...product
};

const storeOptions = {
    state: {
        isAuth: false
    },
    modules: {
        product: productModule,

    }
};
export const store = createStore<State>(storeOptions);



