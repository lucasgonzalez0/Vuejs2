// las acciones me sirven para hacer peticiones http, normalmente son asincronas
import Vue from 'vue'

// obtiene todos los todos
export async function fetchProducts ({commit}) {
    try {
        const {data} = await Vue.axios ({
            //por defecto utiliza el metodo GET
            url: '/products'
        })
        commit('setProducts', data)
    } catch (e) {
        commit('productsError', e.message)
    } finally {
        console.log('La petición para obtener los products ha finalizado')
    }
} 

//peticion para añadir un Producto
export async function addProduct ({commit}, product) {
    try {
        await Vue.axios({
            method: 'POST',
            url: '/products',
            data: {
                id: Date.now(),
                nombre: product.nombre,
                descripcion: product.descripcion,
                precio: product.precio,
                tipoProducto: product.tipoProducto,
                done: false
            }
        })
        //ejecutamos otra accion
    } catch (e) {
        commit('productsError', e.message)
    } finally {
        console.log('La petición para crear un producto ha finalizado')
    }
} 

export async function updateProduct ({commit}, product) {
    try {
        await Vue.axios({
            method: 'PUT',
            url: `/products/${product.id}`,
            data: {
                id: product.id,
                nombre: product.nombre,
                descripcion: product.descripcion,
                precio: product.precio,
                tipoProducto: product.tipoProducto,
                done: product.done
            }
        })

    } catch (e) {
        commit('productsError', e.message)
    } finally {
        console.log('La petición para actualizar un product ha finalizado')
    }
}
//dispatch se utiliza para ejecutar una accion
export async function updateProductStatus ({commit, dispatch}, product) {
    try {
        await Vue.axios({
            method: 'PUT',
            url: `/products/${product.id}`,
            data: {
                id: product.id,
                nombre: product.nombre,
                descripcion: product.descripcion,
                precio: product.precio,
                tipoProducto: product.tipoProducto,
                done: ! product.done
            }
        })
        dispatch('fetchProducts')
    } catch (e) {
        commit('productsError', e.message)
    } finally {
        console.log('La petición para actualizar el estado del product ha finalizado')
    }
} 


export async function removeProduct ({commit, dispatch}, id) {
    try {
        await Vue.axios({
            method: 'DELETE',
            url: `/products/${id}`,
        })
        dispatch('fetchProducts')
    } catch (e) {
        commit('productsError', e.message)
    } finally {
        console.log('La petición para actualizar el estado de product ha finalizado')
    }
} 