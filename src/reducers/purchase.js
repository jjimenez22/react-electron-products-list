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
            total: '1.76',
            discount: 0
        },
        {
            id: 1,
            quantity: '3.00',
            description: 'Jabón la Llave',
            price: '2.00',
            itbis: '0.20',
            total: '6.60',
            discount: 6.6
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
                saved: state.saved - numeral(action.product.discount).value(),
                total: state.total + numeral(action.product.total).value()
            });
        case REMOVE_PRODUCT:
            return Object.assign({}, state, {
                saved: state.saved + numeral(action.product.discount).value(),
                total: state.total - numeral(action.product.total).value()
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
        total: format((product.price + product.itbis - product.discount) * amount),
        discount: product.discount
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
    let i = added.findIndex(value => value.id === product.id);
    if (i === -1) {
        return added.concat(formatProduct(product, amount));
    } else {
        let updated = added.slice();
        let newAmount = numeral(updated[i].quantity).add(amount).value();
        const formatted = formatProduct(product, newAmount);
        updated[i] = formatted[0];
        if (formatted[1])
            updated[i + 1] = formatted[1];
        return updated;
    }
}

function purchase(state = initialState, action) {

    switch (action.type) {
        case ADD_PRODUCT:
            const products = addProduct(state.products, action.product, action.amount);
            return Object.assign({}, state, {
                products: products,
                bill: bill(state.bill, {
                    type: action.type,
                    product: products.find(value => value.id === action.product.id)
                })
            });

        case REMOVE_PRODUCT:
            return Object.assign({}, state, {
                products: state.products.filter(value => value.id !== action.product.id),
                bill: bill(state.bill, {
                    type: action.type,
                    product: state.products.find(value => value.id === action.product.id)
                })
            });
        default:
            return state;
    }
}

export default purchase;