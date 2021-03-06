import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/NuevoPedido',
      name: 'nuevopedido',
      component: () => import('./views/Pedido/VistaNuevoPedido.vue')
   
    },
    {
      path: '/ListaPedido',
      name: 'listapedido',
      component: () => import('./views/Pedido/VistaListaPedido.vue')
   
    },


    {
      path: '/ListadoProducto',
      name: 'listaproducto',
      component: () => import('./views/Producto/Producto.vue')
    },
    {
      path: '/nuevoproducto',
      name: 'nuevoproducto',
      component: () => import('./views/Producto/ProductoCreate.vue')
   
    },
    {
      path: '/NuevoTipoProducto',
      name: 'vistanuevotipprod',
      component: () => import('./views/TipoProducto/VistaNuevoTipProd.vue')
    },
    {
      path: '/vistaprom',
      name: 'vistaprom',
      component: () => import('./views/Promociones/VistaListaPromo.vue')
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: () => import(/* webpackChunkName: "categorias" */ './views/Categoria/Categorias.vue')
    }

    
  ]
})
