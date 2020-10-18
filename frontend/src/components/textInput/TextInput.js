import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ type, placeholder }) => {
    return (
        <div className="input-wrapper">
            <input
                className="input-text"
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

TextInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
};

TextInput.defaultProps = {
    type: 'text',
    placeholder: '',
}

export default TextInput;
