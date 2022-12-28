import React from "react";
import PortfolioParagraph from "./../portfolio-paragraph/index";

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
        <section>
            <img src={imgSrc} />
            <h4>{title}</h4>
            <PortfolioParagraph className={paragraphClassName}>
                {text}
            </PortfolioParagraph>
        </section>
    );
};

export default PortfolioSection;
