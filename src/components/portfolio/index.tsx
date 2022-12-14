import React from "react";
import * as styles from "./styles.module.css";
import { whiteDot } from "../../ui/dot.module.css";
import PortfolioParagraph from "./../portfolio-paragraph";
import PortfolioSection from "./../portfolio-section";
import Title from "../title";

export default function Portfolio() {
    const smallerDevicesWhiteDot = () => {
        return <div className={`${whiteDot} ${styles.smallerDevicesOnly}`} />;
    };

    return (
        <section className={styles.portfolio}>
            <header>
                <div>
                    <Title className={styles.portfolio__title}>
                        <p>lastest</p>
                        <p>work</p>
                    </Title>
                    {smallerDevicesWhiteDot()}
                </div>
                <div>
                    <div
                        className={`${whiteDot} ${styles.mediumOrHigherDevices}`}
                    />
                    <PortfolioParagraph className={styles.headerParagraph}>
                        take a look in my most recent work, feel free <br /> to
                        share any thoughts and ask anything.
                    </PortfolioParagraph>
                </div>
            </header>
            <PortfolioSection
                imgSrc="./photo-teste.jpg"
                paragraphClassName={styles.portfolioSection__paragraph}
                title="Lounge"
                text="A solution for companies that seek to adapt their routines to the digital world."
            />
            <div className={styles.portfolio__row}>
                <PortfolioSection
                    imgSrc="./photo-teste.jpg"
                    paragraphClassName={styles.portfolioSection__paragraph}
                    title="Startup Emotus"
                    text="Plataform developed to better organize budgets and inventory related to solar energy industry."
                />
                <div className={styles.marginBottomSmallDevices}>
                    <div
                        className={`${whiteDot} ${styles.mediumOrHigherDevices}`}
                    />
                    <PortfolioSection
                        imgSrc="./photo-teste.jpg"
                        paragraphClassName={styles.portfolioSection__paragraph}
                        title="Cobalto"
                        text="Educacional plataform for university students to monitor their activities and performance,"
                    />
                </div>
            </div>
            {smallerDevicesWhiteDot()}
        </section>
    );
}
