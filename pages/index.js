import getData from '../src/data/getData';
import styled from 'styled-components';
import PokeBox from '../src/components/PokeBox';

const HomeStyled = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    .count{
        margin-bottom: 20px;
    }
`

export default function Home(){
    
    const pokeList = getData('https://pokeapi.co/api/v2/pokemon', {
        count: 0,
        results: []
    });
        
    return(
        <HomeStyled>
            <span className='count'>Número de Pokémons: {pokeList.count}</span>
            <ul>
                {pokeList.results.map((poke, i) => {
                    return(
                        <li key={i+1}>
                            <PokeBox poke={poke} />
                        </li>
                    )
                 })}
            </ul>
        </HomeStyled>
    )
}