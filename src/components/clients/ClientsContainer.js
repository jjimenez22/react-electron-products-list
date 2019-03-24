import {connect} from 'react-redux';
import MaintainanceTable from "../commons/MaintainanceTable";
import React from "react";
import ClientRow from "./ClientRow";

function mapStateToProps(state) {
    return {
        columns: [
            'Nombre',
            'Identificacion',
            'Crédito'
        ],
        items: state.clients,
        mapItemToRow: item => <ClientRow client={item} key={item.id}/>,
    };
}

function mapDispatchToProps(dispatch) {
    return {}
}

const ClientsContainer = connect(
    mapStateToProps,
)(MaintainanceTable);

export default ClientsContainer