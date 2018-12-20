<template>
    <div class="container">
        <b-container fluid class="text-light text-center">
            <b-row class="mb-3">
                <b-col md="4">
                    <b-button exact to="/nuevopedido" variant="warning">
                    NUEVO PEDIDO</b-button>
                </b-col>
                
            </b-row>
            <b-row class="mb-3">
                <b-col md="4">
                    <b-button exact to="/listapedido" variant="success">
                     VER PEDIDOS</b-button>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="mr-auto p-4">
                    <b-button exact to="/vistanuevotipprod" variant="primary">
                    PRODUCTOS</b-button>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="mr-auto p-4">
                    <b-button exact to="/vistaprom" variant="danger">
                    PROMOCIONES</b-button>
                </b-col>
            </b-row>
            

</b-container>


    </div>
</template>

<script>




    export default { 
    }
</script>

<style scoped>

</style>