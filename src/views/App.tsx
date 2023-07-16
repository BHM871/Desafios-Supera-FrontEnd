import React, { useState } from "react";
import Form from "../components/form/Form";
import Table from "../components/table/Table";
import '../css/App.css';

const API_URL = "http://localhost:8080/";

function prepareUrl(initial: String, final: String, name: String){
    return API_URL + "filters?" + (initial ? "initial=" + initial : "") + (final ? "&fianl=" + final : "") + (name ? "&name=" + name : "");
};

function App(){

    //Hooks
    function fetchData(){
        fetch(API_URL)
        .then(res => res.json())
        .then(resConv => setData(resConv) )
    }
    
    function fetchDataWithFilter(initial: String, final: String, name: String){
        let resData = [];
    
        fetch(prepareUrl(initial, final, name))
        .then(res => res.json())
        .then(resConv => setData(resConv))
    }

    //UseState
    const [data, setData] = useState([])
    const [initial, setInitial] = useState("")
    const [final, setFinal] = useState("")
    const [name, setName] = useState("")

    //Actions
    function action(){
        if(initial != "" || final != "" || name != ""){
            const i = initial != "" ? (new Date(initial)).getMilliseconds().toString() : ""
            const f = final != "" ? (new Date(final)).getMilliseconds().toString() : ""

            fetchDataWithFilter(i, f, name)
        } else {
            fetchData()
        }
    }

    const event = (e) => {
        switch (e.target.name) {
            case "initial": setInitial(e.target.value);
            case "fianl": setFinal(e.target.value);
            case "name": setName(e.target.value);
        }
    }


    //Views
    return (
        <>
            <div className="father-div">
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