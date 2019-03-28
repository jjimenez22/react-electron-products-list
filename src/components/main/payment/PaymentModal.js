import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './payment.css';
import format from "../../../util/numberFormat";
import Link from "react-router-dom/es/Link";

const PaymentModal = (props) => {
    const paymentMethods = ['credito', 'debito', 'efectivo']
        .map(value => <option key={value}>{value}</option>);
    return (
        <Modal show={props.show} id="payment-modal">
            <Modal.Header>
                <Form.Label>Total a pagar: {format(props.bill.total)}</Form.Label>
                <Form.Label>Cambio: {format(props.bill.change)}</Form.Label>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Metodo de pago</Form.Label>
                        <Form.Control as="select" onChange={props.onMethodChange}>
                            {paymentMethods}
                        </Form.Control>
                        <Form.Label>Monto pagado</Form.Label>
                        <Form.Control type="number" step="0.01"
                                      onChange={props.onPayedChange}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/invoice">
                    <Button onClick={props.onPay} variant="primary">Pagar</Button>
                </Link>
                <Button variant="secondary"
                        onClick={props.onCancel}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PaymentModal;