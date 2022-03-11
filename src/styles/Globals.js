import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        padding: 20px 60px;
    }
    ul{
        list-style: none;
    }
`

export default Globals;