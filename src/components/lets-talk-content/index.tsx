import React from "react";
import * as styles from "./styles.module.css";
import PageContent from "./../page-content/index";

const LetsTalkContent = () => {
    return (
        <PageContent title="let's talk">
            <div className={styles.letsTalk}>
                <p>
                    <a href="mailto: micaelilieff@gmail.com">
                        micaelilieff@gmail.com
                    </a>
                </p>
                <p>
                    <a href="tel: +5553981416508">+55 53 98141-6508</a>
                </p>
            </div>
        </PageContent>
    );
};

export default LetsTalkContent;
