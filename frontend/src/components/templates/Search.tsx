import React from 'react';
import { Button } from '../inputs/Button';
import { SearchField } from '../inputs/SearchField';

const Search: React.FC  = () => {

const doSomething = () => {
    console.log('Button pressed')
};

    return (
        <div className='search-box'>
            <div className="search-container">
                <SearchField />
            </div>
            <div className="btn-container">
                <Button buttonType='primary' title='Find' onclick={doSomething}/>
            </div>
        </div>

    )
};
export { Search};