import styled from 'styled-components';
import { getPokemon } from '../../data/getData';
import Loading from '../globals/Loading';
import TypeBox from './typeBox/TypeBox';
import { firstUpperCase } from '../../scripts/utils';

const PokeBoxStyled = styled.li`
    align-items: center;
    background-color: ${({ theme }) => theme.basics.white};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: ${props => props.justifyContent ? 'center' : 'space-between'};
    padding: 5px 10px 7px;
    width: 200px;
    .nameArea{
        align-items: center;
        display: flex;
        font-size: 16pt;
        justify-content: space-between;
        width: 100%;
        .number{
            color: ${({ theme }) => theme.fonts.pokeId};
            font-size: 10pt;
        }
    }
    img{
        width: 135px;
    }
    .types{
        display: flex;
        gap: 5px;
    }
    :hover{
        background-color: ${({ theme }) => theme.bgs.pokeBoxHover};
    }
`

export default function PokeBox({ pokeName }){

    const poke = getPokemon(pokeName);
    const name = firstUpperCase(pokeName);
    const sprite = poke.sprites.other['official-artwork'].front_default;
    const types = poke.types;
    
    return(
        !sprite ? 
        <PokeBoxStyled justifyContent='center'>
            <Loading size='50px' />
        </PokeBoxStyled>
        :
        <PokeBoxStyled>
            <div className='nameArea'>
                <span>{name}</span>
                <span className='number'>#{poke.id}</span>
            </div>
            <img src={sprite} />
            <div className='types'>
                {types.map((type, i) => {
                    const typeName = firstUpperCase(type.type.name);
                    return(
                        <TypeBox key={name+'Type'+(i+1)} typeName={typeName} />
                    )
                })}
            </div>
        </PokeBoxStyled>
    )
}