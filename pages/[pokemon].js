import { useRouter } from "next/router";
import PokemonInfo from '../src/components/pokemon/pokemonInfo';

export default function Pokemon(){

    localStorage.setItem('pokeName', useRouter().query.pokemon);
    const name = localStorage.getItem('pokeName');

    return(
        <PokemonInfo pokeName={name} />
    )
}