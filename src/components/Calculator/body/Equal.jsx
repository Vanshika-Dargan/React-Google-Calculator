import { Button } from "@mui/material";
import { myStyle } from "./ButtonStyles";
import { useEffect } from "react";
import { evaluate } from "../../../utility/EvaluateInfix";
export const Equal=({type,setClickedValue,clickedValue,expr,setExpr,setDisplay})=>{
    const handleButtonClick=()=>{
    let res=evaluate(expr);
    setDisplay(expr+"=");
    setExpr(res);
    }
//         setY((prevY)=>{
//             const newY=Number(clickedValue);
//             return newY;
//         })
// }
// useEffect(() => {
//     const fetchData = () => {
//       switch (type) {
//         case '+':
//           return Promise.resolve(x + y);
//         case '-':
//           return Promise.resolve(x - y);
//         case '*':
//           return Promise.resolve(x * y);
//         case '/':
//           return Promise.resolve(x / y);
//         case '%':
//           return Promise.resolve(x % y);
//         default:
//           return Promise.resolve(0); // Set a default value if type is not recognized
//       }
//     };
  
//     fetchData()
//       .then((result) => {
//         setClickedValue(result);
//         setExpr(result); // Update expr with the result
//       })
//       .catch((error) => {
//         // Handle errors here
//       });
//   }, [y]);
  
    return(
        <Button onClick={handleButtonClick} variant="contained" style={myStyle} >=</Button>
    )

}