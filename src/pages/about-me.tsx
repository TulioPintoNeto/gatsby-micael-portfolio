import React from "react";
import Page from "./../components/page";
import { container } from "../ui/container.module.css";
import AboutMeContent from "../components/about-me-content";

const AboutMe = () => {
    return (
        <Page>
            <main className={container}>
                <AboutMeContent />
            </main>
        </Page>
    );
};

export default AboutMe;
