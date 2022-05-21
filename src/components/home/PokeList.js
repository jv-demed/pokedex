import styled from 'styled-components';
import getData from '../../data/getData';
import pokeApi from '../../data/pokeApi';
import PokeBox from './PokeBox';
import { countPokeList } from '../../scripts/utils';

const PokeListStyled = styled.div`
    background-color: ${({ theme }) => theme.bgs.pokeList};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    opacity: 0.85;
    padding: 10px;
    .number{
        color: ${({ theme }) => theme.basics.white};
        font-size: 16pt;
        margin-bottom: 10px;
        margin-left: 10px;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
    }
`

export default function PokeList({ alphaFilter }){

    const pokeList = getData(pokeApi.pokeList, pokeApi.pokeListObj);

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
                                <PokeBox pokeInfo={poke} />
                            </li>
                        )
                    }
                })}
            </ul>
        </PokeListStyled>
    )
}