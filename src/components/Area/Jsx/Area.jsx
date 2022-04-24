import React from "react";
import style from "../Styles/Area.module.css";
const Area = ({ children, preStyle = {
    Width: "100%",
    Height: "100%",
    Color:"white",
} }) => {
    console.log(preStyle)
    return <section style={{
        backgroundColor: preStyle.Color,
        width: preStyle.Width,
        height: preStyle.Height
    }} className={style.Area}>
        {children}
    </section>
}
export default Area;