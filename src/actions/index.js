import Store from "../reducers/store";

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const getProduct = (id) => Store.getState().products.find(value => value.id === id);

export function addProduct(productId, amount) {
    return {type: ADD_PRODUCT, product: getProduct(productId), amount: amount};//todo manejo de error - id invalido
}

export function removeProduct(productId) {
    return {type: REMOVE_PRODUCT, product: getProduct(productId)};
}
