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
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAccept: e => {
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