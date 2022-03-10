import getData from '../src/data/getData';
import styled from 'styled-components';
import PokeBox from '../src/components/PokeBox';

const HomeStyled = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
    .count{
        font-size: 20pt;
        margin-bottom: 20px;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
    }
`

export default function Home(){
    
    const pokeList = getData('https://pokeapi.co/api/v2/pokemon?limit=1126', {
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