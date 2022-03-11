import getData from '../../data/getData';
import PokeListStyled from './PokeListStyled';
import PokeBox from '../PokeBox/PokeBox';
import { pokeApi } from '../../data/pokeApi';

export default function PokeList(){

    const pokeList = getData(pokeApi.pokeList, pokeApi.pokeListObj);

    return(
        <PokeListStyled>
            {pokeList.results.map((poke, i) => {
                return(
                    <li key={i+1}>
                        <PokeBox poke={poke} />
                    </li>
                )
            })}
        </PokeListStyled>
    )
}