import React from 'react';
import PropTypes from 'prop-types';
import format from "../../util/numberFormat";

const ProductRow = props => {
    return (
        <tr>
            <td>{props.product.id}</td>
            <td>{props.product.description}</td>
            <td>{format(props.product.price)}</td>
            <td>{format(props.product.itbis)}</td>
            <td>{format(props.product.discount)}</td>
            <td>{format(props.product.existence)}</td>
        </tr>
    );
};

ProductRow.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductRow;