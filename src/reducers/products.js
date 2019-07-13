const initialState = [
    {
        id: '0',
        description: 'Atún en Lata',
        price: 0.80,
        itbis: 0.08,
        discount: 0.0,
        existence: 10.00
    },
    {
        id: '1',
        description: 'Jabón la Llave',
        price: 2.00,
        itbis: 0.20,
        discount: 0.60,
        existence: 10.00
    },
    {
        id: '2',
        description: 'Harina de trigo',
        price: 1.00,
        itbis: 0.10,
        discount: 0.20,
        existence: 10.00
    },
    {
        id: '3',
        description: 'Salsa para pasta',
        price: 1.50,
        itbis: 0.15,
        discount: 0,
        existence: 10.00
    },
    {
        id: '4',
        description: 'Galletas Oreo',
        price: 3.00,
        itbis: 0.30,
        discount: 0,
        existence: 10.00
    },
];

export default function products(state = initialState, action) {
    return state;
}