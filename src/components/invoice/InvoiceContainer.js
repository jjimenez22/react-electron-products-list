import React from 'react';
import {connect} from 'react-redux';
import Invoice from "./Invoice";

function mapStateToProps(state) {
    return {};
}

const InvoiceContainer = connect(
    mapStateToProps,
)(Invoice);

export default InvoiceContainer;