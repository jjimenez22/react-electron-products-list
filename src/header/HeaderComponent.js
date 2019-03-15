import React from 'react';
import Logo from "./logo/Logo";
import './header.css';
import Client from "./client/Client";

export default function HeaderComponent(props) {
    return (
        <header className="topbar">
            <div className="row m-100 p-3">
                <Logo/>
                <Client clientName={"Randy Javier"}/>
            </div>
        </header>
    );
}