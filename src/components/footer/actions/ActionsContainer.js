import ActionBar from "./ActionBar";
import {connect} from "react-redux";
import {showAddProductModal} from "../../../actions";

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: e => {
            dispatch(showAddProductModal());
            // e.preventDefault();
        }
    };
}

const ActionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionBar);

export default ActionsContainer;