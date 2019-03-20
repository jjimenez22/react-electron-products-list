import {ADD_PRODUCT, REMOVE_PRODUCT} from "../actions/index";

const initialState = {
    clientName: 'Randy Javier',
    points: {
        generated: 14,
        available: 156
    },
    items: [
        {
            product: {
                id: 0,
                description: 'Atún en Lata',
                price: 0.80,
                itbis: 0.08,
                discount: 0.0
            },
            amount: 1
        },
        {
            product: {
                id: 1,
                description: 'Jabón la Llave',
                price: 2.00,
                itbis: 0.20,
                discount: 0.60
            },
            amount: 2
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
        default:
            return state;
    }
}

export default purchase;