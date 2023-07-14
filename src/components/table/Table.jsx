import React from "react";
import Head from "./Head";
import Topics from "./Topics";
import Content from "./Content";
import Footer from "./Footer";
import '/src/css/Table.css';

function Table() {
    var index = 0;
    const list = [
        {dataTransacao: "20/03/2022", valorTransacao: 567.73,  tipoTransacao: "Deposito",      nomeTransacionado: "Fulano"},
        {dataTransacao: "21/03/2022", valorTransacao: -243.10, tipoTransacao: "Saque",         nomeTransacionado: "Fulano"},
        {dataTransacao: "22/03/2022", valorTransacao: 34.40,   tipoTransacao: "Transferencia", nomeTransacionado: "Fulano"},
        {dataTransacao: "22/03/2022", valorTransacao: 34.40,   tipoTransacao: "Transferencia", nomeTransacionado: "Fulano"},
        {dataTransacao: "22/03/2022", valorTransacao: 34.40,   tipoTransacao: "Transferencia", nomeTransacionado: "Fulano"},
        {dataTransacao: "22/03/2022", valorTransacao: 34.40,   tipoTransacao: "Transferencia", nomeTransacionado: "Fulano"},
        {dataTransacao: "22/03/2022", valorTransacao: 34.40,   tipoTransacao: "Transferencia", nomeTransacionado: "Fulano"},
        {dataTransacao: "23/03/2022", valorTransacao: 8764.73, tipoTransacao: "Transferencia", nomeTransacionado: "Fulano"}
    ];

    return (
        <>
            <table >
                <Head saldoTotal={50} saldoNoPeriodo={100}/>
                <Topics />
                {
                    list.map(
                        item => {
                            if(index < 6){
                                index++;
                                return <Content dataTransacao={item.dataTransacao} valorTransacao={item.valorTransacao} tipoTransacao={item.tipoTransacao} nomeTransacionado={item.nomeTransacionado}/>
                            }
                        }
                    )
                }
                <Footer tamanhoDaLista={list.length} />
            </table>
        </>
    )
}

export default Table;