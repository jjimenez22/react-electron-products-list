import React from 'react';
import './client.css'

export default function Client(props) {
    return (
        <div className="col-6 padding-top-and-right-1">
            <p className="text-right header-text m-0">{props.client.name}</p>
            <p className="text-right header-text">Gracias por su compra</p>
        </div>
    );
}

