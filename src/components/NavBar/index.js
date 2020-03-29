import React, { memo, useState } from "react";
import { Link } from "react-router-dom";

import "./index.scss";
const FA = require('react-fontawesome');

const NavBar = memo(({ tabsData }) => {
    const [ activeLink, setActiveLink ] = useState(tabsData[0].label);

    const onLinkClicked = (label) => {
        const activeTab = tabsData.find(o => o.label === label);

        if(activeTab)
            setActiveLink(activeTab.label);
    }

    return (
        <nav className="main-nav navbar">
            <ul className="navbar-nav flex-row justify-content-around">
                {
                    tabsData.map(({ label, path, icon }) => {
                        const isActive = label === activeLink;
                        return (
                            <li className={isActive ? "nav-item ml-lg-5 ml-sm-4 active" : "nav-item ml-lg-5 ml-sm-4"} key={`nav_${label}`}>
                                <Link className="nav-link text-uppercase" to={`/${path}`} onClick={e => onLinkClicked(label)}>
                                    {
                                        icon && <FA className="nav-icon link" name={icon}/>
                                    }
                                    {label}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
});

export default NavBar;