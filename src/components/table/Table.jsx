import React from "react";
import Head from "./Head";
import Topics from "./Topics";
import Content from "./Content";
import Footer from "./Footer";
import '/src/css/Table.css';

function Table() {
    return (
        <div>
            <table style={{width: '100%'}}>
                <Head saldoTotal={50} saldoNoPeriodo={100}/>
                <Topics />
                <Content dataTransacao={"25/02/2019"} valorTransacao={504.23} tipoTransacao={"Deposito"} nomeTransacionado={"Fulano"}/>
                <Footer />
            </table>
        </div>
    )
}

export default Table;