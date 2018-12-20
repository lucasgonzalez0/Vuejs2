import state from './state' // contiene los datos
import * as mutations from './mutations' //alteran los datos
import * as getters from './getters' // filtran los datos y acceder los datos


export default {
    namespaced: true,
    state,
    mutations,
    getters
}