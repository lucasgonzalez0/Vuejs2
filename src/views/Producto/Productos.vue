<template>
    <b-container>
    <div>
        <div class="mt-5">
            <b-row>
                <b-col cols="6">
                    <h2>Productos pendientes</h2>
                    <product-list :products="pending"></product-list>
                </b-col>
                <b-col cols="6">
                    <h2>Productos finalizados</h2>
                    <product-list :products="done"></product-list>
                    
                </b-col>
            </b-row>
        </div>
    </div>
    </b-container>
</template>

<script>
  
import {mapActions, mapGetters} from 'vuex'
import ProductList from '@/components/Producto/ProductList.vue'


export default {
 components: {
     ProductList
    },
    mounted () {
        this.fetchProducts()

    }, 
    methods: {
        ...mapActions('products', ['fetchProducts'])

    },
    computed: {
        ...mapGetters('products', ['pending', 'done'])
    }

}
</script>

