import styled from 'styled-components';

const PokeBoxStyled = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.bgPokeBox};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-evenly;
    padding: 10px;
    width: 200px;
    span{
        font-size: 16pt;
    }
    img{
        width: 125px;
    }
`

export default PokeBoxStyled;