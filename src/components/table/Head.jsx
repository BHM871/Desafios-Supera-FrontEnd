import React from "react";
import '/src/css/Head.css';

function Head({saldoTotal, saldoNoPeriodo}) {
    return  ( 
        <thead className="row">
            <tr colSpan="4" className="head-table">
                <td className="text-head">Saldo total: R$ {saldoTotal}</td>
                {
                    saldoNoPeriodo ?
                        <td className="text-head">Saldo no periodo: R$ {saldoNoPeriodo}</td> :
                        <></>
                }
            </tr>
        </thead>
    )
}

export default Head;