import { Button } from "@mui/material";
import { myStyle } from "./ButtonStyles";

export const Operation=({opr,clickedValue,setX,setClickedValue,setType})=>{
    const handleClick=()=>{
        setX(Number(clickedValue));
        setType(opr);
        setClickedValue("");
    }
    return(
<Button onClick={handleClick}variant="contained" style={myStyle}>{opr}</Button>
    );
}