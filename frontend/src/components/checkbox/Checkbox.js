import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label }) => {
    return (
        <div className="input-wrapper">
            <label className="input-checkbox">
                <input type="checkbox" />
                <span>{label}</span>
            </label>
        </div>
    );
}

Checkbox.propTypes = {
    label: PropTypes.string,
}

Checkbox.defaultProps = {
    label: ''
}

export default Checkbox;

