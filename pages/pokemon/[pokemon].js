import { useRouter } from "next/router";
import styled from 'styled-components';
import { getPokemon, getSpecie } from "../../src/data/getData";
import { pokeApi } from '../../src/data/pokeApi';
import PokemonInfo from '../../src/components/pokemon/pokemonInfo';

const PokemonStyled = styled.div`

`

export default function Pokemon(){

    const name = useRouter().query.pokemon;
    const poke = getPokemon(name ? name : 'darkrai');
    const specie = getSpecie(name ? name : 'darkrai');

    return(
        <PokemonStyled>
            <PokemonInfo poke={poke} specie={specie} />
        </PokemonStyled>
    )
}