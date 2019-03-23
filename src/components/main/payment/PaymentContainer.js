import {connect} from 'react-redux';
import PaymentModal from "./PaymentModal";

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return dispatch();
}

const PaymentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PaymentModal);

export default PaymentContainer;