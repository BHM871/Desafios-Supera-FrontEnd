import React from "react";
import '/src/css/Head.css';

function Head({saldoTotal, saldoNoPeriodo}) {
    return  ( 
        <thead className="row">
            <th colspan="4" className="head-table">
                <td className="text-head">Saldo total: R$ {saldoTotal}</td>
                <td className="text-head">Saldo no periodo: R$ {saldoNoPeriodo}</td>
            </th>
        </thead>
    )
}

export default Head;