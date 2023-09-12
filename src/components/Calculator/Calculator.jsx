import "./Calculator.css"
import { Body } from "./body/Body"
import {Head} from "./head/Head"
import {useState} from 'react'
export const Calculator=()=>{
const [clickedValue,setClickedValue]=useState("");
const [x,setX]=useState(0);
const [y,setY]=useState(0);
console.log(x);
return(
<div id="calc-container">
<div id="calc-head">
<Head clickedValue={clickedValue}/>
</div>
<div id="calc-body">
<Body clickedValue={clickedValue} setClickedValue={setClickedValue} x={x} y={y} setX={setX} setY={setY}/>
</div>
</div>)
}
