import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const TextInput = ({ type, placeholder, name, error }) => {
    return (
        <div className="input-wrapper">
            <Field
                className="input-text"
                type={type}
                placeholder={placeholder}
                name={name}
            />
            {error && <p className="input-error">{error}</p>}
        </div>
    );
};

TextInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    error: PropTypes.string,
};

TextInput.defaultProps = {
    type: 'text',
    placeholder: '',
    name: '',
    error: '',
};

export default TextInput;
