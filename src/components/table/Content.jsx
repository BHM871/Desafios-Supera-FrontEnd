import React from "react";

function Content({dataTransacao, valorTransacao, tipoTransacao, nomeTransacionado}) {
    return(
        <>
            <tr className="row">
                <td className="td">
                    {dataTransacao}
                </td>
                <td className="td">
                    R$ {valorTransacao}
                </td>
                <td className="td">
                    {tipoTransacao}
                </td>
                <td className="td">
                    {nomeTransacionado}
                </td>
            </tr>
        </>
    )
}

export default Content;