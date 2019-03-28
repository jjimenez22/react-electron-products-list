import React from 'react';
import Table from "react-bootstrap/Table";
import './invoice.css'

const Invoice = props => {
    const rows = props.items.map(p => (
        <tr key={p.product.id}>
            <td>{p.product.description}</td>
            <td>{p.product.itbis}</td>
            <td>{p.product.total}</td>
        </tr>
    ));
    return (
        <div id="invoice">
            <p className="text-center font-weight-bold">NOMBRE COMERCIAL</p>
            <p className="text-center">DIRECCION Y TELEFONO</p>
            <p>Direccion general de Impuestos Internos</p>
            <p>RNC 041525640</p>
            <p>RES DGII: 02-2009 <span className="text-right">DEL 02/02/2009</span></p>
            <p className="text-center font-weight-bold">AUTORIZADO POR DGI</p>
            <p>02/03/2008 17:05:15</p>
            <p>NIF: 123456000000004</p>
            <p>NCF: B020000000002000000000</p>
            <p className="text-center font-weight-bold">FACTURA PARA CONSUMIDOR FINAL</p>
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
                <tr>
                    <td>{props.bill.paymentMethod}</td>
                    <td/>
                    <td>{props.bill.payed}</td>
                </tr>
                <tr>
                    <td>CAMBIO</td>
                    <td/>
                    <td>{props.bill.change}</td>
                </tr>
                </tbody>
            </Table>
            <p>Gracias por su compra, vuelva pronto</p>
            <p>NIF: 123456000000004</p>
            <p>TRANSACCION NRO.: 999999999 <span className="text-right">Version</span></p>
            <p>123456</p>
        </div>
    );
};

Invoice.propTypes = {};

export default Invoice;