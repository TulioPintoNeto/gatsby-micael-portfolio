import React from "react";
import * as styles from "./styles.module.css";

interface ImageProps {
    className?: string;
    src: string;
    alt: string;
}

export default function Image({ className, src, alt }: ImageProps) {
    return (
        <img className={`${className} ${styles.image}`} src={src} alt={alt} />
    );
}
