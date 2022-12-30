import * as React from "react";
import Description from "../components/description";
import Portfolio from "../components/portfolio";
import { container } from "../ui/container.module.css";
import "../styles";
import Page from "../components/page";

const Home = () => {
    return (
        <Page>
            <main className={container}>
                <Description />
                <Portfolio />
            </main>
        </Page>
    );
};

export default Home;
