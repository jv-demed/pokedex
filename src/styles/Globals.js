import { createGlobalStyle } from "styled-components";
import Imgs from '../assets/Imgs';

const Globals = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        background-attachment: fixed;
        background-image: url(${Imgs.background});
        background-size: cover;
        padding: 20px 80px;
    }
    ul{
        list-style: none;
    }
    @media(max-width: 850px){
        body{
            padding: 20px;
        }
    }
`

export default Globals;