import "./Calculator.css"
import { Body } from "./body/Body"
import {Head} from "./head/Head"
import {useState} from 'react'
export const Calculator=()=>{
const [clickedValue,setClickedValue]=useState("");
const [expr,setExpr]=useState("0");
const [ans,setAns]=useState(0);
const [display,setDisplay]=useState('Ans=0')
return(
<div id="parent">
<div id="calc-container">
<div id="calc-head">
<Head clickedValue={clickedValue} expr={expr} display={display}/>
</div>
<div id="calc-body">
<Body clickedValue={clickedValue} setClickedValue={setClickedValue} ans={ans} setAns={setAns} setExpr={setExpr} expr={expr} setDisplay={setDisplay}/>
</div>
</div>
</div>)
}
