import { Link } from "gatsby-link";
import React from "react";
import * as styles from "./styles.module.css";
import { blackDot } from "../../ui/dot.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__row}>
                <h2>micael i. porto</h2>
                <div className={blackDot} />
            </div>
            <p>
                <a className={styles.myResumeLink} href="#" target="_blank">
                    My Resume
                </a>
            </p>
            <div className={styles.footer__rowEnd}>
                <div className={styles.footer__column}>
                    <div className={styles.footer__columnBox}>
                        <p>
                            <a
                                href="https://www.linkedin.com/in/micael-ilieff-porto-71100a193/"
                                target="_blank"
                            >
                                Linked In
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://medium.com/@micaelilieff"
                                target="_blank"
                            >
                                Medium
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://dribbble.com/micailieff"
                                target="_blank"
                            >
                                Dribbble
                            </a>
                        </p>
                    </div>
                    <div className={styles.footer__columnBox}>
                        <p>
                            <Link to="#">Privacy Policy</Link>
                        </p>
                        <p>
                            <Link to="#">Cookies Policy</Link>
                        </p>
                    </div>
                </div>
                <div className={styles.footer__column}>
                    <div className={styles.footer__columnBox}>
                        <address>
                            Pelotas <br />
                            Rio Grande do Sul, Brazil
                        </address>
                    </div>
                    <div className={styles.footer__columnBox}>
                        <p>© 2022 Micael Ilieff Porto</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
