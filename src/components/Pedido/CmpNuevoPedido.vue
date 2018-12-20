<template>
    <div>
        <b-container>
            <shop-layout>
                <template slot="product-list">
                    <product-list></product-list>
                </template> 
                <template slot="cart">
                    <cart></cart>
                </template>     
            </shop-layout>
        </b-container>

    </div>
</template>

<script>
import ShopLayout from '@/components/Producto/ShopLayout.vue'
import ProductList from '@/components/Producto/ProductList.vue'
import Cart from '@/components/Producto/cart.vue'
    export default {
        components: {
            ShopLayout, ProductList, Cart
        }
        
        
    }
</script>

<style scoped>

</style>