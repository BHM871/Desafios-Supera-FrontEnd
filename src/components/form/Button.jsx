import React from "react";
import '/src/css/Button.css';



function Button({action}) {
    return <button onClick={action}>Pesquisar</button>
}

export default Button