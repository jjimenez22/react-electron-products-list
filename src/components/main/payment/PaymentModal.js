import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './payment.css';
import format from "../../../util/numberFormat";

const PaymentModal = () => {
    const paymentMethods = ['credito', 'debito', 'efectivo']
        .map(value => <option key={value}>{value}</option>);
    return (
        <Modal show={true} id="payment-modal">
            <Modal.Header>
                <Form.Label>Total a pagar: {format(14000)}</Form.Label>
                <Form.Label>Cambio: {format(0.46)}</Form.Label>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Metodo de pago</Form.Label>
                        <Form.Control as="select">
                            {paymentMethods}
                        </Form.Control>
                        <Form.Label>Monto pagado</Form.Label>
                        <Form.Control type="number" step="0.01"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">Pagar</Button>
                <Button variant="secondary">Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PaymentModal;