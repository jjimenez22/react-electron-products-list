import {connect} from 'react-redux';
import ClientModal from "./ClientModal";
import {beginPurchase} from "../../../actions";
import {ENTER_CLIENT_STATUS} from "../../../reducers/purchase";

function mapStateToProps(state) {
    return {
        show: state.purchase.status === ENTER_CLIENT_STATUS,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAccept: e => dispatch(beginPurchase({name: 'Randy Javier2'}))
    }
}

const ClientModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ClientModal);

export default ClientModalContainer