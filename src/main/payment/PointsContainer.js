import React from 'react';
import Points from "./Points";

export default function PointsContainer(props) {
    const points = {
        generated: 14,
        available: 156
    };

    return (
        <Points points={points}/>
    );
}