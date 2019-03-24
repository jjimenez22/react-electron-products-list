import React from 'react';
import PropTypes from 'prop-types';

const UserRow = props => {
    return (
        <tr>
            <td>{props.user.username}</td>
            <td>{props.user.name}</td>
            <td>{props.user.isAdmin ? 'Si' : 'No'}</td>
        </tr>
    );
};

UserRow.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserRow;