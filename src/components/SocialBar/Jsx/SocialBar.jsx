import React from "react";
import style from "../Styles/SocialBar.module.css";


const SocialBar = ({ text = "FOLLOW US", preClass = "Normal", preStyle = {
    Width: "200px;",
    Height: "30px",
    Color: "white",
    JustifyContent: "center",
    AlignItems: "center",
    TextColor: "black"
}, children}) => {

    return <section className={style.SocialBar}>
        <div className={style.ContentSocialBar+" "+style.Normal} style={{
            backgroundColor: preStyle.Color,
            width: preStyle.Width,
            height: preStyle.Height,
            justifyContent: preStyle.JustifyContent,
            alignItems: preStyle.AlignItems,
            color: preStyle.TextColor
        }}><b className={style.TextAppBar}>{text}</b>{children}</div>
    </section>
}
export default SocialBar;