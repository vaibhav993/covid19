import React, { useEffect, useState } from 'react';

import InformationBlock from "../../components/InformationBlock";
import Table from "../../components/Table";
import DistrictWiseTable from "./DistrictWiseTable";
import "./index.scss";

const dashKeyValue = [
    {
        value: "confirmed",
        label: "total",
        deltaKey: "confirmeddelta"
    },
    {
        value: "active",
        label: "active",
        deltaKey: ""
    },{
        value: "recovered",
        label: "cured",
        deltaKey: "recovereddelta"
    },
    {
        value: "deaths",
        label: "death",
        deltaKey: "deceaseddelta"
    }
];

const stateTableHeaderdata = [
    {
        data: "State",
        mobileData: "State"
    },
    {
        data: "total",
        mobileData: "T"
    },
    {
        data: "active",
        mobileData: "A"
    },
    {
        data: "cured",
        mobileData: "C"
    },
    {
        data: "death",
        mobileData: "D"
    }
]

const getDashboardData = (data) => {
    const dashData = data && data.statewise && data.statewise[0];
    const deltaData = data && data.key_values && data.key_values[0];

    return dashKeyValue.map(({ value, label, deltaKey}) => ({
        title: label,
        count: dashData ? dashData[value] : "0",
        delta: !deltaKey ? "" : deltaData ? deltaData[deltaKey] : "0"
    }));
}

const getStateTableData = (data) => {
    const tableData = data && data.statewise && data.statewise.slice(1);
   
    return tableData
        .filter(({ confirmed }) => confirmed != 0)
        .sort((a,b) => b.confirmed - a.confirmed)
        .map((data, index) => ([
            data.state,
            data.confirmed,
            data.active,
            data.recovered,
            data.deaths
        ]))
}

const Home = React.memo(() => {
    const [ appData, setData ] = useState({
        dash: getDashboardData(null),
        statesData: []
    });

    useEffect(() => {
        fetch("https://api.covid19india.org/data.json")
            .then(data => data.json())
            .then(data => {
                const _dashData = getDashboardData(data);
                const _statesData = getStateTableData(data);
                setData({
                    ...appData,
                    dash: _dashData,
                    statesData: _statesData
                });
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <div className="row m-0">
                {
                    appData.dash.map((data, index) => (
                        <InformationBlock key={index} {...data} />
                    ))
                }
            </div>
            <div className="row m-0 my-5">
                <div className="cases col-lg-7 col-12">
                    <h1 className="px-4">State wise Status</h1>
                    <div className="content px-4">
                        <Table headers={stateTableHeaderdata} bodyData={appData.statesData}/>
                    </div>
                </div>
                <div className="cases col-lg-5 col-12">
                    <h1 className="px-4">District wise Status</h1>
                    <div className="content px-4">
                        <DistrictWiseTable />
                    </div>
                </div>
            </div>
        </>
    );
});

export default Home;
