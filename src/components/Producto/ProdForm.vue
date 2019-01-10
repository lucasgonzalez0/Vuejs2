<template>
  <div>
      <b-container>
        <b-card class="text-center" style="color: red">
          Acá usted podrá cargar un nuevo producto
        </b-card>
        
        <b-form @submit.prevent="$emit('process-product', product)" @reset="onReset">
        <b-form-group id="product"
                        label="Producto"
                        label-for="product">
            <b-form-input id="nombre"
                        type="text"
                        v-model="product.nombre"
                        required
                        placeholder="Ej: Lomito Especial">
            </b-form-input>
        </b-form-group>

        <b-form-group id="descripcion"
                        label="Descripción:"
                        label-for="descriProd">
            <b-form-input id="descripcion"
                        type="text"
                        v-model="product.descripcion"
                        required
                        placeholder="Lomito Especial con huevo, jamón, lechuga, tomate, etc">
            </b-form-input>
        </b-form-group>

        <b-form-group id="tipoProducto"
                        label="Tipo Producto:"
                        label-for="tipoProducto">
                        <b-form-select  v-model="product.tipoProducto" required class="mb-3" >
                          <option :value="null" > Seleccione una opción </option>
                          <option value="1">Lomitos</option>
                          <option value="2" >Hamburgesas</option>
                          <option value="3">Sandwich de Miga</option>
                          <option value="4" >Empanadas</option>
                          <option value="5">Choripanes</option>
                          <option value="6" >Pizzas</option>                                                    

                        </b-form-select>
           
        </b-form-group>  

        <b-form-group id="precio"
                        label="Precio:"
                        label-for="precioProd">
            <b-form-input id="precio"
                        type="number"
                        v-model="product.precio"
                        required
                        placeholder="$ 40">
            </b-form-input>
        </b-form-group>        
        <b-button type="submit" variant="primary">{{ productSubmit }}</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-container>  
    </div>
</template>

<script>
export default {
      props: {
        product: {
          type: Object,
          required: true
        },
        productSubmit: {
          type: String,
          default: 'Crear todo'
        }

      },    
  methods: {
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.product.nombre = '';
      this.product.descripcion = '';
      this.product.precio = [];
      this.product.tipoProducto = null;
      /* Trick to reset/clear native browser form validation state */

    }
  }
}
</script>

<!-- b-form-1.vue -->