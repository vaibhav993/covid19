import React, { memo } from "react";

import "./index.scss";

const Header = memo(({ children }) => {
    return (
        <header className="d-flex flex-sm-row flex-column px-lg-5 p-3 shadow">
            <div className="d-flex justify-content-center ml-lg-5">
                <h1 className="main-header">
                    COVID-19 Tracker
                </h1>
            </div>
            {
                children
            }
        </header>
    )
});

export default Header;