import './main.css';
import React from 'react';
import ProductTableContainer from "./products/ProductTableContainer";
import PointsContainer from "./points/PointsContainer";
import Banner from "./banner/Banner";
import PaymentModalContainer from "./paymentmodal/PaymentModalContainer";
import ClientModalContainer from "./clientmodal/ClientModalContainer";
import ProductModalContainer from "./productmodal/ProductModalContainer";

export default function MainComponent(props) {
    return (
        <main className="height-main">
            <ClientModalContainer/>
            <div className="row m-100 px-3">
                <ProductTableContainer/>
                <PointsContainer/>
                <Banner/>
            </div>
            <ProductModalContainer/>
            <PaymentModalContainer history={props.history}/>
        </main>
    );
}