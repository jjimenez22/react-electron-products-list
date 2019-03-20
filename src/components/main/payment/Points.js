import React from 'react';
import './points.css'

export default function Points(props) {
    const points = props.points;
    const titleClasses = "tit-item text-center text-black";
    const pointsClasses = "price-item text-black text-center";
    return (
        <div className="col-3 mt-2 m-100">
            <div className="p-2">
                <p className={titleClasses}>PUNTOS GENERADOS</p>
                <p className={pointsClasses}>{points.generated}</p>
            </div>
            <div className="p-2 p-top-0">
                <p className={titleClasses}>PUNTOS DISPONIBLES</p>
                <p className={pointsClasses}>{points.available}</p>
            </div>
            <div className="p-2 text-center card-container">
                <div className="cuadro"/>
            </div>
            <div className="column-buttons">
                <button onClick={props.onPay}>Pagar</button>
                <button onClick={props.onRemove}>Retirar producto</button>
                <button onClick={props.onCancel}>Anular factura</button>
            </div>
        </div>
    );
}