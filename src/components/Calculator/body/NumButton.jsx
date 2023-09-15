import {Button} from '@mui/material'
import { myStyle } from './ButtonStyles';
import { evaluate } from "../../../utility/EvaluateInfix";

export const NumButton=( {text,clickedValue,setClickedValue,setExpr,expr,setDisplay})=>{
    const handleClick=()=>{
    expr=="0"?setExpr(text):setExpr(expr+text);
    setClickedValue(clickedValue+text);
    }
    const handleButtonClick=()=>{
        let res=expr!=='Error'&& evaluate(expr);
        res==='Error'?setDisplay(""): setDisplay(expr+"=");
        res && setExpr(res);
        }
        const isNumberOrDecimal = /^[\d.]+$/.test(text);

        const dynamicStyle = {
          ...myStyle,
          background: text === '=' ? '#4285f4' : (isNumberOrDecimal ? '#f1f3f4' : '#dadce0'),
          border: text === '=' ? '1px solid #4285f4' : (isNumberOrDecimal ? '1px solid #f1f3f4' : '1px solid #dadce0'),
          color: text === '=' ? '#fff' : '#202124',
        };
        const handleClear=()=>{
            let expression=expr?.toString();
            console.log(expression?.length)
            if (expression?.length > 0) {
                
                setExpr(expression?.substring(0, expr?.length - 1));
              }
        }
return(
    <>
    {text==='='?<Button onClick={handleButtonClick} variant="contained" style={dynamicStyle} >=</Button>:text==='AC'?<Button onClick={handleClear} variant="contained" style={dynamicStyle} >AC</Button>:<Button  variant="contained" onClick={handleClick} style={dynamicStyle} >{text}</Button>}
    </>
)
}