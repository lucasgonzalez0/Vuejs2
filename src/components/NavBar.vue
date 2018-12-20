<template>
  <div class="">
    <b-navbar toggleable="md" type="dark" variant="dark">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand exact to="/home">Cruachan</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item exact to="/categorias">Categorias</b-nav-item>

          <b-nav-item-dropdown text="Productos" right>
          <b-dropdown-item exact to="/listaproducto">Lista de productos</b-dropdown-item>
          <b-dropdown-item exact to="/nuevoproducto">Nuevo producto</b-dropdown-item>
          <b-dropdown-item exact to="/tipoproducto">Tipo de producto</b-dropdown-item>
          <b-dropdown-item exact to="/vistaprom">Promociones</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
        


        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-5" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
   </div> 

<!-- navbar-1.vue -->
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>