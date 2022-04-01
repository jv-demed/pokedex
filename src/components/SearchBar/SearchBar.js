import SearchBarStyled from "./SearchBarStyled";
import Imgs from '../../assets/Imgs';

export default function SearchBar({ alphaFilter }){
    //console.log(alphaFilter)
    return(
        <SearchBarStyled>
            <div>
                <img src={Imgs.pokeball} />
                <input type='text' onChange={(event) => alphaFilter(event.target.value)}/>
            </div>
        </SearchBarStyled>
    )
}