export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function addProduct(product, amount) {
    return {type: ADD_PRODUCT, product: product, amount: amount};
}

export function removeProduct(product, amount) {
    return {type: REMOVE_PRODUCT, product: product, amount: amount};
}
