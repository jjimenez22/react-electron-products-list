const initialState = [
    {
        id: 0,
        description: 'Atún en Lata',
        price: 0.80,
        itbis: 0.08,
        discount: 0.0,
        existence: 10.00
    },
    {
        id: 1,
        description: 'Jabón la Llave',
        price: 2.00,
        itbis: 0.20,
        discount: 6.60,
        existence: 10.00
    },
    {
        id: 2,
        description: 'extra',
        price: 2.00,
        itbis: 0.20,
        discount: 0.20,
        existence: 10.00
    },
];

export default function products(state = initialState, action) {
    return state;
}