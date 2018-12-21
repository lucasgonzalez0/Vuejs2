<template>
    
    <div class="container">
        <div>
    <b-card-group deck
                  class="mb-3">
        <b-card bg-variant="primary"
                text-variant="white"
                header="Pedidos"
                class="text-center">
             <div class="w-100 p-3 bg-secondary ">
                <b-link to="/NuevoPedido">
                    <b-button style="font-size:20px">NUEVO PEDIDOS</b-button>
                </b-link>
            </div>   
            
        </b-card>
        <b-card bg-variant="secondary"
                text-variant="white"
                header="Secondary"
                class="text-center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
        <b-card bg-variant="success"
                text-variant="white"
                header="Success"
                class="text-center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
    </b-card-group>
        </div>
    </div>
</template>

<script>




    export default { 
    }
</script>

<style scoped>

</style>