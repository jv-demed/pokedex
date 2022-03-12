import styled from 'styled-components';

const PokeBoxStyled = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.bgs.pokeBox};
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

export default PokeBoxStyled;