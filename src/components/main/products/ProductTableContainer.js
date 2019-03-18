import React from 'react';
import ProductTable from "./ProductTable";
import './products.css';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        products: state.purchase.products
    };
};

const ProductTableContainer = connect(mapStateToProps)(ProductTable);

export default ProductTableContainer;
