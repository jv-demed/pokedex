import styled from 'styled-components';
import { typeBoxBg, typeBoxColor } from "./TypeBoxBg";

const TypeBoxStyled = styled.div`
    background-color: ${props => props.colorBg};
    border-radius: 3px;
    color: ${props => props.flag ? 'white' : 'black'};
    font-size: 11px;
    line-height: 18px;
    text-align: center;
    width: 75px;
    @media(max-width: 850px){
        min-width: 45px;
        padding: 0 2px;
        width: auto;
    }
`

export default function TypeBox(props){

    const type = props.typeName;
    const color = typeBoxBg(type);

    return(
        <TypeBoxStyled className='fontAlternative' colorBg={color} flag={typeBoxColor(type)}>
            {type}
        </TypeBoxStyled>
    )
}