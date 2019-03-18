const initialState = [
    {
        id: 0,
        description: 'Atún en Lata',
        price: 0.80,
        itbis: 0.08,
        discount: 0.0
    },
    {
        id: 1,
        description: 'Jabón la Llave',
        price: 2.00,
        itbis: 0.20,
        discount: 6.60
    },
    {
        id: 2,
        description: 'extra',
        price: 2.00,
        itbis: 0.20,
        discount: 0.20
    },
];

export default function products(state = initialState, action) {
    return state;
}