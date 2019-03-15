import React from 'react';
import logo from '../../logo.png';
import './logo.css';

export default function Logo(props) {
    return (
        <div className="col-6 m-100">
            <img src={logo} alt="logo" className="logo"/>
        </div>
    );
}