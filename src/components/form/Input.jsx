import React from "react";
import '/src/css/Input.css';

function Input({texto, tipo}) {
    return (
        <div className="input-div">
            <span className="texto">{texto}</span>
            <input className="input" type={tipo}/>
        </div>
    )
}

export default Input;