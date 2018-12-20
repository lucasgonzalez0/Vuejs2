<template>
  <div>
      <b-container>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="nombre"
                        label="Nombre del Tipo producto:"
                        label-for="nombreTipoProducto"
                        description="Ingrese el nombre del tipo de producto. Por ejemplo:  Lomitos.">
            <b-form-input id="nombreTipoProducto"
                        type="text"
                        v-model="form.name"
                        required
                        placeholder="Ej: Lomitos">
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
        <b-form-group id="categoria"
                        label="Categoría:"
                        label-for="categoria">
            <b-form-select id="categoria"
                        :options="categoria"
                        required
                        v-model="form.categoria">
            </b-form-select>
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
        categoria: null
        
      },
      categoria: [
        { text: 'Seleccione', value: null },
        'Cat 1', 'Cat 2', 'Cat 3', 'Cat 4'
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
      this.form.categoria = null;
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<!-- b-form-1.vue -->