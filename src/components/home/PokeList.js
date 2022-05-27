import Link from 'next/link';
import styled from 'styled-components';
import PokeBox from './PokeBox';
import PokeBoxMobile from '../../mobile/PokeBoxMobile';

const PokeListStyled = styled.div`
    background-color: ${({ theme }) => theme.bgs.pokeList};
    border-radius: 5px;
    margin-top: 90px;
    padding: 10px;
    ul{
        display: flex;
        //flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
    }
`

export default function PokeList({ pokeList, letterFilter }){
    return(
        <PokeListStyled>
            <ul>
                {pokeList.results.map((poke, i) => {
                    if(poke.name.includes(letterFilter.toLowerCase())){
                        return(
                            <Link key={i+1} href={'/pokemon/'+poke.name}>
                                {
                                    screen.width >= 550 ? 
                                    <PokeBox pokeName={poke.name} />
                                    :
                                    <PokeBoxMobile pokeName={poke.name} />
                                }
                            </Link>
                        )
                    }
                })}
            </ul>
        </PokeListStyled>
    )
}