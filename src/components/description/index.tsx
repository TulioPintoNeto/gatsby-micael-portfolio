import React from "react";
import Image from "../image";
import * as styles from "./styles.module.css";

export default function Description() {
    return (
        <section className={styles.descriptionSection}>
            <div className={styles.descriptionSection__row}>
                <div>
                    <p>
                        <span>
                            <b>Brazilian</b>. Digital Design student. Sports
                            lover.
                        </span>
                    </p>
                    <p>
                        <span>
                            I am passionate about <b>products</b> and{" "}
                            <b>fascinated by UI/UX</b> in all it's applications
                        </span>
                    </p>
                </div>
                <div>
                    <Image
                        src="/micael-ilieff.png"
                        alt="Photograph of Micael Ilieff"
                    />
                </div>
            </div>
        </section>
    );
}
