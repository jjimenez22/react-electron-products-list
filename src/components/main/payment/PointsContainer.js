import Points from "./Points";
import {connect} from "react-redux";
import {removeProduct} from "../../../actions";

const mapStateToProps = (state) => {
    return {
        points: state.purchase.points,
    };
};

function mapPurchaseToProps(dispatch) {
    return {
        onPay: (e) => {
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
    mapPurchaseToProps
)(Points);

export default PointsContainer;