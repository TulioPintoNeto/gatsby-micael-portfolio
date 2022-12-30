import { Link } from "gatsby";
import React from "react";
import * as styles from "./styles.module.css";

interface Props {
    vertical?: boolean;
}

const Menu = ({ vertical = false }: Props) => {
    const mapsStyleFromProps = (): string => {
        return vertical ? styles.menuVertical : "";
    };

    return (
        <ul className={`${styles.menu} ${mapsStyleFromProps()}`}>
            <li>
                <Link to="/about-me">about me</Link>
            </li>
            <li className={styles.roundedButton}>
                <Link to="/lets-talk">let's talk</Link>
            </li>
        </ul>
    );
};

export default Menu;
