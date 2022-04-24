import React from "react";
import style from '../Styles/Body.module.css';
const Body = ({ children, preStyle = {
    Width: "100%",
    Height: "100%",
    Color:"white",
} }) => {

    return <section style={{
        backgroundColor: preStyle.Color,
        width: preStyle.Width,
        height: preStyle.Height
    }} className={style.Body}>
        {children}
    </section>
}

export default Body;