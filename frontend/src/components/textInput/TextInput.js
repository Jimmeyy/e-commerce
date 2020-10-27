import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const TextInput = ({ type, placeholder, name }) => {
    return (
        <div className="input-wrapper">
            <Field
                className="input-text"
                type={type}
                placeholder={placeholder}
                name={name}
            />
        </div>
    );
};

TextInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
};

TextInput.defaultProps = {
    type: 'text',
    placeholder: '',
    name: '',
};

export default TextInput;
