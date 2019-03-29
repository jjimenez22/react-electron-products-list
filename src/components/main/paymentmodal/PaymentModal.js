import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import format from "../../../util/numberFormat";
import {ButtonGroup} from "react-bootstrap";

const PaymentModal = (props) => {
    const paymentMethods = ['credito', 'debito', 'efectivo']
        .map(value => <option key={value}>{value}</option>);
    const onPay = e => {
        props.onPay(e);
        props.history.push({pathname: "/invoice"});
    };
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
                <ButtonGroup size="lg">
                    <Button onClick={onPay} variant="primary">Pagar</Button>
                    <Button variant="secondary" onClick={props.onCancel}>Cancelar</Button>
                </ButtonGroup>
            </Modal.Footer>
        </Modal>
    );
};

export default PaymentModal;