import {connect} from 'react-redux';
import ClientModal from "./ClientModal";
import {beginPurchase} from "../../../actions";
import {ENTER_CLIENT_STATUS} from "../../../reducers/purchase";

let client = {
    name: '',
};

function mapStateToProps(state) {
    return {
        show: state.purchase.status === ENTER_CLIENT_STATUS,
        onNameChange: e => Object.assign(client, {name: e.target.value}),//todo cuando este completo el form intentar hacer un unico metodo de actualizacion
        onLastNameChange: e => Object.assign(client, {lastName: e.target.value}),
        onIdChange: e => Object.assign(client, {id: e.target.value}),
        onFiscalChange: e => Object.assign(client, {fiscal: e.target.value}),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAccept: e => {
            if (client.name.length > 0)
                dispatch(beginPurchase(client));
            e.preventDefault();
        },
    }
}

const ClientModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ClientModal);

export default ClientModalContainer