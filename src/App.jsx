import React from "react";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

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