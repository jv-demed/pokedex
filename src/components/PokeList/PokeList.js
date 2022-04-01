import getData from '../../data/getData';
import PokeListStyled from './PokeListStyled';
import PokeBox from '../PokeBox/PokeBox';
import { pokeApi } from '../../data/pokeApi';
import { countPokeList } from '../../scripts/utils';

export default function PokeList({ alphaFilter }){

    const pokeList = getData(pokeApi.pokeList, pokeApi.pokeListObj, this);

    return(
        <PokeListStyled>
            <span className='number'>
                Pokémons encontrados: {countPokeList(pokeList.results, alphaFilter)}
            </span>
            <ul>
                {pokeList.results.map((poke, i) => {
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