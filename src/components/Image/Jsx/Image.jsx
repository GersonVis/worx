import React from "react";
import style from '../Styles/Image.module.css';
const Image=({route, preStyle={Width: "100%", Height: "100%"}, preStyleImagen={Width: "100%", Height: "100%"}, classComponent="NormalImage"})=>{
    
     return <div style={{
         width: preStyle.Width,
         height: preStyle.Height
     }} className={style.NormalImage}>
         <img src={route} alt="" style={{
             width: preStyleImagen.Width,
             height: preStyleImagen.Height
         }} ></img>
     </div>
}
export default Image;