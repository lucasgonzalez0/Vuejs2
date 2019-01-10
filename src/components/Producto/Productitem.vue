<template>
    <b-row class="mb-2">
        <b-col cols="2">{{ product.nombre }}</b-col>
        <b-col>
            <b-button
                variant="primary"
                @click="goToUpdateProduct"
            >
                Editar
            </b-button>
            <b-button 
                variant="warning"
                class="ml-2"
                @click="updateProductStatus"
            >
                Estado
            </b-button>
            <b-button 
                variant="danger"
                class="ml-2"
                @click="removeProduct"
            >
                Eliminar
            </b-button>        
        </b-col>
    </b-row>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex'
    export default {
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        methods: {
            ...mapActions({
                _updateProductStatus: 'products/updateProductStatus',
                _removeProduct: 'products/removeProduct'
            }),
            ...mapMutations('products', ['setProduct']),
            goToUpdateProduct (product) {
                this.setProduct(product)
                this.$router.push({
                    name: 'products-update',
                    params: {id: this.product.id}
                })
            },
             updateProductStatus () {
            this._updateProductStatus(this.product)
        },
            removeProduct () {
                this._removeProduct(this.product.id)            
            }
        } 
    }
</script>
