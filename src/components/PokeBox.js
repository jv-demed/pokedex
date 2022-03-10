import styled from "styled-components";
import getData from '../data/getData';
import Loading from './globals/Loading';
import { firstUpperCase } from '../scripts/utils';

const PokeBoxStyled = styled.div`
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-evenly;
    padding: 10px;
    width: 200px;
    span{
        font-size: 16pt;
    }
    img{
        width: 125px;
    }
`

export default function PokeBox(props){

    const poke = getData(props.poke.url, {
        sprites: {
            other: {
                'official-artwork': {
                    front_default: ''
                }
            }
        }
    });

    const name = firstUpperCase(props.poke.name);
    const sprite = poke.sprites.other['official-artwork'].front_default;
    
    if(!sprite){
        return(
            <Loading size='30px' />
        )
    }
    return(
        <PokeBoxStyled>
            <span>{name}</span>
            <img src={sprite} />
        </PokeBoxStyled>
    )
}