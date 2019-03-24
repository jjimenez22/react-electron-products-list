import React from 'react';
import PropTypes from 'prop-types';
import format from "../../util/numberFormat";

const ClientRow = props => {
    return (
        <tr>
            <td>{props.client.name}</td>
            <td>{props.client.identification}</td>
            <td>{format(props.client.credit)}</td>
        </tr>
    );
};

ClientRow.propTypes = {
    client: PropTypes.object.isRequired,
};

export default ClientRow;