import React from 'react';
import ProductTableRow from "./ProductTableRow";

export default function ProductTable(props) {
    const products = props.products.map((product) =>
        (<ProductTableRow key={product.id} product={product}/>));
    return (
        <div className="col-7 m-100 table-container  p-0">
            <div className="row table-responsive pt-2 m-100 mx-0 px-2">
                <table className="table border border-primary mb-0">
                    <colgroup>
                        <col/>
                        <col/>
                        <col/>
                        <col/>
                        <col/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th>Cant.</th>
                        <th>Descripción</th>
                        <th>Unidad</th>
                        <th>ITBIS</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products}
                    </tbody>
                </table>
            </div>
        </div>
    );
}