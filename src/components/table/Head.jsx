import React from "react";
import '/src/css/Head.css';

function Head({saldoTotal, saldoNoPeriodo}) {
    return  ( 
        <thead className="row">
            <tr colSpan="4" className="head-table">
                {
                    saldoNoPeriodo ?
                        <td className="text-head">Saldo total: R$ {saldoTotal}</td> :
                        <td className="text-head">Saldo total:</td>
                }
                        
                {
                    saldoNoPeriodo ?
                        <td className="text-head">Saldo no periodo: R$ {saldoNoPeriodo}</td> :
                        <td className="text-head">Saldo no periodo:</td>
                }
            </tr>
        </thead>
    )
}

export default Head;