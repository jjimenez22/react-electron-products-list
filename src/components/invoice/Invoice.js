import React from 'react';
import Table from "react-bootstrap/Table";
import './invoice.css'
import format from "../../util/numberFormat";

const Invoice = props => {
    const rows = props.items.map(p => (
        <tr key={p.product.id}>
            <td>{p.product.description}</td>
            <td>{format(p.product.itbis)}</td>
            <td>{format(p.product.price)}</td>
        </tr>
    ));
    return (
        <div id="invoice">
            <p className="text-center font-weight-bold">NOMBRE COMERCIAL</p>
            <p className="text-center">DIRECCION Y TELEFONO</p>
            <p>Direccion general de Impuestos Internos</p>
            <p>RNC 041525640</p>
            <div id="res-dgi">
                <p className="text-left">RES DGII: 02-2009</p>
                <p className="text-right">DEL 02/02/2009</p>
            </div>
            <p id="auth-dgi" className="text-center font-weight-bold">AUTORIZADO POR DGI</p>
            <p>02/03/2008 17:05:15</p>
            <p>NIF: 123456000000004</p>
            <p>NCF: B020000000002000000000</p>
            <p id="enduser-invoice" className="text-center font-weight-bold">FACTURA PARA CONSUMIDOR FINAL</p>
            <Table>
                <thead>
                <tr>
                    <th>DESCRIPCION</th>
                    <th>ITBIS</th>
                    <th>VALOR</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                <tr className="font-weight-bold" id="first-total">
                    <td>TOTAL A PAGAR</td>
                    <td>{format(props.bill.itbis)}</td>
                    <td>{format(props.bill.total)}</td>
                </tr>
                <tr className="font-weight-bold">
                    <td>{props.bill.paymentMethod.toUpperCase()}</td>
                    <td/>
                    <td>{format(props.bill.payed)}</td>
                </tr>
                <tr className="font-weight-bold">
                    <td>CAMBIO</td>
                    <td/>
                    <td>{format(props.bill.change)}</td>
                </tr>
                </tbody>
            </Table>
            <p id="thanks">Gracias por su compra, vuelva pronto</p>
            <p>NIF: 123456000000004</p>
            <p>TRANSACCION NRO.: 999999999 <span className="text-right">Version</span></p>
            <p>123456</p>
        </div>
    );
};

Invoice.propTypes = {};

export default Invoice;