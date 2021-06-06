import React from 'react';
import { Button } from './Button';


interface SearchProps  {

};

const SearchField: React.FC<SearchProps>  = ({ 
    ...props

}) => {

    return (
        <React.Fragment>
            <input type="text" className="textbox search" name="searchbox" placeholder="What are you looking for?" />
        </React.Fragment>
    )
};
export { SearchField };