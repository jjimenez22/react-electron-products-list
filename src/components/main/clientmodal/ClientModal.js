import React from 'react';
import PropTypes from 'prop-types';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ClientModal = props => {
    return (
        <Modal show={props.show} id="client-modal">
            <Modal.Header>
                <Form.Label>Cliente</Form.Label>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={props.onAccept}>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" onChange={props.onNameChange}/>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" onChange={props.onLastNameChange}/>
                        <Form.Label>Identidad</Form.Label>
                        <Form.Control type="text" onChange={props.onIdChange}/>
                        <input type="checkbox" onChange={props.onFiscalChange}/><Form.Label>Valor Fiscal</Form.Label>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onAccept} variant="primary" block size="lg">Aceptar</Button>
            </Modal.Footer>
        </Modal>
    );
};

ClientModal.propTypes = {
    show: PropTypes.bool,
    onNameChange: PropTypes.func.isRequired,
    onAccept: PropTypes.func.isRequired,
};

ClientModal.defaultProps = {
    show: true,
};

export default ClientModal;