import React, { ReactNode } from "react";
import * as styles from "./styles.module.css";

interface Props {
    children?: ReactNode;
    className?: string;
}

const Title = ({ children, className }: Props) => {
    return <h3 className={`${styles.title} ${className}`}>{children}</h3>;
};

export default Title;
