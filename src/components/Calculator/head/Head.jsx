import "./Head.css"
import {Input} from "./Input/Input";
import { Display } from "./Display";
export const Head=({clickedValue})=>{
    return(
    <div id="head">
        <Display/>
        <Input clickedValue={clickedValue}/>
        </div>);
}