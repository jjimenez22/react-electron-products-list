import React from 'react';
import './amount.css';

const BillSection = (props) => {
    const bill = props.bill;
    return (
        <div id="bs" className="col-5 text-center">
            <div className="row half-height m-0">
                <div className="col-6 line">
                    <p className="tit-item text-black">CAMBIO</p>
                    <p className="price-item text-black">{bill.change}</p>
                </div>
                <div className="col-6">
                    <p className="tit-item text-black">TOTAL PAGADO</p>
                    <p className="price-item text-black">{bill.payed}</p>
                </div>
            </div>

            <div className="row half-height m-0">
                <div className="col-6">
                    <p className="tit-item text-black">AHORRO TOTAL</p>
                    <p className="price-item text-black text-discount">{bill.saved}</p>
                </div>
                <div className="col-6 rounded highlighted">
                    <p className="tit-item bold">TOTAL COMPRA</p>
                    <p className="price-item">{bill.total}</p>
                </div>
            </div>
        </div>
    );
};

export default BillSection;