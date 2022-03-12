import TypeBoxStyled from "./TypeBoxStyled";
import { typeBoxBg, typeBoxColor} from "./TypeBoxBg";

export default function TypeBox(props){

    const type = props.typeName;
    const color = typeBoxBg(type);

    return(
        <TypeBoxStyled className='fontAlternative' color={color} flag={typeBoxColor(type)}>
            {type}
        </TypeBoxStyled>
    )
}