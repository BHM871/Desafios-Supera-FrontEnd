import React from "react";

function Button({key, valor, acao, className}) {
    return <button key={key} className={className} onClick={acao}>{valor}</button>
}

export default Button;