import React from 'react';

export default function ProductTableRow(props) {
    const product = props.product;
    return (
        <tr className={product.description==='Descuento' && 'text-discount bold'}>
            <td>{product.quantity}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.itbis}</td>
            <td>{product.total}</td>
        </tr>
    );
}