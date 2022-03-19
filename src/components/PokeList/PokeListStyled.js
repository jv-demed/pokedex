import styled from 'styled-components';

const PokeListStyled = styled.div`
    background-color: ${({ theme }) => theme.bgs.pokeList};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    opacity: 0.85;
    padding: 10px;
    .number{
        color: ${({ theme }) => theme.basics.white};
        font-size: 16pt;
        margin-bottom: 10px;
        margin-left: 10px;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
    }
`

export default PokeListStyled;