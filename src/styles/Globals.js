import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
    }
`

export default Globals;