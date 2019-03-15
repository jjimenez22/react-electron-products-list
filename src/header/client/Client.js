import React from 'react';
import './clientStyles.css';

export default function Client(props) {
    return (
        <div className="col-6 padding-top-and-right-1">
            <p className="text-right header-text m-0">{props.clientName}</p>
            <p className="text-right header-text">Gracias por su compra</p>
        </div>
    );
}