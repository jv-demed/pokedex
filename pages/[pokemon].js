import { useRouter } from "next/router";
import PokemonInfo from '../src/components/pokemon/pokemonInfo';

export default function Pokemon(){

    const name = useRouter().query.pokemon;

    return(
        <PokemonInfo pokeName={name} />
    )
}