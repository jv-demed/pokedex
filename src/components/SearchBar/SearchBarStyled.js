import styled from 'styled-components';

const SearchBarStyled = styled.div`
    display: flex;
    justify-content: left;
    margin-bottom: 20px;
    div{
        background-color: ${({ theme }) => theme.bgs.pokeList};
        border-radius: 5px;
        display: flex;
        height: 50px;
        padding: 5px;
        img{
            background-color: ${({ theme }) => theme.basics.white};
            border-radius: 5px 0 0 5px;
            height: 40px;
            width: 40px;
        }
        input{
            border: none;
            border-radius: 0 5px 5px 0;
            height: 40px;
            font-size: 18pt;
            padding: 0 5px;
            width: 550px;
        }
        input:focus{
            outline: 0;
        }
    }
    @media(max-width: 850px){
        div{
            width: 90%;
            input{
                width: 100%;
            }
        }
    }
    @media(max-width: 550px){
        div{
            width: 100%;
        }
    }
`

export default SearchBarStyled;