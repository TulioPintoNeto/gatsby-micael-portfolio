import React from "react";
import * as styles from "./styles.module.css";

import { whiteDot } from "../../ui/white-dot.module.css";

export default function Portfolio() {
    return (
        <section className={styles.portfolio}>
            <header>
                <div>
                    <h3>
                        <p>lastest</p>
                        <p>work</p>
                    </h3>
                    <div
                        className={`${whiteDot} ${styles.smallerDevicesOnly}`}
                    />
                </div>
                <div>
                    <div
                        className={`${whiteDot} ${styles.mediumOrHigherDevices}`}
                    />
                    <p className={styles.portfolio__paragraph}>
                        take a look in my most recent work, feel free <br /> to
                        share any thoughts and ask anything.
                    </p>
                </div>
            </header>
            <section>
                <img src="./photo-teste.jpg" />
                <h4>Lounge</h4>
                <p className={styles.portfolio__paragraph}>
                    A solution for companies that seek to adapt their routines
                    to the digital world.
                </p>
            </section>
            <div className={styles.portfolio__row}>
                <section>
                    <img src="./photo-teste.jpg" />
                    <h4>Startup Emotus</h4>
                    <p className={styles.portfolio__paragraph}>
                        Plataform developed to better organize budgets and
                        inventory related to solar energy industry.
                    </p>
                </section>
                <section>
                    <div
                        className={`${whiteDot} ${styles.mediumOrHigherDevices}`}
                    />
                    <img src="./photo-teste.jpg" />
                    <h4>Cobalto</h4>
                    <p className={styles.portfolio__paragraph}>
                        A solution for companies that seek to adapt their
                        routines to the digital world.
                    </p>
                </section>
            </div>
        </section>
    );
}
