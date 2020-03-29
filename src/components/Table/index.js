import React, { memo } from "react";

import "./index.scss";

const Table = memo(({ headers, bodyData }) => {
    return <>
        {
            bodyData.length > 0
            ? (
                <table className="">
                    <thead className="">
                        <tr>
                            {
                                headers.map(({ data, mobileData}, i) => (
                                    <th key={`header_${i}`} className={`sticky ${data}`}>{
                                        window.innerWidth <= 600
                                            ? mobileData
                                            : data
                                    }</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bodyData.map((rowData, i) => (
                                <tr key={`row_${i}`}>{
                                    rowData.map(((d, i) => <td key={`cell_${i}`}>{d}</td>))
                                }</tr>
                            ))
                        }
                    </tbody>
                </table>
            )
            : null
        }
    </>
});

export default Table;