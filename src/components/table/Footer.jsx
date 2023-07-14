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
                <th colspan="4" className="text-footer">
                    <button className="button-footer">&lt;&lt;</button>
                    <button className="button-footer">&lt;</button>
                    {
                        quantidade.map(
                            item => {
                                return <Button valor={item} acao={atualizar()} className={"button-footer"}/>
                            }
                        )
                    }
                    <button className="button-footer">&gt;</button>
                    <button className="button-footer">&gt;&gt;</button>
                </th>
            </tfoot>
        </>
    )
}

export default Footer;