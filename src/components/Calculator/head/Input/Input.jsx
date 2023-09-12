import "./Input.css"
export const Input=({clickedValue,input})=>{
    const handleChange=()=>{

    }
    return(
        <div>
            <input id="exp" type="text" placeholder="0" width="100%" value={input?"":clickedValue} onChange={handleChange}/>
        </div>
    )
}