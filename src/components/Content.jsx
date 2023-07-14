import React from "react";

function Content({dataTransacao, valorTransacao, tipoTransacao, nomeTransacionado}) {
    return(
        <>
            <tr className="row">
                <td className="td-content">
                    {dataTransacao}
                </td>
                <td className="td-content">
                    R$ {valorTransacao}
                </td>
                <td className="td-content">
                    {tipoTransacao}
                </td>
                <td className="td-content">
                    {nomeTransacionado}
                </td>
            </tr>
        </>
    )
}

export default Content;