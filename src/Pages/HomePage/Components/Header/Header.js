import React from 'react';
import CompanyLogos from './CompanyLogos/CompanyLogos';
import HeaderMain from './HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <CompanyLogos></CompanyLogos>
        </div>
    );
};

export default Header;