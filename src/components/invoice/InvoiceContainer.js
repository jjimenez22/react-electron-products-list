import {connect} from 'react-redux';
import Invoice from "./Invoice";

function mapStateToProps(state) {
    return {
        items: state.purchase.items,
        bill: state.purchase.bill,
    };
}

const InvoiceContainer = connect(
    mapStateToProps,
)(Invoice);

export default InvoiceContainer;