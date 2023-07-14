import React from "react";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
import './css/App.css';

function App(){
    return (
        <>
            <div className="father-div">
                <div className="children-div">
                    <Form metodo={"GET"} />
                </div>
                <div className="children-div">
                    <Table />
                </div>
            </div>
        </>
    )
}

export default App