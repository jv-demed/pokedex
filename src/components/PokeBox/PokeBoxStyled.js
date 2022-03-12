import styled from 'styled-components';

const PokeBoxStyled = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.bgPokeBox};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-between;
    padding: 5px 10px;
    width: 200px;
    .nameArea{
        align-items: center;
        display: flex;
        font-size: 16pt;
        justify-content: space-between;
        width: 100%;
        .number{
            color: ${({ theme }) => theme.pokeId};
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
        background-color: ${({ theme }) => theme.bgPokeBoxHover};
    }
`

export default PokeBoxStyled;