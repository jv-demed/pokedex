import getData from '../../data/getData';
import PokeListStyled from './PokeListStyled';
import PokeBox from '../PokeBox/PokeBox';
import { pokeApi } from '../../data/pokeApi';

export default function PokeList({ alphaFilter }){

    const pokeList = getData(pokeApi.pokeList, pokeApi.pokeListObj).results;

    return(
        <PokeListStyled>
            {pokeList.map((poke, i) => {
                if(poke.name.includes(alphaFilter.toLowerCase())){
                    return(
                        <li key={i+1}>
                            <PokeBox poke={poke} />
                        </li>
                    )
                }
            })}
        </PokeListStyled>
    )
}