import React from "react";
import styles from "../Styles/Header.module.css"
const Header = ({ submenus = [] }) => {
    return <header className={styles.header}>
        <div className={styles.contentLogo}></div>
        <nav className={styles.contentOptions}>
            <ul className={styles.list}>
                {
                    submenus.map((ele, pos) => <li key={pos}>{ele}</li>)
                }
            </ul>
        </nav>
    </header>

}
export default Header;