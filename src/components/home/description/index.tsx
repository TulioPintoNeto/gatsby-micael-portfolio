import React from "react";
import Image from "../../image";
import * as styles from "./styles.module.css";
import { container } from "../../../ui/container.module.css";

export default function Description() {
    return (
        <section className={`${container} ${styles.descriptionSection}`}>
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
                        alt="Protography of Micael Ilieff"
                    />
                </div>
            </div>
        </section>
    );
}
