import React from 'react';
import BillSection from "./BillSection";

const AmountContainer = () => {
    const bill = {
        payed: 14114.54,
        change: 0.46,
        saved: -4.80,
        total: 14114.54
    };
    return (
        <BillSection bill={bill}/>
    );
};

export default AmountContainer;