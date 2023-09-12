import { Button } from "@mui/material";
import { myStyle } from "./ButtonStyles";
import { useEffect } from "react";
export const Equal=({type,setClickedValue,x,y,setY,clickedValue})=>{
    const handleButtonClick=()=>{
        setY((prevY)=>{
            const newY=Number(clickedValue);
            return newY;
        })
}
useEffect(()=>{
    switch(type){
        case'+':
        setClickedValue(x+y);
        break;
        case'-':
        setClickedValue(x-y);
        break;
        case'*':
        setClickedValue(x*y);
        break;
        case'/':
        setClickedValue(x/y);
        break;
        case'%':
        setClickedValue(x%y);
        break;
    }
    },[y])
    return(
        <Button onClick={handleButtonClick} variant="contained" style={myStyle} >=</Button>
    )

}