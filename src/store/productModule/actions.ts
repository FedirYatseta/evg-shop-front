import * as apiServices from '@/services/api';
import ActionTree from 'vuex'
import { PRODUCTS_URL, PRODUCT_URL, ORDER_URL, CONFIGURE_URL } from './constants';


export const actions: ActionTree<any, any> = {
    async fetchProduct({ state, commit }: any, query?: any) {


        try {
            const response = await apiServices.instance.get(`${PRODUCTS_URL}/${state.shop || ''}`, {
                params: {
                    type: query
                }
            })
            commit('setProduct', response.data)
        } catch (e) {
            console.log(e)
        }
    },
    async fetchConf({ state, commit }: any) {
        try {
            const response = await apiServices.instance.get(`${CONFIGURE_URL}/${state.shop || ''}`)
            commit('setConf', response.data)
        } catch (e) {
            console.log(e)
        }
    },
    async createOrder({ state, commit }: any, body: any) {
        try {
            const response = await apiServices.instance.post(ORDER_URL, body)
            commit('setOrder', response.data)
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
