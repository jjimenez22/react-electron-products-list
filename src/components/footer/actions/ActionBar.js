import React from 'react';
import './actions.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ActionBar = (props) => {
    return (
        <div className="col-7 column-menu">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="navbar-collapse justify-content-end">
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={props.onAdd}>
                                <FontAwesomeIcon icon="cart-plus" className="fas d-block"/>
                                Agregar
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon="cash-register" className="fas d-block"/>
                                Canjear
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon="file-contract" className="fas d-block"/>
                                Facturas
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon="users" className="fas d-block"/>
                                Clientes
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon="shopping-cart" className="fas d-block"/>
                                Productos
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon="hand-holding-usd" className="fas d-block"/>
                                Presupuesto
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon="id-badge" className="fas d-block"/>
                                Usuarios
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon="window-close" className="fas d-block"/>
                                Cerrar
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default ActionBar;