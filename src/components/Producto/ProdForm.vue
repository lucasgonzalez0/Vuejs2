<template>
  <div>
      <b-container>
        <b-card class="text-center">
          Acá usted podrá cargar un nuevo producto
        </b-card>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="nombre"
                        label="Nombre del producto:"
                        label-for="nombreProducto"
                        description="Ingrese el nombre de un producto. Por ejemplo:  Lomito Especial.">
            <b-form-input id="nombreProducto"
                        type="text"
                        v-model="form.name"
                        required
                        placeholder="Ej: Lomito Especial">
            </b-form-input>
        </b-form-group>
        <b-form-group id="descripcion"
                        label="Descripción:"
                        label-for="descriProd">
            <b-form-input id="descriProd"
                        type="text"
                        v-model="form.descripcion"
                        required
                        placeholder="Lomito Especial con huevo, jamón, lechuga, tomate, etc">
            </b-form-input>
        </b-form-group>
        <b-form-group id="precio"
                        label="Precio:"
                        label-for="precioProd">
            <b-form-input id="precioProd"
                        type="number"
                        v-model="form.precio"
                        required
                        placeholder="$ 40">
            </b-form-input>
        </b-form-group>        
        <b-form-group id="tipoProducto"
                        label="Tipo de producto:"
                        label-for="tipoProd">
            <b-form-select id="tipoProd"
                        :options="tipProd"
                        required
                        v-model="form.tipProd">
            </b-form-select>
        </b-form-group>
        <b-form-group id="exampleGroup4">
            <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-container>  
    </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        descripcion: '',
        precio: '',
        tipProd: null,
        checked: []
      },
      tipProd: [
        { text: 'Seleccione', value: null },
        'Lomitos', 'Carlitos', 'Pizzas', 'Sandwich de miga'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.name = '';
      this.form.descripcion = '';
      this.form.tipProd = null;
      this.form.precio = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<!-- b-form-1.vue -->