import { useRouter } from "next/router";
import styled from 'styled-components';
import { getPokemon, getSpecie } from "../../src/data/getData";
import { pokeApi } from '../../src/data/pokeApi';
import PokemonInfo from '../../src/components/pokemon/pokemonInfo';

const PokemonStyled = styled.div`

`

export default function Pokemon(){

    const name = useRouter().query.pokemon;
    () => {
        if(typeof window !== 'undefined' && window.localStorage){
            localStorage.setItem('pokeName', JSON.stringify((name==undefined ? localStorage.getItem('pokeName') : name)));
        }
    }
    const poke = getPokemon(name ? name : (typeof window !== 'undefined' && window.localStorage ? JSON.parse(localStorage.getItem('pokeName')) : name));
    const specie = getSpecie(name ? name : (typeof window !== 'undefined' && window.localStorage ? JSON.parse(localStorage.getItem('pokeName')) : name));

    return(
        <PokemonStyled>
            <PokemonInfo poke={poke} specie={specie} />
        </PokemonStyled>
    )
}