import { mapMutations } from 'vuex'
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        ...mapMutations({
            setShowBuyModal: 'product/setShowBuyModal'
        }),
        hideDialog() {
            this.setShowBuyModal(false)
        },
        closeModal() {
            this.setShowBuyModal(false)
        }
    },

}