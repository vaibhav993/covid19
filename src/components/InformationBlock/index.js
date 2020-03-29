import React, { memo } from "react";

import "./index.scss";

const InformationBlock = memo(({ title, delta, count }) => {
    return (
        <div className="information-block col-lg-3 col-md-3 col-6">
            <div className={"level-item ".concat(title)}>
                <h5>{title}</h5>
                <img src={`./img/${title}.png`} alt={title}/>
                <h4>{delta ? `[+${delta}]` : '\u00A0'}</h4>
                <h1>{count}</h1>
            </div>
        </div>
    )
});

export default InformationBlock;