import React from 'react';
import './banner.css'

export default function Banner(props) {
    return (
        <div className="col-2 mt-2 column-offer d-flex justify-content-center flex-column">
            <h3>Precios Increiblemente Bajos</h3>
            <div className="box-offer pt-0">
                <p className="box-offer-flat">Plano</p>
                <p className="text-discount-percent bold text-center">70%</p>
                <p className="text-discount bold text-center">DESCUENTO</p>
            </div>
        </div>
    );
}