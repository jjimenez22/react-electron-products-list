import {connect} from 'react-redux';
import PaymentModal from "./PaymentModal";
import {ENTER_PAYMENT_STATUS} from "../../../reducers/purchase";
import {printInvoice} from "../../../actions";

function mapStateToProps(state) {
    return {
        show: state.purchase.status === ENTER_PAYMENT_STATUS,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onPay: e => dispatch(printInvoice()),
    };
}

const PaymentModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PaymentModal);

export default PaymentModalContainer;