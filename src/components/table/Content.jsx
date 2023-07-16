import React from "react";

function Content({key, dataTransacao, valorTransacao, tipoTransacao, nomeTransacionado}) {
    return(
        <>
            <tr key={key} className="row">
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