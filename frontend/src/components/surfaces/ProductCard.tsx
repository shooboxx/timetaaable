

import React from 'react';

interface CardProps {
    // photoSrc: String,
    title: String,
    price: String,
    link: any
}

const ProductCard: React.FC<CardProps>  = ({ 
    // photoSrc= '1',
    title ='',
    price ='',
    link='#',
    ...props
   


}) => {

    return (
            <div className="card product-card">
                <div className="product-card__photobox"></div>
                <div className="product-card__business ">
                    <div className="product-card__title"><p>{title}</p></div>
                    <div className="product-card__description">{props.children}</div>
                </div>
                <div className="product-card__pricing">
                    <div className="product-card__price">${price}</div>
                </div>

            </div>
    )
};
export { ProductCard };