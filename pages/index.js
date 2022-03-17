import { useState } from 'react';
import SearchBar from '../src/components/SearchBar/SearchBar';
import PokeList from '../src/components/PokeList/PokeList';

export default function Home(){

    const [alphaFilter, setAlphaFilter] = useState('');

    return(
        <>
            <SearchBar alphaFilter={setAlphaFilter} />
            <PokeList alphaFilter={alphaFilter} />
        </>
    )
}