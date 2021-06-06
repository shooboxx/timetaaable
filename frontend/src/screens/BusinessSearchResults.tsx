import React from 'react'
import { BusinessResults } from '../components/templates/Businesses'
import { Search } from '../components/templates/Search'

const BusinessSearchResults: React.FC = () => {
    return (
        <main className='row'>
            <Search />
            <BusinessResults />   
        </main>
    )
}

export {BusinessSearchResults}