import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children, type}) => {
    return (
        <button className="btn btn-basic" type={type}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    type: PropTypes.string,
}

Button.defaultProps = {
    type: 'button',
}

export default Button;