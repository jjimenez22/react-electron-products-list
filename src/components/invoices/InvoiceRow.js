import React from 'react';
import PropTypes from 'prop-types';
import format from "../../util/numberFormat";

const InvoiceRow = props => {
    return (
        <tr>
            <td>{props.invoice.date}</td>
            <td>{format(props.invoice.total)}</td>
            <td>{format(props.invoice.change)}</td>
        </tr>
    );
};

InvoiceRow.propTypes = {
    invoice: PropTypes.object.isRequired,
};

export default InvoiceRow;