import './main.css';
import React from 'react';
import ProductTableContainer from "./products/ProductTableContainer";
import PointsContainer from "./points/PointsContainer";
import Banner from "./banner/Banner";
import PaymentModalContainer from "./payment/PaymentModalContainer";
import ClientModalContainer from "./client/ClientModalContainer";

export default function MainComponent() {
    return (
        <main className="height-main">
            <ClientModalContainer/>
            <div className="row m-100 px-3">
                <ProductTableContainer/>
                <PointsContainer/>
                <Banner/>
            </div>
            <PaymentModalContainer/>
        </main>
    );
}