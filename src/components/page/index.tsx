import React from "react";
import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";
import { container } from "../../ui/container.module.css";

interface Props {
    children?: ReactNode;
}

const Page = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main className={container}>{children}</main>
            <Footer />
        </>
    );
};
export default Page;
