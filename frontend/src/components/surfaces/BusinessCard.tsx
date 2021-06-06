

import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
    // photoSrc: String,
    title: String,
    price: String,
    link: any
}

const BusinessCard: React.FC<CardProps>  = ({ 
    // photoSrc= '1',
    title ='',
    price ='',
    link='#',
    ...props
   


}) => {

    return (
        <Link to={link} className='card-link'>
            <div className="card business-card">
                <div className="card__photobox"></div>
                <div className="card__business">
                    <div className="side-by-side">
                        <div className="card__title heading-4">
                            <p>Testing</p>
                        </div>
                        <div className="pricing-box">
                            <div className="product-pricing">4.8(200)</div>
                        </div>
                    </div>
    
                    <div className="business-card__sub-titles">
                        <div className="business-time-status business-card__sub-title">
                            Open now
                        </div>
                        <div className="business-address business-card__sub-title">
                            ABCDE
                        </div>
                    </div>
                    <div className="card__description">We're a digital marketing team based in the Bahamas that loves to create content that has organic virality. e're a digital marketing team based in the Bahamas that loves to create content that has organic virality.</div>
                </div>

                
            </div>
        </Link>
    )
};
export { BusinessCard };