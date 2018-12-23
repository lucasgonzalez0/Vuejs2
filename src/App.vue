<template>
  <div id="app">
    <v-app dark>
      <v-content>
      <navbar></navbar>
      <home></home>
       

      <router-view/>  
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import Home from '@/views/Home.vue'


  export default {
    
    components: {
      Navbar, Home
    }
  }
</script>

<style lang="stylus">

</style>
