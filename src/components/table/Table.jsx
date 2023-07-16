import React from "react";
import Head from "./Head";
import Topics from "./Topics";
import Content from "./Content";
import Footer from "./Footer";
import "../../css/Table.css";

function Table({ data }) {
    var index = 0;

    return (
        <>
            <table >
                <Head saldoTotal={50} saldoNoPeriodo={100}/>
                <tbody>
                    <Topics />
                    {
                        data?.map(
                            item => {
                                if(index < 6){
                                    index++;
                                    return <Content 
                                        dataTransacao={item.transferDate} 
                                        valorTransacao={item.value?.toFixed(2)} 
                                        tipoTransacao={item.type?.toUpperCase()} 
                                        nomeTransacionado={item.operatorName ? item.operatorName : ""}/>
                                }
                            }
                        )
                    }
                </tbody>
                <Footer tamanhoDaLista={data?.length} />
            </table>
        </>
    )
}

function dateFormatteToString(date){
    if(date == null){
        return
    }

    var day = "";
    if(date.getDate() < 10){
        day = "0" + date?.getDate();
    } else {
        day = date?.getDate() + "";
    }

    var month = "";
    if(date?.getMonth() < 9){
        month = "0" + (date?.getMonth() + 1);
    } else {
        month = (date?.getMonth() + 1) + "";
    }

    return day+"/" + month + "/" + date?.getFullYear();
}

export default Table;