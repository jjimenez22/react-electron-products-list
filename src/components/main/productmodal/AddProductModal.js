import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup, Form, Modal} from "react-bootstrap";

const AddProductModal = props => {
    return (
        <Modal show={props.show}>
            <Modal.Header>
                <Form.Label>Código de producto</Form.Label>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={props.onAccept}>
                    <Form.Control type="text" onChange={props.onIdChange}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <ButtonGroup size="lg">
                    <Button onClick={props.onAccept} variant="primary">Aceptar</Button>
                    <Button onClick={props.onCancel} variant="secondary">Cancelar</Button>
                </ButtonGroup>
            </Modal.Footer>
        </Modal>
    );
};

AddProductModal.propTypes = {
    show: PropTypes.bool,
    onIdChange: PropTypes.func.isRequired,
    onAccept: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

AddProductModal.defaultProps = {
    show: false,
};

export default AddProductModal;