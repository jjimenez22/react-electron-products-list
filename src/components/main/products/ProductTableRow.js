import React from 'react';
import format from "../../../util/numberFormat";

export default function ProductTableRow(props) {
    const {product, amount} = props.item;
    return (
        <tr className={props.isDiscount && 'text-discount bold'}>
            <td>{!props.isDiscount && format(amount)}</td>
            <td>{props.isDiscount ? 'Descuento' : product.description}</td>
            <td>{!props.isDiscount && format(product.price)}</td>
            <td>{!props.isDiscount && format(product.itbis)}</td>
            <td>{format(
                props.isDiscount ?
                    -product.discount * amount :
                    (product.price + product.itbis - product.discount) * amount
            )}</td>
        </tr>
    );
}