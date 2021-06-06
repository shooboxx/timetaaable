import React from 'react';

import { Logo } from './Logo';

const Navbar: React.FC = () => {

    return (
        <div className='row nav-container'> 
            <Logo />
        </div>

    )
};
export { Navbar };