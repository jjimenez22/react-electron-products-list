import React from 'react';
import ProductTable from "./ProductTable";
import './productsStyles.css';

export default function ProductTableContainer(props) {
    const products = [
        {
            id: 0,
            quantity: 2.00,
            description: 'Atún en Lata',
            price: 0.80,
            itbis: 0.08,
            total: 1.76
        },
        {
            id: 1,
            quantity: 3.00,
            description: 'Jabón la Llave',
            price: 2.00,
            itbis: 0.20,
            total: 6.60
        },
        {
            id: 2,
            // quantity: 3.00,
            description: 'Descuento',
            // price: 2.00,
            // itbis: 0.20,
            total: -6.60
        },
    ];
    return (
        <ProductTable products={products}/>
    );
}