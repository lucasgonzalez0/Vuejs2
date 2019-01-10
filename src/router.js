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
      path: '/Productos',
      name: 'productos',
      component: () => import('./views/Producto/Productos.vue')
    },
    {
      path: '/Nuevoproducto',
      name: 'nuevoproducto',
      component: () => import('./views/Producto/ProductoCreate.vue')
   
    },
    {
      path: '/products/:id/update',
      name: 'products-update',
      component: () => import('./views/Producto/ProductUpdate.vue')
   
    },

    {
      path: '/NuevoTipoProducto',
      name: 'vistanuevotipprod',
      component: () => import('./views/TipoProducto/VistaNuevoTipProd.vue')
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: () => import(/* webpackChunkName: "categorias" */ './views/Categoria/Categorias.vue')
    }

    
  ]
})
