import styled from 'styled-components';

const TypeBoxStyled = styled.div`
    background-color: ${props => props.color};
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

export default TypeBoxStyled;