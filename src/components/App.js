import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import MainComponent from "./main/MainComponent";
import HeaderComponent from "./header/HeaderComponent";
import FooterComponent from "./footer/FooterComponent";
import {Route} from "react-router-dom";
import RedirectRoute from "./commons/RedirectRoute";
import InvoicesContainer from "./invoices/InvoicesContainer";
import ProductsContainer from "./products/ProductsContainer";
import ClientsContainer from "./clients/ClientsContainer";
import UsersContainer from "./users/UsersContainer";

function App() {
    return (
        <div id="main-wrapper">
            <RedirectRoute path="/main" to="/main/purchase"/>
            <Route path="/main" component={HeaderComponent}/>
            <Route path="/main/purchase" component={MainComponent}/>
            <Route path="/main/invoices" component={InvoicesContainer}/>
            <Route path="/main/products" component={ProductsContainer}/>
            <Route path="/main/clients" component={ClientsContainer}/>
            <Route path="/main/users" component={UsersContainer}/>
            <Route path="/main" component={FooterComponent}/>
        </div>
    );
}

export default App;
