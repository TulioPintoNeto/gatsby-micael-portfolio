import React from "react";
import * as styles from "./styles.module.css";

import { whiteDot } from "../../../ui/white-dot.module.css";

export default function Portfolio() {
    return (
        <section>
            <div className={styles.portfolioHeader}>
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
                    <p>
                        take a look in my most recent work, feel free <br /> to
                        share any thoughts and ask anything.
                    </p>
                </div>
            </div>
        </section>
    );
}