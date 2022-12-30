import React from "react";
import * as styles from "./styles.module.css";
import PageContent from "./../page-content/index";

const AboutMeContent = () => {
    return (
        <PageContent title="hello!">
            <p className={styles.aboutMe__paragraph}>
                Ever since I was a little kid I've been{" "}
                <span>fascinated by technology</span>. I have always been
                intrigued about <span>how things work</span>, and would reverse
                engineer everything I touched, which meant I would often break
                the appliances only to later try to fix them in desperation. All
                this curiosity translated to a{" "}
                <span>
                    passion for studying and getting to know more about
                    everything
                </span>
                .
            </p>
            <p className={styles.aboutMe__paragraph}>
                Design couldn't be different; the interaction, the use and the
                human relationship with{" "}
                <span>technology is always evolving</span>, the way we design
                and predict user behaviour is always changing. I've gotten close
                to this subject because of my curiosity and{" "}
                <span>desire to learn</span> more, always{" "}
                <span>seeking the best solution</span> to diverse challenges,
                talking about product design or life in general.
            </p>
            <p className={styles.aboutMe__paragraph}>
                If you also have this thirst for challenges and pursuing the
                different, let's have a chat, share some knowledge and
                experiences. Who knows, maybe we can come up with a plan to{" "}
                <span>rule the world together</span>.
            </p>
        </PageContent>
    );
};

export default AboutMeContent;
