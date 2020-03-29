import React, { memo } from "react";

import "./index.scss";

const Footer = memo(() => {
    return (
        <footer>
            <div className="copyright-content">
            	Developed & Maintained by <strong>Vaibhav Botre</strong>
            </div>
        </footer>
    )
});

export default Footer;