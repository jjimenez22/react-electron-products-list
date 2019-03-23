import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import './App.css';
import MainComponent from "./main/MainComponent";
import HeaderComponent from "./header/HeaderComponent";
import FooterComponent from "./footer/FooterComponent";
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div id="main-wrapper">
                <HeaderComponent/>
                <BrowserRouter>
                    <Route path="/" component={MainComponent}/>
                </BrowserRouter>
                <FooterComponent/>
            </div>
        );
    }
}

export default App;
