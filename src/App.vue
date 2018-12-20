<template>
  <div id="app">
      <nav-bar></nav-bar>
      <home></home>
       

      <router-view/>  
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import Home from '@/views/Home.vue'


  export default {
    
    components: {
      NavBar, Home
    }
  }
</script>

<style lang="stylus">

</style>
