import TypeBoxStyled from "./TypeBoxStyled";

export default function TypeBox(props){
    return(
        <TypeBoxStyled className='fontAlternative'>
            {props.typeName}
        </TypeBoxStyled>
    )
}