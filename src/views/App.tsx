import React, { useState, useEffect } from "react";
import Form from "../components/form/Form";
import Table from "../components/table/Table";
import '../css/App.css';

import { TransferData } from "../interfaces/TransferData";
import { useTransferData } from "../hooks/useTransferData";

const API_URL = "http://localhost:8080/";
const HOUR = " 00:00:00";

function prepareUrl(initial: String, final: String, name: String){
    return API_URL + "filters?" +  
        (initial ? "initial=" + initial : "") + 
        (final ? "&final=" + final : "") + 
        (name ? "&name=" + name : "");
}

function getLastPage(data: TransferData[]) {
    const lastPage = data?.length % 6 == 0 ? data?.length / 6 : (data?.length / 6) + 1
    return parseInt(lastPage.toString(), 10);
}

function allBalance(name: String, isAction: boolean){
    const { dataa } = useTransferData()
    let allBalance = 0;

    if(name != "" && isAction) {
        dataa?.map(
            item => {
                if(item.operatorName == name){
                    allBalance += item.value
                }
            }
        )
    }

    return allBalance == 0 ? null : allBalance.toFixed(2);
}

function balanceInInterval(data: TransferData[], initial: String, final: String, isAction: boolean){
    var balanceInInterval = 0;

    if((initial != "" || final != "") && isAction) {
        data.map(
            item => {
                balanceInInterval += item.value
            }
        )
    }
    
    return balanceInInterval == 0 ? null : balanceInInterval.toFixed(2)
}

function App(){

    //Hooks
    function fetchData(){
        fetch(API_URL)
        .then(res => res.json())
        .then(resConv => setData(resConv));
    }
    
    function fetchDataWithFilter(initial: String, final: String, name: String){
        fetch(prepareUrl(initial, final, name))
        .then(res => res.json())
        .then(resConv => setData(resConv));
    }

    //UseState
    const [data, setData] = useState<TransferData[]>([]);
    const [initial, setInitial] = useState("");
    const [final, setFinal] = useState("");
    const [name, setName] = useState("");
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [isAction, setIsAction] = useState(false)

    //UseEffect
    useEffect(() => {
        fetchData()
        
        setLastPage(getLastPage(data))
    }, [])

    //Actions
    const action = () => {
        setIsAction(true)
        if(initial != "" || final != "" || name != ""){
            const i = 
                initial != "" ? (new Date(initial + HOUR)).getTime().toString() : "";
            const f = 
                final != "" ? (new Date(final + HOUR)).getTime().toString() : "";

            fetchDataWithFilter(i, f, name)
        } else {
            fetchData()
        }
        
        setLastPage(getLastPage(data))
    }

    const event = (e) => {
        setIsAction(false)
        switch (e.target.name) {
            case "initial": setInitial(e.target.value)
                break;
            case "final": setFinal(e.target.value)
                break;
            case "name": setName(e.target.value)
                break;
        }
    }

    const update = (e) => {
        switch (e.target.value) {
            case "<<": {
                setPage(1);
            }
                break;

            case "<": {
                if(page - 1 > 0){
                    setPage(page - 1);
                }
            }
                break;

            case ">": {
                if(page + 1 < lastPage){
                    setPage(page + 1);
                }
            }
                break;

            case ">>": {
                setPage(lastPage);
            }
                break;

            default:
                setPage(e.target.value)
                break;
        }
    }

    //Views
    return (
        <>
            <div className="father-div">
                <div className="children-div">
                    <Form 
                        action={action} 
                        event={event}/>
                </div>
                <div className="children-div">
                    <Table 
                        data={data} 
                        update={update} 
                        page={page} 
                        allBalance={allBalance(name, isAction)} 
                        balanceInInterval={balanceInInterval(data, initial, final, isAction)} />
                </div>
            </div>
        </>
    )
}

export default App