import Points from "./Points";
import {connect} from "react-redux";
import {beginPayment, removeProduct} from "../../../actions";

const mapStateToProps = (state) => {
    return {
        points: state.purchase.points,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onPay: (e) => {
            dispatch(beginPayment())
        },
        onRemove: (e) => {
            dispatch(removeProduct(2))
        },
        onCancel: (e) => {
        }
    }
}

const PointsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Points);

export default PointsContainer;