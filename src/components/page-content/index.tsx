import React, { ReactNode } from "react";
import * as styles from "./styles.module.css";
import Title from "../title";
import { whiteDot } from "../../ui/dot.module.css";

interface Props {
    children: ReactNode;
    title: string;
}

const PageContent = ({ children, title }: Props) => {
    return (
        <>
            <div className={styles.pageContent__header}>
                <Title>{title}</Title>
                <div className={whiteDot} />
            </div>
            {children}
        </>
    );
};

export default PageContent;
