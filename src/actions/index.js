import Store from "../reducers/store";

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const BEGIN_PURCHASE = 'BEGIN_PURCHASE';
export const BEGIN_PAYMENT = 'BEGIN_PAYMENT';
export const PRINT_INVOICE = 'PRINT_INVOICE';

const getProduct = (id) => Store.getState().products.find(value => value.id === id);

export function addProduct(productId, amount) {
    return {type: ADD_PRODUCT, product: getProduct(productId), amount: amount};//todo manejo de error - id invalido
}

export function removeProduct(productId) {
    return {type: REMOVE_PRODUCT, product: getProduct(productId)};
}

export function beginPurchase(client) {
    return {type: BEGIN_PURCHASE, client: client};
}

export function beginPayment() {
    return {type: BEGIN_PAYMENT};
}

export function printInvoice() {
    return {type: PRINT_INVOICE};
}