import React from "react";
import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";

interface Props {
    children?: ReactNode;
}

const Page = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};
export default Page;
