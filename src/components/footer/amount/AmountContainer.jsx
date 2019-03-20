import BillSection from "./BillSection";
import {connect} from "react-redux";
import format from "../../../util/numberFormat";

function mapStateToProps(state) {
    return {
        bill: {
            payed: format(state.purchase.bill.payed),
            change: format(state.purchase.bill.change),
            saved: format(state.purchase.bill.saved),
            total: format(state.purchase.bill.total)
        }
    }
}

const AmountContainer = connect(mapStateToProps)(BillSection);

export default AmountContainer;