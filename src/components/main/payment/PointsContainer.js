import React from 'react';
import Points from "./Points";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        points: state.purchase.points,
    };
};

const PointsContainer = connect(mapStateToProps)(Points);

export default PointsContainer;