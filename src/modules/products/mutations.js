import { toUnicode } from "punycode";

// mutaciones para ALTERAR el ESTADO

export function setProducts (state, products) {
    state.products = products;

}

export function setProduct (state, product) {
    state.selectedProduct = product;
}

export function updateProductStatus (state, payload) {
    const product = state.products.find(p => p.id == payload.id)
    if (product) {
        product.done = ! product.done
    }
}

export function productsError (state, payload) {
    state.error = true
    state.errorMessage = payload
    state.products = []
}