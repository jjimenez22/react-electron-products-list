import {connect} from 'react-redux';
import MaintainanceTable from "../commons/MaintainanceTable";
import React from "react";
import UserRow from "./UserRow";

function mapStateToProps(state) {
    return {
        columns: [
            'Usuario',
            'Nombre',
            'Es administrador'
        ],
        items: state.users,
        mapItemToRow: item => <UserRow user={item} key={item.id}/>,
    };
}

function mapDispatchToProps(dispatch) {
    return {}
}

const UsersContainer = connect(
    mapStateToProps,
)(MaintainanceTable);

export default UsersContainer