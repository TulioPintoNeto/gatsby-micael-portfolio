import * as React from "react";
import Description from "../components/description";
import Portfolio from "../components/portfolio";
import "../styles";
import Page from "../components/page";

const Home = () => {
    return (
        <Page>
            <Description />
            <Portfolio />
        </Page>
    );
};

export default Home;
