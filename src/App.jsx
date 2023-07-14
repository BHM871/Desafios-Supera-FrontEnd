import React from "react";
import Form from "./components/form/Form";
import Table from "./components/table/Table";

function App(){
    return (
        <>
            <div>
                <Form metodo={"GET"} />
            </div>
            <div>
                <Table />
            </div>
        </>
    )
}

export default App