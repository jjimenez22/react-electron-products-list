import React from 'react';
import ActionBar from "./ActionBar";
import {connect} from "react-redux";
import {addProduct} from "../../../actions";

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: (id) => {
            dispatch(addProduct(2, 2))
        }
    };
}

const ActionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionBar);

export default ActionsContainer;