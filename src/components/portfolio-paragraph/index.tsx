import React, { ReactNode } from "react";
import * as styles from "./styles.module.css";

interface Props {
    children: ReactNode;
    className: string;
}

const PortfolioParagraph = ({ children, className }: Props) => {
    return (
        <p className={`${styles.portfolioParagraph} ${className}`}>
            {children}
        </p>
    );
};

export default PortfolioParagraph;
