import { Button } from "@mui/material";
import { myStyle } from "./ButtonStyles";
import { useEffect } from "react";
export const Operation=({opr,clickedValue,setClickedValue,setType,setExpr,expr,ans,setAns,type})=>{
    const calculateAns=((ans,type,val)=>{
        switch (type) {
            case '+':
              return ans + val;
            case '-':
              return ans - val;
            case '*':
              return ans * val;
            case '/':
              return ans / val;
            case '%':
              return ans % val;
            default:
              return ans; // Use the current value of x if the operator is not recognized
          }
    })
    const handleClick=(event)=>{
        event.preventDefault();
        if(opr!=='=')
        setExpr(expr+opr);
        setAns((ans)=>calculateAns(ans,type,Number(clickedValue)));
        setType(opr);
        setClickedValue("");
    }
    useEffect(()=>{
    setExpr(ans);
    },[type==='='])
    return(
<Button onClick={handleClick} variant="contained" style={myStyle}>{opr}</Button>
    );
}