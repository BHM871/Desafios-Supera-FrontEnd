import React from "react";
import Button from "./Button";
import '/src/css/Footer.css';

function Footer({tamanhoDaLista, update}) {
    var items = tamanhoDaLista / 6;
    tamanhoDaLista % 6 > 0 ? ++items : items;

    let quantidade = [];
    for(var i = 1; i <= items; i++){
        quantidade.push(i);
    }

    return(
        <>
            <tfoot className="row">
                <th colSpan="4" className="text-footer">
                        <Button valor={"<<"} acao={update} className={"button-footer"} />
                        <Button valor={"<"} acao={update} className={"button-footer"} />
                        {
                            quantidade.map(
                                item => {
                                    return <Button key={item} valor={item} acao={update} className={"button-footer"} />
                                }
                            )
                        }
                        <Button valor={">"} acao={update} className={"button-footer"} />
                        <Button valor={">>"} acao={update} className={"button-footer"} />
                </th>
            </tfoot>
        </>
    )
}

export default Footer;