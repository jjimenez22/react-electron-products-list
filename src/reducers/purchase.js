import {ADD_PRODUCT, REMOVE_PRODUCT} from "../actions/index";
import format from "../util/numberFormat";
import * as numeral from "numeral";

const initialState = {
    clientName: 'Randy Javier',
    points: {
        generated: 14,
        available: 156
    },
    products: [
        {
            id: 0,
            quantity: '2.00',
            description: 'Atún en Lata',
            price: '0.80',
            itbis: '0.08',
            total: '1.76'
        },
        {
            id: 1,
            quantity: '3.00',
            description: 'Jabón la Llave',
            price: '2.00',
            itbis: '0.20',
            total: '6.60'
        },
        {
            id: '1discount',
            description: 'Descuento',
            total: '-6.60'
        },
    ],
    bill: {
        payed: 14114.54,
        change: 0.46,
        saved: -4.80,
        total: 14114.54
    }
};

function bill(state = {}, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return Object.assign({}, state, {
                saved: state.saved - action.product.discount,
                total: state.total + action.product.price - action.product.discount
            });
        case REMOVE_PRODUCT:
            return Object.assign({}, state, {
                saved: state.saved + action.product.discount,
                total: state.total - action.product.price + action.product.discount
            });
        default:
            return state;
    }
}

function formatProduct(product, amount) {
    const formatted = [{
        id: product.id,//todo logica del id
        quantity: format(amount),
        description: product.description,
        price: format(product.price),
        itbis: format(product.itbis),
        total: format(product.total),
    }];
    if (product.discount && product.discount != 0)
        formatted.push({
            id: `${product.id}discount`,
            description: 'Descuento',
            total: format(-product.discount * amount)
        });
    return formatted;
}

function addProduct(added, product, amount) {
    let i = added.indexOf(product);
    if (i === -1) {
        return [...added, ...formatProduct(product, amount)];
    } else {
        let updated = added.slice();
        let newAmount = numeral(updated[i].quantity).add(amount).value();
        updated[i] = formatProduct(product, newAmount);
        return updated;
    }
}

function purchase(state = initialState, action) {

    switch (action.type) {
        case ADD_PRODUCT:
            return Object.assign({}, state, {
                products: addProduct(state.products, action.product, action.amount),
                bill: bill(state.bill, action)
            });
        case REMOVE_PRODUCT:
            return Object.assign({}, state, {
                products: state.products.filter(value => value !== action.product),//todo evaluar comparacion de productos
                bill: bill(state.bill, action)
            });
        default:
            return state;
    }
}

export default purchase;