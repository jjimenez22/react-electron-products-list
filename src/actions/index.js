import Store from "../reducers/store";

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const BEGIN_PURCHASE = 'BEGIN_PURCHASE';
export const OPEN_ADD_PRODUCT_MODAL = 'OPEN_ADD_PRODUCT_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const BEGIN_PAYMENT = 'BEGIN_PAYMENT';
export const PRINT_INVOICE = 'PRINT_INVOICE';

export const SET_PAYED = 'SET_PAYED';
export const SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD';

export const NONE = 'NONE';

const getProduct = (id) => Store.getState().products.find(value => value.id === id);

export function addProduct(productId, amount) {
    const product = getProduct(productId);
    if (product) {
        return {type: ADD_PRODUCT, product: product, amount: amount};//todo manejo de error - id invalido
    } else {
        return {type: NONE}; //todo refinar errores
    }
}

export function removeProduct(productId) {
    return {type: REMOVE_PRODUCT, product: getProduct(productId)};
}

export function beginPurchase(client) {
    return {type: BEGIN_PURCHASE, client: client};
}

export function showAddProductModal() {
    return {type: OPEN_ADD_PRODUCT_MODAL};
}

export function hideModal() {
    return {type: CLOSE_MODAL};
}

export function beginPayment() {
    return {type: BEGIN_PAYMENT};
}

export function setPayed(payed) {
    return {type: SET_PAYED, payed: payed};
}

export function setPaymentMethod(method) {
    return {type: SET_PAYMENT_METHOD, paymentMethod: method};
}

export function printInvoice() {
    return {type: PRINT_INVOICE};
}