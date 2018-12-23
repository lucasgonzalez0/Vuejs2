<template>
    <div>
     <v-navigation-drawer
    class="dark"
    dark
    fixed
    app
    v-model="drawer" 
  >
    <v-list>
      <v-list-tile v-for="link in links"
        :key="link.title"
        router :to="link.route">
        <v-list-tile-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title class="grey--text">{{ link.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
        <v-toolbar flat app fixed class="black">
            <v-toolbar-side-icon @click.stop="drawer = !drawer">
                <v-icon color="grey">wrap_text</v-icon>
            </v-toolbar-side-icon>
            <v-toolbar-title >
                <a href="/" class="d-flex router-link-active">
                    <img src="@/assets/logo1.jpeg" height="60px" width="60px">
                </a> 
            </v-toolbar-title>
            <v-btn to="/ListaPedido" flat> 
                <span>Pedidos</span>
                <v-icon large color="blue-grey darken-2" medium >shopping_cart</v-icon>
            </v-btn>
            <v-btn flat> 
                <span>Productos</span>
                <v-icon large color="yellow darken-2" medium>local_pizza</v-icon>
            </v-btn>
            <v-btn flat> 
                <span>Promociones</span>
                <v-icon large color="red darken-2" medium>loyalty</v-icon>
            </v-btn>
            
            <v-spacer></v-spacer>
            <v-btn flat > 
                <span>user</span>
                <v-icon color="blue">account_circle </v-icon>
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data() {
            return{
               drawer: false ,
               links: [
          { title: 'Dashboard', icon: 'dashboard', route: '/ListaPedido' },
          { title: 'Account', icon: 'account_box' },
          { title: 'Admin', icon: 'gavel' }
        ]
            }
        }
    }
</script>

<style scoped>

</style>