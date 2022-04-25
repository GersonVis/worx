import React from "react";
import style from "../Styles/Button.module.css";
const Button = ({ children, text, preStyle = {
    Width: "100%",
    Height: "100%",
    Color: "white",
    JustifyContent: "center",
    AlignItems: "center",
    TextColor: "black"
} }) => {
    return <button style={{
        backgroundColor: preStyle.Color,
        width: preStyle.Width,
        height: preStyle.Height,
        justifyContent: preStyle.JustifyContent,
        alignItems: preStyle.AlignItems,
        color: preStyle.TextColor
    }} className={style.ContainerButton}>
        <b>{text}</b>
    </button>
}
export default Button;