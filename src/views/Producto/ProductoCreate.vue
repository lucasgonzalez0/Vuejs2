<template>
    <div>
        <prod-form :product="product" @process-product="addProduct"></prod-form>
    </div>
</template>

<script>
import ProdForm from '@/components/Producto/ProdForm'
import { mapActions } from 'vuex';
    export default {
        components: {
            ProdForm
        },
        data () {
            return {
                product: {
                    nombre: '',
                    descripcion: '',
                    precio: '',
                    done: false,
                    tipoProducto: null,
                },
                
            }
        },
        methods: {
            ...mapActions ({
            createProduct: 'products/addProduct'
        }),
        addProduct (product) {
                this.createProduct(product).then(() => {
                    this.$router.push('/Nuevoproducto')
                })
            }
        }
    }
</script>

<style scoped>

</style>