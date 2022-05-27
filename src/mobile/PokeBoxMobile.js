import styled from 'styled-components';
import { getPokemon } from '../data/getData';
import Loading from '../components/globals/Loading';
import TypeBox from '../components/home/typeBox/TypeBox';
import { firstUpperCase } from '../scripts/utils';

const PokeBoxMobileStyled = styled.li`
    background-color: ${({ theme }) => theme.basics.white};
    border-radius: 5px;
    display: flex;
    justify-content: ${props => props.justifyContent ? 'center' : 'space-between'};
    padding: 5px 10px;
    width: 100%;
    img{
        margin-right: 10px;
        width: 70px;
    }
    .infoArea{
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        justify-content: space-around;
        width: 100%;
        .idArea{
            align-items: center;
            display: flex;
            gap: 15px;
            .number{
                color: ${({ theme }) => theme.fonts.pokeId};
                font-size: 1.2rem;
            }
        }
        .types{
            display: flex;
            gap: 10px;
            height: 22px;
            justify-content: center;
            div{
                font-size: 0.8rem;
            }
        }
    }
    :hover{
        background-color: ${({ theme }) => theme.bgs.pokeBoxHover};
    }
`

export default function PokeBoxMobile({ pokeName }){

    const poke = getPokemon(pokeName);
    const name = firstUpperCase(pokeName);
    const sprite = poke.sprites.other['official-artwork'].front_default;
    const types = poke.types;

    return(
        !sprite ? 
        <PokeBoxMobileStyled justifyContent='center'>
            <Loading size='70px' />
        </PokeBoxMobileStyled>
        :
        <PokeBoxMobileStyled>
            <img src={sprite} />
            <div className='infoArea'>
                <div className='idArea'>
                    <span className='number'>#{poke.id}</span>
                    <span>{name}</span>
                </div>
                <div className='types'>
                    {types.map((type, i) => {
                        const typeName = firstUpperCase(type.type.name);
                        return(
                            <TypeBox key={name+'Type'+(i+1)} typeName={typeName} />
                        )
                    })}
                </div>
            </div>
        </PokeBoxMobileStyled>
    )
}