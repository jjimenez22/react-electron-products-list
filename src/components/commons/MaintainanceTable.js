import React from 'react';
import PropTypes from 'prop-types';
import Table from "react-bootstrap/Table";

const MaintainanceTable = props => {
    const colgroup = props.columns.map(_ => <col/>);
    const header = props.columns.map(value => <th>{value}</th>);
    const rows = props.items.map(props.mapItemToRow);
    return (
        <Table>
            <colgroup>{colgroup}</colgroup>
            <thead>
            <tr>{header}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
};

MaintainanceTable.propTypes = {
    columns: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    mapItemToRow: PropTypes.func.isRequired,
};

export default MaintainanceTable;