import Store from "../reducers/store";

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function addProduct(productId, amount) {
    const product = Store.getState().products.find(value => value.id === productId);
    return {type: ADD_PRODUCT, product: product, amount: amount};//todo manejo de error - id invalido
}

export function removeProduct(product, amount) {
    return {type: REMOVE_PRODUCT, product: product, amount: amount};
}
