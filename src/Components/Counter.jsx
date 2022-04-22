import React, { useContext } from "react";
import {ProviderForm} from "..";

export default({action=1, value})=>{
    const context=useContext(ProviderForm)
    return <button onClick={()=>context.setCounter(context.counter+action)}>{value}</button>
}