import * as React from "react";
import Header from "../components/header";
import Description from "../components/home/description";
import Portfolio from "../components/home/portfolio";
import { container } from "../ui/container.module.css";

import "../styles";

export default function Home() {
    return (
        <>
            <Header />
            <main className={container}>
                <Description />
                <Portfolio />
            </main>
        </>
    );
}
