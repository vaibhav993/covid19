import React, { memo } from "react";

import "./index.scss";

const Table2 = memo(() => {
    return (
        <table className="">
            <thead className="">
                <tr>
                    <th className="sticky">State</th>
                    <th className="sticky">C</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Pune</td>
                    <td>193</td>
                </tr>
                <tr>
                    <td>Mumbai</td>
                    <td>193</td>
                </tr>
            </tbody>
        </table>
    )
});

export default Table2;