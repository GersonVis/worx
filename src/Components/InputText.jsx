import React, { useContext } from "react"
import { ProviderForm } from "..";
const InputText=({id, value})=>{
    const context=useContext(ProviderForm)
    return <div>
        <label htmlFor={id}>{value}</label>
        <input id={id} type="text" onChange={(evt)=>{
            context.setName(evt.target.value)
            context.setText(evt.target.value)
        }}></input>
    </div>
    }
export default InputText;