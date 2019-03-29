import {connect} from 'react-redux';
import MaintainanceTable from "../commons/MaintainanceTable";
import React from "react";
import ProductRow from "./ProductRow";

function mapStateToProps(state) {
    return {
        columns: [
            'Código',
            'Descripción',
            'Precio',
            'ITBIS',
            'Descuento',
            'Existencia'
        ],
        items: state.products,
        mapItemToRow: item => <ProductRow product={item} key={item.id}/>,
    };
}

function mapDispatchToProps(dispatch) {
    return {}
}

const ProductsContainer = connect(
    mapStateToProps,
)(MaintainanceTable);

export default ProductsContainer