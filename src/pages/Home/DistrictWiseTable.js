import React, { useState, useEffect } from 'react';

import Dropdown from "../../components/DropDown";
import Table from "../../components/Table";

const districtTableHeaderdata = [
    {
        data: "district",
        mobileData: "district"
    },
    {
        data: "total",
        mobileData: "T"
    }
];

const DistrictWiseTable = React.memo(() => {
    const [district, setDistrict] = useState("default");
    const [districtList, setDistrictList] = useState([]);
    const [ alldata, setData ] = useState({})

    useEffect(() => {
        fetch("https://api.covid19india.org/state_district_wise.json")
            .then(data => data.json())
            .then(data => {
                const normalizedData = Object.keys(data).reduce((acc, val) => {
                    const districtData = data[val].districtData;
                    const districtTableData = Object.keys(districtData).map(district => [
                        district,
                        districtData[district].confirmed
                    ]);

                    return {
                        ...acc,
                        [val]: districtTableData
                    }
                }, {});
                const normalizedDistrictList = Object.keys(data).map(o => ({
                    value: o,
                    label: o.toLocaleUpperCase()
                }));
                setData({
                    ...alldata,
                    ...normalizedData
                });
                setDistrictList([...normalizedDistrictList]);
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <>
            <Dropdown 
                name="departure"
                options={districtList}
                defaultValue="Select District"
                value={district}
                onChange={setDistrict}
            />
            <Table headers={districtTableHeaderdata} bodyData={alldata[district] || []}/>
        </>
    );
});

export default DistrictWiseTable;
