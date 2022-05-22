import{ useState } from 'react';
import { useRouter } from "next/router";
import styled from 'styled-components';
import { pokeApi } from '../../data/pokeApi';
import { getPokemon, getSpecie } from '../../data/getData';
import { firstUpperCase } from '../../scripts/utils';

const PokemonInfoStyled = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.bgs.pokeList};
    border-radius: 5px;
    color: ${({ theme }) => theme.basics.white};;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    div{
        display: flex;
        justify-content: space-around;
        img{
            border: 1px solid red;
            width: 350px;
        }
    }
`

export default function PokemonInfo({ poke, specie }){

    const sprite = poke.sprites.other['official-artwork'].front_default;
    const desc = specie.flavor_text_entries[0].flavor_text;

    return(
        <PokemonInfoStyled>
            <h1>{firstUpperCase(poke.name)}</h1>
            <div>
                <img src={sprite} />
                <span>{desc}</span>
            </div>
        </PokemonInfoStyled>
    )
}