import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faCartPlus,
    faCashRegister,
    faFileContract,
    faHandHoldingUsd,
    faIdBadge,
    faShoppingCart,
    faUsers,
    faWindowClose
} from '@fortawesome/free-solid-svg-icons'
import {Provider} from "react-redux";
import Store from "./reducers/store";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Route from "react-router-dom/es/Route";
import {Switch} from "react-router-dom";
import InvoiceContainer from "./components/invoice/InvoiceContainer";
import RedirectRoute from "./components/commons/RedirectRoute";
import ProductsContainer from "./components/products/ProductsContainer";
import InvoicesContainer from "./components/invoices/InvoicesContainer";
import ClientsContainer from "./components/clients/ClientsContainer";
import UsersContainer from "./components/users/UsersContainer";

//add icons to be used
library.add(faCashRegister, faFileContract, faUsers, faShoppingCart, faHandHoldingUsd, faIdBadge, faWindowClose, faCartPlus);

//render react app
ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Switch>
                <Route path="/main" component={App}/>
                <Route path="/invoices" component={InvoicesContainer}/>
                <Route path="/invoice" component={InvoiceContainer}/>
                <Route path="/products" component={ProductsContainer}/>
                <Route path="/clients" component={ClientsContainer}/>
                <Route path="/users" component={UsersContainer}/>
                <RedirectRoute path="/" to="/invoices"/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
