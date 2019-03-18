const initialState = [
    {
        id: 0,
        quantity: 2.00,
        description: 'Atún en Lata',
        price: 0.80,
        itbis: 0.08,
        total: 1.76,
        discount: 0.0
    },
    {
        id: 1,
        quantity: 3.00,
        description: 'Jabón la Llave',
        price: 2.00,
        itbis: 0.20,
        total: 6.60,
        discount: 6.60
    },
];

export default function products(state = initialState, action) {
    return state;
}