import React, { useEffect, useState } from "react";
import Form from "../components/form/Form";
import Table from "../components/table/Table";
import '../css/App.css';

import { useTransferData } from "../hooks/useTransferData";
import { useTransferFilterData } from "../hooks/useTransferFilterData";

function App(){

    //UseState
    const [data, setData] = useState([])
    const [initial, setInitial] = useState("")
    const [final, setFinal] = useState("")
    const [name, setName] = useState("")

    //Actions
    const action = () => {
        if(initial != "" && final != "" & name != ""){
            const i = (new Date(initial)).getMilliseconds()
            const f = (new Date(final)).getMilliseconds()

            setData(
                useTransferFilterData(i, f, name).data
            )
        } else {
            setData(
                useTransferData()
            )
        }
    }

    const event = (e) => {
        switch (e.target.name) {
            case "initial": setInitial(e.target.value)
            case "fianl": setFinal(e.target.value)
            case "name": setName(e.target.value)
        }
    }

    const fetchData = () => {
        setData(
            useTransferData().data
        )
    }

    //Views
    return (
        <>
            <div className="father-div" onLoad={fetchData}>
                <div className="children-div">
                    <Form action={action} event={event}/>
                </div>
                <div className="children-div">
                    <Table data={data} />
                </div>
            </div>
        </>
    )
}

export default App