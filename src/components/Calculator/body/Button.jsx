import {Button} from '@mui/material'
import { myStyle } from './ButtonStyles';
export const CommonButton=( {text,clickedValue,setClickedValue})=>{
    const handleClick=()=>{
    setClickedValue(clickedValue+text);
    }
return(
    <>
    <Button onClick={handleClick} style={myStyle} variant="outlined">{text}</Button>
    </>
)
}