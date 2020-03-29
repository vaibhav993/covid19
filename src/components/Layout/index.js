import React, { memo } from "react";

import Header from "../Header";
import Footer from "../Footer";
import NavBar from "../NavBar"; 
import "./index.scss";

const tabsData = [
    {
        label: "HOME",
        path: "",
    },
    {
        label: "ABOUT",
        path: "about"
    }
]

const Layout = memo(({ children }) => {
    return (
        <>
            <Header>
                <NavBar tabsData={tabsData}/>
            </Header>
            <main className="container main-container">
                {children}
            </main>
            <Footer/>
        </>
    )
});

export default Layout;