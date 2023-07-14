import React from "react";

function Button({valor, acao, className}) {
    return <button className={className} onClick={acao}>{valor}</button>
}

export default Button;