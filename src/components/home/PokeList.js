import Link from 'next/link';
import styled from 'styled-components';
import { getPokeList } from '../../data/getData';
import PokeBox from './PokeBox';
import { countPokeList } from '../../scripts/utils';

const PokeListStyled = styled.div`
    background-color: ${({ theme }) => theme.bgs.pokeList};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
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

    let pokeList = getPokeList();

    return(
        <PokeListStyled>
            <span className='number'>
                Pokémons encontrados: {countPokeList(pokeList.results, alphaFilter)}
            </span>
            <ul>
                {pokeList.results.map((poke, i) => {
                    if(poke.name.includes(alphaFilter.toLowerCase())){
                        return(
                            <Link key={i+1} href={'/pokemon/'+poke.name}>
                                <li>
                                    <PokeBox pokeName={poke.name} />
                                </li>
                            </Link>
                        )
                    }
                })}
            </ul>
        </PokeListStyled>
    )
}