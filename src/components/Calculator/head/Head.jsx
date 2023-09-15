import "./Head.css"
import {Input} from "./Input/Input";
import { Display } from "./Display";
import { useState } from "react";
export const Head=({clickedValue,expr,display})=>{
    
    return(
    <div id="head">
        <Display display={display}/>
        <Input clickedValue={clickedValue} expr={expr}/>
        </div>);
}