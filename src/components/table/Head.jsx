import React from "react";
import '/src/css/Head.css';

function Head({allBalance, balanceInInterval}) {
    return  ( 
        <thead className="row">
            <tr colSpan="4" className="head-table">
                {
                    allBalance ?
                        <td className="text-head">Saldo total: R$ {allBalance}</td> :
                        <td className="text-head">Saldo total:</td>
                }
                        
                {
                    balanceInInterval ?
                        <td className="text-head">Saldo no periodo: R$ {balanceInInterval}</td> :
                        <td className="text-head">Saldo no periodo:</td>
                }
            </tr>
        </thead>
    )
}

export default Head;