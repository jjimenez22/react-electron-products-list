import React, {Fragment} from 'react';
import format from "../../../util/numberFormat";

export default function ProductTableRow(props) {
    const {product, amount} = props.item;
    return (
        <Fragment>
            <tr>
                <td>{format(amount)}</td>
                <td>{product.description}</td>
                <td>{format(product.price)}</td>
                <td>{format(product.itbis)}</td>
                <td>{format((product.price + product.itbis - product.discount) * amount)}</td>
            </tr>
            {(Number(product.discount) !== 0) && (
                <tr className="text-discount bold">
                    <td></td>
                    <td>Descuento</td>
                    <td></td>
                    <td></td>
                    <td>{format(-product.discount * amount)}</td>
                </tr>
            )}
        </Fragment>
    );
}