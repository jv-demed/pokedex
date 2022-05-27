import styled from 'styled-components';
import Imgs from '../../assets/Imgs';
import { countPokeList } from '../../scripts/utils';

const SearchBarStyled = styled.div`
    background-color: ${({ theme }) => theme.bgs.pokeList};
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    position: fixed;
        left: 0;
        right: 0;
        top: 0;
    div{
        display: flex;
        img{
            background-color: ${({ theme }) => theme.basics.white};
            border-radius: 5px 0 0 5px;
            width: 40px;
        }
        input{
            border: none;
            border-radius: 0 5px 5px 0;
            font-size: 1.5rem;
            padding: 0 5px;
            width: 100%;
        }
        input:focus{
            outline: 0;
        }
    }
    .number{
        color: ${({ theme }) => theme.basics.white};
        font-size: 16pt;
        margin: 8px 4px 0;
    }
`

export default function SearchBar({ 
    pokeList,
    letterFilter,
    setLetterFilter 
}){

    return(
        <SearchBarStyled>
            <div>
                <img src={Imgs.pokeball} />
                <input type='text' onChange={(e) => setLetterFilter(e.target.value)}/>
            </div>
            <span className='number'>
                Pokémons encontrados: {countPokeList(pokeList.results, letterFilter)}
            </span>
        </SearchBarStyled>
    )
}