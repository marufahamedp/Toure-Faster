import React from 'react';
import PrimaryHeader from '../PrimaryHeader/PrimaryHeader';
import TopHeader from '../TopHeader/TopHeader';

const Header = () => {
    return (
        <div className="sticky-top">
            <PrimaryHeader></PrimaryHeader>
        </div>
    );
};

export default Header;