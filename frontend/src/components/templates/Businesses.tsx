import React from 'react';
import { BusinessCard } from '../surfaces/BusinessCard';

interface Businesses {
    id: number;
    title: string;
    price: string;
    link: string;
    description: string;
}

const BusinessResults: React.FC = () => {

const emptyMessage = 'There aren\'t any businesses that match your search terms';    
const items: Businesses[] = [
{
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
},
{
    id: 5,
    title: 'Testing',
    price: '14.00',
    link: 'test4',
    description: 'We\'re a digital marketing team based in the Bahamas that loves to create content that has organic virality. ere a digital marketing team based in the Bahamas that loves to create content that has organic virality'
},
{
    id: 6,
    title: 'Testing',
    price: '14.00',
    link: 'test4',
    description: 'We\'re a digital marketing team based in the Bahamas that loves to create content that has organic virality. ere a digital marketing team based in the Bahamas that loves to create content that has organic virality'
}
]

    return (
        <div>
            <p>Search results: {items.length}</p>
            {items.length > 0 ? 
                items.map(item => <BusinessCard key={item.id} title={item.title} price={`${item.price}`} link={item.link}> {item.description} </BusinessCard>) 
                : <p className='empty'>{emptyMessage}</p>}
        </div>

    )
};
export { BusinessResults};