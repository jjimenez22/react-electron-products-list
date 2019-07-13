import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from "react-router-dom";

const RedirectRoute = props =>
    <Route exact path={props.path} component={() =>
        <Redirect to={props.to}/>}/>;

RedirectRoute.propTypes = {
    path: PropTypes.string,
    to: PropTypes.string,
};

export default RedirectRoute;