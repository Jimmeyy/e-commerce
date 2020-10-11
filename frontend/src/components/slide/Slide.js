import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ slideContent }) => {
    const { heading, description, buttons } = slideContent;

    return (
        <div className="slide">
            <div className="slide-container">
                <div className="slide-content">
                    <h2
                        dangerouslySetInnerHTML={{
                            __html: heading,
                        }}
                    ></h2>
                    <p>{description}</p>
                    <div className="slide-buttons">
                        {buttons.map((btn) => (
                            <button class="btn btn-basic btn-margin-right">
                                {btn.buttonText}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

Slide.propTypes = {
    slideContent: PropTypes.array.isRequired,
};

export default Slide;
