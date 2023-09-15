import "./Input.css"
export const Input=({clickedValue,expr,setDisplay})=>{
    const handleChange=()=>{
    console.log("I go changed")
    }
    return(
        <div>
            <input id="exp" type="text" placeholder="0" width="100%" value={expr} onChange={handleChange}/>
        </div>
    )
}