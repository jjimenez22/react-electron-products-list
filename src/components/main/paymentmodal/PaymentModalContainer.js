import {connect} from 'react-redux';
import PaymentModal from "./PaymentModal";
import {ENTER_PAYMENT_STATUS} from "../../../reducers/purchase";
import {hideModal, printInvoice, setPayed, setPaymentMethod} from "../../../actions";

function mapStateToProps(state, ownProps) {
    return {
        show: state.purchase.status === ENTER_PAYMENT_STATUS,
        bill: state.purchase.bill,
        history: ownProps.history,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onPayedChange: e => dispatch(setPayed(Number(e.target.value))),
        onMethodChange: e => dispatch(setPaymentMethod(e.target.value)),
        onPay: e => dispatch(printInvoice()),
        onCancel: e => dispatch(hideModal()),
    };
}

const PaymentModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PaymentModal);

export default PaymentModalContainer;