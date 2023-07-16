import React from "react";

function Content({key, transferDate, value, type, operatorName}) {
    return(
        <>
            <tr key={key} className="row">
                <td className="td">
                    {transferDate}
                </td>
                <td className="td">
                    R$ {value}
                </td>
                <td className="td">
                    {type}
                </td>
                <td className="td">
                    {operatorName}
                </td>
            </tr>
        </>
    )
}

export default Content;