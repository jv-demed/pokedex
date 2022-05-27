import { useEffect, useState } from 'react';
import pokeApi from './pokeApi';

function getData(url, obj){

    const [data, setData] = useState(obj);

    useEffect(() => {
        let isMounted = true;
        fetch(url)
        .then((res) => res.json())
        .then((complete) => {
            if(isMounted){
                setData(complete)
            }
        })
        return () => {
            isMounted = false;
        }
    }, []);
    
    return data;
}

export function getPokeList(){
    return getData((pokeApi.pokemonUrl+'?limit=500'), pokeApi.pokeListObj);
}

export function getPokemon(name){
    return getData((pokeApi.pokemonUrl+name), pokeApi.pokemonObj);
}

export function getSpecie(name){
    return getData((pokeApi.specieUrl+name), pokeApi.specieObj);
}