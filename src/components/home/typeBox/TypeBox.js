import styled from 'styled-components';
import { typeBoxBg, typeBoxColor } from "./TypeBoxBg";

const TypeBoxStyled = styled.div`
    align-items: center;
    background-color: ${props => props.colorBg};
    border-radius: 3px;
    color: ${props => props.flag ? 'white' : 'black'};
    display: flex;
    font-size: 0.7rem;
    justify-content: center;
    line-height: 18px;
    text-align: center;
    width: 75px;
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