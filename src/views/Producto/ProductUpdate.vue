<template>
    <div v-if="selectedProduct">
        <prod-form 
            :product="selectedProduct" 
            @process-product="updateProduct"
            productSubmit="Actualizar Producto" 
        ></prod-form>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
import ProdForm from '@/components/Producto/ProdForm'
export default {
    components: {
        ProdForm
    },
    computed: {
        ...mapState('products', ['selectedProduct'])
    },
    methods: {
        ...mapActions({
            _updateProduct: 'products/updateProduct'

        }),
        updateProduct (product) {
            this._updateProduct(product).then(() => {
                this.$router.push('/Productos')
            })
        }
    }
}
</script>
