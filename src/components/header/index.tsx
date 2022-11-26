import React from "react";
import { Link } from "gatsby";
import * as styles from "./styles.module.css";
import { container } from "../../ui/container.module.css";

export default function Header() {
    return (
        <div className={container}>
            <header className={styles.header}>
                <Link to="/">
                    <h1>micael i. porto</h1>
                </Link>

                <nav>
                    <ul>
                        <li>
                            <Link to="about-me">about me</Link>
                        </li>
                        <li className={styles.roundedButton}>
                            <Link to="lets-talk">let's talk</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
