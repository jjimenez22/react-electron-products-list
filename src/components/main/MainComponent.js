import './main.css';
import React from 'react';
import ProductTableContainer from "./products/ProductTableContainer";
import PointsContainer from "./payment/PointsContainer";
import Banner from "./banner/Banner";

export default function MainComponent(props) {
    return (
        <main className="height-main">
            <div className="row m-100 px-3">
                <ProductTableContainer/>
                <PointsContainer/>
                <Banner/>
            </div>
        </main>
    )
}