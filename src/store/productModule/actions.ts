import * as apiServices from '@/services/api';
import ActionTree from 'vuex'
import { PRODUCTS_URL, ORDER_URL, CONFIGURE_URL, MESSAGE_URL } from './constants';


export const actions: ActionTree<any, any> = {
    async fetchProduct({ state, commit }: any, query?: any) {

        try {
            const response = await apiServices.instance.get(`${PRODUCTS_URL}/${state.shop || ''}`, {
                params: {
                    limit: 14,
                    ...query
                }
            })
            if (!query?.cursor) {
                commit('setProduct', response.data)
            } else commit('setProductNew', response.data)

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
    async createOrder({ commit }: any, body: any) {
        try {
            const response = await apiServices.instance.post(ORDER_URL, body)
            commit('setOrder', response.data)
        } catch (e) {
            console.log(e)
        }
    },

    async createMessage({ commit }: any, body: any) {
        try {
            const response = await apiServices.instance.post(MESSAGE_URL, body)
            console.log('response', response)

            //commit('setOrder', response.data)
        } catch (e) {
            console.log(e)
        }
    },

}
