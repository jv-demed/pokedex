import { useState } from 'react';
import getData from '../../data/getData';
import PokeListStyled from './PokeListStyled';
import PokeBox from '../PokeBox/PokeBox';
import { pokeApi } from '../../data/pokeApi';

export default function PokeList({ alphaFilter }){

    const pokeList = getData(pokeApi.pokeList, pokeApi.pokeListObj).results;

    return(
        <PokeListStyled>
            <span className='number'>Pokémons encontrados: {pokeList.length}</span>
            <ul>
                {pokeList.map((poke, i) => {
                    if(poke.name.includes(alphaFilter.toLowerCase())){
                        return(
                            <li key={i+1}>
                                <PokeBox poke={poke} />
                            </li>
                        )
                    }
                })}
            </ul>
        </PokeListStyled>
    )
}