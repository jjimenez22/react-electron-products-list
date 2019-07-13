import {connect} from 'react-redux';
import MaintainanceTable from "../commons/MaintainanceTable";
import React from "react";
import InvoiceRow from "./InvoiceRow";

function mapStateToProps(state) {
    return {
        columns: [
            'Fecha',
            'Total',
            'Cambio'
        ],
        items: state.invoices,
        mapItemToRow: item => <InvoiceRow invoice={item} key={item.id}/>,
    };
}

function mapDispatchToProps(dispatch) {
    return {}
}

const InvoicesContainer = connect(
    mapStateToProps,
)(MaintainanceTable);

export default InvoicesContainer