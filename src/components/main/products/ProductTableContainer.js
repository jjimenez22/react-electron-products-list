import ProductTable from "./ProductTable";
import './products.css';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        items: state.purchase.items
    };
};

const ProductTableContainer = connect(mapStateToProps)(ProductTable);

export default ProductTableContainer;
