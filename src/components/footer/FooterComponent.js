import React from 'react';
import './footer.css'
import AmountContainer from "./amount/AmountContainer";
import ActionsContainer from "./actions/ActionsContainer";

const FooterComponent = (props) => {
    return (
        <footer>
            <div className="row m-100 m-0">
                {props.location.pathname === '/main/purchase' &&
                <AmountContainer/>}
                <ActionsContainer/>
            </div>
        </footer>
    );
};

export default FooterComponent;


