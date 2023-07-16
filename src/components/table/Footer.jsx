import React from "react";
import Button from "./Button";
import '/src/css/Footer.css';

function Footer({tamanhoDaLista}) {
    var items = tamanhoDaLista / 6;
    tamanhoDaLista % 6 > 0 ? ++items : items;

    let quantidade = [];
    for(var i = 1; i <= items; i++){
        quantidade.push(i);
    }

    function atualizar(){}

    return(
        <>
            <tfoot className="row">
                <th colSpan="4" className="text-footer">
                    <Button valor={"<<"} acao={atualizar()} className={"button-footer"}/>
                    <Button valor={"<"} acao={atualizar()} className={"button-footer"}/>
                    {
                        quantidade.map(
                            item => {
                                return <Button valor={item} acao={atualizar()} className={"button-footer"}/>
                            }
                        )
                    }
                    <Button valor={">"} acao={atualizar()} className={"button-footer"}/>
                    <Button valor={">>"} acao={atualizar()} className={"button-footer"}/>
                </th>
            </tfoot>
        </>
    )
}

export default Footer;