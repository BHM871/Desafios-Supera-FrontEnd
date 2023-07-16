import React from "react";
import Button from "./Button";
import '/src/css/Footer.css';

function Footer({listLength, update}) {
    var items = listLength / 6;
    listLength % 6 > 0 ? ++items : items;

    let amount = [];
    for(var i = 1; i <= items; i++){
        amount.push(i);
    }

    return(
        <>
            <tfoot className="row">
                <th colSpan="4" className="text-footer">
                        <Button key={"<<"} value={"<<"} action={update} className={"button-footer"} />
                        <Button key={"<"} value={"<"} action={update} className={"button-footer"} />
                        {
                            amount.map(
                                item => {
                                    return <Button key={item} value={item} action={update} className={"button-footer"} />
                                }
                            )
                        }
                        <Button key={">"} value={">"} action={update} className={"button-footer"} />
                        <Button key={">>"} value={">>"} action={update} className={"button-footer"} />
                </th>
            </tfoot>
        </>
    )
}

export default Footer;