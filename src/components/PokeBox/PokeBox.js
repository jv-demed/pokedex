import getData from '../../data/getData';
import PokeBoxStyled from './PokeBoxStyled';
import Loading from '../globals/Loading';
import { pokeApi } from '../../data/pokeApi';
import TypeBox from '../TypeBox/TypeBox';
import { firstUpperCase } from '../../scripts/utils';

export default function PokeBox(props){

    const poke = getData(props.poke.url, pokeApi.pokeObj);

    const name = firstUpperCase(props.poke.name);
    const sprite = poke.sprites.other['official-artwork'].front_default;
    
    if(!sprite){
        return(
            <PokeBoxStyled justifyContent='center'>
                <Loading size='50px' />
            </PokeBoxStyled>
        )
    }
    return(
        <PokeBoxStyled>
            <div className='nameArea'>
                <span>{name}</span>
                <span className='number'>#{poke.id}</span>
            </div>
            <img src={sprite} />
            <div className='types'>
                {poke.types.map((type, i) => {
                    const typeName = firstUpperCase(type.type.name);
                    return(
                        <TypeBox key={name+'Type'+(i+1)} typeName={typeName} />
                    )
                })}
            </div>
        </PokeBoxStyled>
    )
}