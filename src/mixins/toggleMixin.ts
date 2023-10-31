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
            setShowModal: 'product/setShowModal',
            setShowBuyModal: 'product/setShowBuyModal'
        }),
        hideDialog() {
            this.setShowBuyModal(false)
            this.setShowModal(false)
        },
        closeModal() {
            this.setShowBuyModal(false)
            this.setShowModal(false);
        }
    },

}