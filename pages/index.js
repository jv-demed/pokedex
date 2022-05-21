import { useState } from 'react';
import SearchBar from '../src/components/home/SearchBar';
import PokeList from '../src/components/home/PokeList';

export default function Home(){

    const [alphaFilter, setAlphaFilter] = useState('');

    return(
        <>
            <SearchBar alphaFilter={setAlphaFilter} />
            <PokeList alphaFilter={alphaFilter} />
        </>
    )
}