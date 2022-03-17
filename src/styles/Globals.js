import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        padding: 20px 80px;
    }
    ul{
        list-style: none;
    }
    @media(max-width: 850px){
        padding: 10px;
    }
`

export default Globals;