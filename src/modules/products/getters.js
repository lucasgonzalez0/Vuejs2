export function pending (state) {
    return state.products.filter(product => ! product.done)
}

export function done (state) {
    return state.products.filter(product => product.done)
}