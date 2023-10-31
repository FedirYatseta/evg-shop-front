import * as apiServices from '@/services/api';
import ActionTree from 'vuex'
import { PRODUCTS_URL, PRODUCT_URL } from './constants';


export const actions: ActionTree<any, any> = {
    async fetchProduct({ state, commit }: any) {
        try {
            const response = await apiServices.instance.get(`${PRODUCTS_URL}/${state.shop || ''}`)
            commit('setProduct', response.data)
        } catch (e) {
            console.log(e)
        }
    },
    async getProductId({ state, commit }: any, id: any) {

        try {
            const response = await apiServices.instance.get(`${PRODUCT_URL}/${id}`)
            commit('setSelectedProduct', response.data)
            commit('setShowModal', true)
        } catch (e) {
            console.log(e)
        }
    },
}
