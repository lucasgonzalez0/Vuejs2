<template>

    <div v-if="products.length">
        <product-item
            v-for="product in products"
            :product="product"
            :key="product.id"
        ></product-item>
    </div>
    <b-alert v-else show variant="info">No hay productos que mostrar</b-alert>

</template>

<script>
    import ProductItem from '@/components/Producto/Productitem.vue'
    export default {
        props: {
            products: {
                type: Array,
                required: true
            }
        },
        components: {
            ProductItem
        }
    }
</script>

