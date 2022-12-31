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
            {vertical && (
                <li>
                    <Link
                        activeClassName={styles.menuActiveLink}
                        className={styles.menuLink}
                        to="/"
                    >
                        home
                    </Link>
                </li>
            )}
            <li>
                <Link
                    activeClassName={styles.menuActiveLink}
                    className={styles.menuLink}
                    to="/about-me"
                >
                    about me
                </Link>
            </li>
            <li className={styles.roundedButton}>
                <Link
                    activeClassName={styles.menuActiveLink}
                    className={styles.menuLink}
                    to="/lets-talk"
                >
                    let's talk
                </Link>
            </li>
        </ul>
    );
};

export default Menu;
