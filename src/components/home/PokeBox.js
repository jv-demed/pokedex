import styled from 'styled-components';
import getData from '../../data/getData';
import pokeApi from '../../data/pokeApi';
import Loading from '../globals/Loading';
import TypeBox from './typeBox/TypeBox';
import { firstUpperCase } from '../../scripts/utils';
import Link from 'next/link';

const PokeBoxStyled = styled.div`
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
        width: 125px;
    }
    .types{
        display: flex;
        gap: 5px;
    }
    :hover{
        background-color: ${({ theme }) => theme.bgs.pokeBoxHover};
    }
    @media(max-width: 850px){
        height: 150px;
        width: 150px;
        img{
            width: 75px;
        }
    }
`

export default function PokeBox({ pokeInfo }){

    const poke = getData(pokeInfo.url, pokeApi.pokeObj);
    const name = firstUpperCase(pokeInfo.name);
    const sprite = poke.sprites.other['official-artwork'].front_default;
    const types = poke.types;
    
    return(
        !sprite ? 
        <PokeBoxStyled justifyContent='center'>
            <Loading size='50px' />
        </PokeBoxStyled>
        :
            <Link href={'/'+pokeInfo.name}>
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
            </Link>
    )
}