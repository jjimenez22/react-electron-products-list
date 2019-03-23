import './main.css';
import React from 'react';
import ProductTableContainer from "./products/ProductTableContainer";
import PointsContainer from "./points/PointsContainer";
import Banner from "./banner/Banner";
import PaymentModal from "./payment/PaymentModal";

export default function MainComponent() {
    return (
        <main className="height-main">
            <div className="row m-100 px-3">
                <ProductTableContainer/>
                <PointsContainer/>
                <Banner/>
            </div>
            <PaymentModal/>
        </main>
    );
}