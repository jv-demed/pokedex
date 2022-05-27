import { useState } from 'react';
import { getPokeList } from '../src/data/getData';
import SearchBar from '../src/components/home/SearchBar';
import PokeList from '../src/components/home/PokeList';

export default function Home(){

    const pokeList = getPokeList();
    const [letterFilter, setLetterFilter] = useState('');

    return(
        <>
            <SearchBar 
                pokeList={pokeList} 
                letterFilter={letterFilter}
                setLetterFilter={setLetterFilter} 
            />
            <PokeList 
                pokeList={pokeList} 
                letterFilter={letterFilter} 
            />
        </>
    )
}