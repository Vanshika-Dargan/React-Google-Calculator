import {CommonButton} from './Button'
import { Equal } from './Equal';
import { Operation } from './Operation';
import { useState } from 'react';
export const Body=({clickedValue,setClickedValue,x,y,setX,setY})=>{
    const buttonValues=['0','1','2','3','4' ,'5','6','7','8','9' ];
    const buttonOpr=['+','-','*','/','%'];
    const [type,setType]=useState(null);
    return(<div>
        {buttonValues.map((text)=>(
        <CommonButton 
        key={text}
        text={text} 
        clickedValue={clickedValue} 
        setClickedValue={setClickedValue}/>
        ))
    }
    {buttonOpr.map((opr)=>(
        <Operation 
        key={opr}
        opr={opr}
        clickedValue={clickedValue}
        setX={setX}
        setClickedValue={setClickedValue}
        setType={setType}
        />
    ))}
    <Equal type={type} setClickedValue={setClickedValue} x={x} y={y} setY={setY} clickedValue={clickedValue}/>
    </div>)
}