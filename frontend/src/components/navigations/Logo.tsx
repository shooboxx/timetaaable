import React from 'react';
import timetaaablelogo from './../../assets/images/timetaaablelogo.svg';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {

    return (
        <div> 
            <Link to='/'>
                <img className='logo' src={timetaaablelogo} alt="logo" /> 
            </Link>
        </div>

    )
};
export { Logo };