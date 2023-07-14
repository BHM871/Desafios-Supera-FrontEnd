import React from "react";
import Form from "./form/Form";
import Table from "./table/Table";
import '/src/css/App.css';

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