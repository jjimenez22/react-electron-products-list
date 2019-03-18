import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import './App.css';
import MainComponent from "./main/MainComponent";
import HeaderComponent from "./header/HeaderComponent";
import FooterComponent from "./footer/FooterComponent";

class App extends Component {
    render() {
        return (
            <div id="main-wrapper">
                <HeaderComponent/>
                <MainComponent/>
                <FooterComponent/>
            </div>
        );
    }
}

export default App;
