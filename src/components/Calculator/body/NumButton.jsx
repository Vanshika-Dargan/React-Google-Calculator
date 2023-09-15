import {Button} from '@mui/material'
import { myStyle } from './ButtonStyles';
export const NumButton=( {text,clickedValue,setClickedValue,setExpr,expr})=>{
    const handleClick=()=>{
    expr=="0"?setExpr(text):setExpr(expr+text);
    setClickedValue(clickedValue+text);
    }
return(
    <>
    <Button  variant="contained" onClick={handleClick} style={myStyle} >{text}</Button>
    </>
)
}