import React, { useState } from "react";
import Head from "./Head";
import Topics from "./Topics";
import Content from "./Content";
import Footer from "./Footer";
import "../../css/Table.css";

import { TransferData } from "../../interfaces/TransferData";

function Table({ data, update, page}) {

    const indexI = (page * 6 - 6);
    const indexF = (page * 6 - 1);

    return (
        <>
            <table>
                <Head allBalance={null} balanceInInterval={null}/>
                <tbody>
                    <Topics />
                    {
                        data?.map(  
                            (item: TransferData, i: number) => {
                                if(i >= indexI && i <= indexF){
                                    return <Content
                                        key={item.id}
                                        transferDate={item.transferDate} 
                                        value={item.value?.toFixed(2)} 
                                        type={item.type?.toUpperCase()} 
                                        operatorName={item.operatorName ? item.operatorName : ""}/>
                                }
                            }
                        )
                    }
                </tbody>
                <Footer listLength={data?.length} update={update} />
            </table>
        </>
    )
}

export default Table;