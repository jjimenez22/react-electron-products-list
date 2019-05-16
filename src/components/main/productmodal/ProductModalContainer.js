import {connect} from 'react-redux';
import AddProductModal from "./AddProductModal";
import {MANUAL_PRODUCT_ENTER_STATUS} from "../../../reducers/purchase";
import {addProduct, hideModal} from "../../../actions";

let id;

function mapStateToProps(state) {
    return {
        show: state.purchase.status === MANUAL_PRODUCT_ENTER_STATUS,
        onIdChange: e => id = e.target.value,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAccept: e => {
            if (id && id.length > 0) {
                dispatch(addProduct(id, 1));
            }
            e.preventDefault();
        },
        onCancel: _ => dispatch(hideModal()),
    }
}

const ProductModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddProductModal);

export default ProductModalContainer