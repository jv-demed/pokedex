import styled from "styled-components";
import getData from '../data/getData';

const PokeBoxStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 250px;
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
            front_default: ''
        }
    })
    
    return(
        <PokeBoxStyled>
            <span>{poke.name}</span>
            <img src={poke.sprites.front_default} />
        </PokeBoxStyled>
    )
}