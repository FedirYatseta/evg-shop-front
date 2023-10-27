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
            setShowModal: 'product/setShowModal'
        }),
        hideDialog() {

            this.setShowModal(false)
        },
        closeModal() {

            this.setShowModal(false);
        }
    },

}