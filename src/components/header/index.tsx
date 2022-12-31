import React, { useState } from "react";
import { Link } from "gatsby";
import * as styles from "./styles.module.css";
import { container } from "../../ui/container.module.css";
import { Button, Drawer } from "@mui/material";
import Images from "../../core/constants/images";
import Menu from "../menu";

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (value: boolean) => {
        return () => {
            setIsDrawerOpen(value);
        };
    };

    return (
        <div className={container}>
            <header className={styles.header}>
                <Link to="/">
                    <h1>micael i. porto</h1>
                </Link>

                <nav>
                    <Button
                        className={styles.drawerButton}
                        onClick={toggleDrawer(true)}
                    >
                        <img
                            src={Images.menu}
                            alt="Ícone hamburguer para abrir o menu"
                        />
                    </Button>
                    <div className={styles.desktopMenu}>
                        <Menu />
                    </div>
                    <Drawer
                        anchor="right"
                        className={styles.drawer}
                        onClose={toggleDrawer(false)}
                        open={isDrawerOpen}
                    >
                        <div className={styles.drawer__row}>
                            <h2 className={styles.drawer__title}>
                                micael i. porto
                            </h2>
                            <Button onClick={toggleDrawer(false)}>
                                <img
                                    src={Images.close}
                                    alt="Ícone para fechar o menu"
                                />
                            </Button>
                        </div>
                        <Menu vertical />
                    </Drawer>
                </nav>
            </header>
        </div>
    );
}
