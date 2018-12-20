<template>
    <div v-if="products.length">
        <paginate
            name="products"
            :list="products"
            :per="perPage"
        >
            <b-card-group columns>
                <product-item
                    v-for="product in paginated('products')"
                    :product="product"
                    :key="product.id"
                    @addToCart= "addProductToCart"
                >  
                </product-item>  

            </b-card-group>
            
        </paginate>

        <paginate-links
            for="products"
            :classes="{
                'ul': 'pagination',
                'li': 'page-item',
                'li > a': 'page-link'
            }"
        ></paginate-links>    
    </div>
    <b-alert v-else show variant="info">No hay productos que mostrar</b-alert>
</template>

<script>
    import {mapActions, mapMutations, mapState} from 'vuex'
    import ProductItem from './Productitem'
    export default {
        components: {
            ProductItem
        },
        mounted () {
            this.fetchProducts()
        },
        data () {
            return {
        //Le damos valor a la clave paginate requerida que 
        //tiene que ser un array
        //es para darle el nombre a la paginación, es un alias       
               paginate: ['products'],
               perPage: 3 
            }
        },
        computed: {
            // primer parámetro es el nombre del modulo, y el segundo es la clave del estado
            ...mapState('products', ['products'])
        },
        methods: {
            //Accedemos al modulo products, luego la accion que queremos ejecutar
            ...mapActions('products', ['fetchProducts']),
            ...mapMutations('cart', ['addProduct']),
            addProductToCart (product) {
                this.addProduct(product)

            }
        }        
    }
</script>

