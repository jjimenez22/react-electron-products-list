import React from 'react';
import Logo from "./logo/Logo";
import './header.css';
import ClientContainer from "./client/ClientContainer";

export default function HeaderComponent() {
    return (
        <header className="topbar">
            <div className="row m-100 p-3">
                <Logo/>
                <ClientContainer/>
            </div>
        </header>
    );
}