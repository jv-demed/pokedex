import getData from '../../data/getData';
import PokeBoxStyled from './PokeBoxStyled';
import Loading from '../globals/Loading';
import { pokeApi } from '../../data/pokeApi';
import { firstUpperCase } from '../../scripts/utils';

export default function PokeBox(props){

    const poke = getData(props.poke.url, pokeApi.pokeObj);

    const name = firstUpperCase(props.poke.name);
    const sprite = poke.sprites.other['official-artwork'].front_default;
    
    if(!sprite){
        return(
            <PokeBoxStyled>
                <Loading size='50px' />
            </PokeBoxStyled>
        )
    }
    return(
        <PokeBoxStyled>
            <div>
                {/* {poke.id} */}
                <span>{name}</span>
            </div>
            <img src={sprite} />
        </PokeBoxStyled>
    )
}