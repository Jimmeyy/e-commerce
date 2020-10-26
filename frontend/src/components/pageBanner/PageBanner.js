import React from 'react';

const PageBanner = ({ children }) => {
    return (
        <div className="page-banner">
            <div className="page-banner-inner">
                {children}
                {/* Breadcrumbs here */}
            </div>
        </div>
    );
};

export default PageBanner;