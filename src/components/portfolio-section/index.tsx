import React from "react";
import PortfolioParagraph from "./../portfolio-paragraph";
import * as styles from "./styles.module.css";

interface Props {
    imgSrc: string;
    text: string;
    title: string;
    paragraphClassName?: string;
}

const PortfolioSection = ({
    imgSrc,
    text,
    title,
    paragraphClassName,
}: Props) => {
    return (
        <section className={styles.portfolioSection}>
            <div className={styles.portfolioSection__imgWrapper}>
                <img src={imgSrc} />
            </div>
            <h4>{title}</h4>
            <PortfolioParagraph className={paragraphClassName}>
                {text}
            </PortfolioParagraph>
        </section>
    );
};

export default PortfolioSection;
