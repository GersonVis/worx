import React, { useContext } from "react"
import { ProviderForm } from "..";
export default({id, value})=>{
    const context=useContext(ProviderForm)
    return <div>
        <label htmlFor={id}>{value}</label>
        <input id={id} type="text" onChange={(evt)=>context.setName(evt.target.value)}></input>
    </div>
    }