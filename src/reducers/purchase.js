import {ADD_PRODUCT, BEGIN_PAYMENT, BEGIN_PURCHASE, PRINT_INVOICE, REMOVE_PRODUCT, SET_PAYED} from "../actions/index";
import {CLOSE_MODAL, OPEN_ADD_PRODUCT_MODAL, SET_PAYMENT_METHOD} from "../actions";

export const ENTER_CLIENT_STATUS = 'ENTER_CLIENT';
export const ENTER_PRODUCTS_STATUS = 'ENTER_PRODUCTS';
export const MANUAL_PRODUCT_ENTER_STATUS = 'MANUAL_PRODUCT_ENTER';
export const ENTER_PAYMENT_STATUS = 'ENTER_PAYMENT';
export const PRINTING_STATUS = 'PRINTING';

const initialState = {
    status: ENTER_CLIENT_STATUS,
    client: {
        // name: 'Randy Javier',
    },
    points: {
        generated: 0,
        available: 0,
    },
    items: [
        // {
        //     product: {
        //         id: 0,
        //         description: 'Atún en Lata',
        //         price: 0.80,
        //         itbis: 0.08,
        //         discount: 0.0
        //     },
        //     amount: 1
        // },
        // {
        //     product: {
        //         id: 1,
        //         description: 'Jabón la Llave',
        //         price: 2.00,
        //         itbis: 0.20,
        //         discount: 0.60
        //     },
        //     amount: 2
        // },
    ],
    bill: {
        payed: 0,
        change: 0,
        saved: 0,
        total: 0,
        paymentMethod: 'credito',
    }
};

function bill(state = {}, action) {
    switch (action.type) {
        case SET_PAYED:
            return Object.assign({}, state, {
                payed: action.payed,
                change: action.payed - state.total,
            });
        case SET_PAYMENT_METHOD:
            return Object.assign({}, state, {
                paymentMethod: action.paymentMethod,
            });
    }

    const discount = action.product.discount * action.amount;
    const price = (action.product.price + action.product.itbis) * action.amount - discount;
    switch (action.type) {
        case ADD_PRODUCT:
            return Object.assign({}, state, {
                saved: state.saved - discount,
                total: state.total + price
            });
        case REMOVE_PRODUCT:
            return Object.assign({}, state, {
                saved: state.saved + discount,
                total: state.total - price
            });
        default:
            return state;
    }
}

function addProduct(added, product, amount) {
    let i = added.findIndex(value => value.product.id === product.id);
    if (i === -1) {
        return added.concat({product: product, amount: amount});
    } else {
        let updated = added.slice();
        updated[i] = Object.assign({}, updated[i], {amount: updated[i].amount + amount});
        return updated;
    }
}

function purchase(state = initialState, action) {

    switch (action.type) {
        case ADD_PRODUCT:
            return Object.assign({}, state, {
                status: ENTER_PRODUCTS_STATUS,
                items: addProduct(state.items, action.product, action.amount),
                bill: bill(state.bill, action)
            });

        case REMOVE_PRODUCT:
            return Object.assign({}, state, {
                items: state.items.filter(value =>
                    value.product.id !== action.product.id && value.product.id !== `${action.product.id}discount`),
                bill: bill(state.bill, Object.assign(action, {
                    amount: state.items.find(value => value.product.id === action.product.id).amount
                }))
            });
        case BEGIN_PURCHASE:
            return Object.assign({}, state, {
                client: action.client,
                status: ENTER_PRODUCTS_STATUS,
            });
        case BEGIN_PAYMENT:
            return Object.assign({}, state, {
                status: ENTER_PAYMENT_STATUS,
            });
        case OPEN_ADD_PRODUCT_MODAL:
            return Object.assign({}, state, {
                status: MANUAL_PRODUCT_ENTER_STATUS
            });
        case CLOSE_MODAL:
            return Object.assign({}, state, {
                status: ENTER_PRODUCTS_STATUS
            });
        case SET_PAYED:
            return Object.assign({}, state, {
                bill: bill(state.bill, action)
            });
        case SET_PAYMENT_METHOD:
            return Object.assign({}, state, {
                bill: bill(state.bill, action)
            });
        case PRINT_INVOICE:
            return Object.assign({}, state, {
                status: PRINTING_STATUS,
            });
        default:
            return state;
    }
}

export default purchase;