import React, { useContext } from "react";
import { Sex } from "..";

export default ({sex="hombre"})=>{
    const context=useContext(Sex);
    return <button
       style={
           {
             backgroundColor: context.color,
             width: "300px",
             height: "300px" 
           }
       }
    >{context.value}</button>
}