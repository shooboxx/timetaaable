import React from 'react';
import { ProductCard } from '../surfaces/ProductCard';

interface ProductProps {

}

const ProductResults: React.FC<ProductProps>  = ({ 

    ...props


}) => {
const items = [{
        id: 1,
        title: 'Testing',
        price: '14.00',
        link: 'test1',
        description: 'We\'re a digital marketing team based in the Bahamas that loves to create content that has organic virality. ere a digital marketing team based in the Bahamas that loves to create content that has organic virality'
},
{
        id: 2,
        title: 'Testing',
        price: '14.00',
        link: 'test2',
        description: 'We\'re a digital marketing team based in the Bahamas that loves to create content that has organic virality. ere a digital marketing team based in the Bahamas that loves to create content that has organic virality'
},
{
        id: 3,
        title: 'Testing',
        price: '14.00',
        link: 'test3',
        description: 'We\'re a digital marketing team based in the Bahamas that loves to create content that has organic virality. ere a digital marketing team based in the Bahamas that loves to create content that has organic virality'
},
{
        id: 4,
        title: 'Testing',
        price: '14.00',
        link: 'test4',
        description: 'We\'re a digital marketing team based in the Bahamas that loves to create content that has organic virality. ere a digital marketing team based in the Bahamas that loves to create content that has organic virality'
}]

    return (
        <div>
            <p>Search results: {items.length}</p>
            {items.map(item => <ProductCard key={item.id} title={item.title} price={`${item.price}`} link={item.link}> {item.description} </ProductCard>)}
        </div>

    )
};
export { ProductResults};