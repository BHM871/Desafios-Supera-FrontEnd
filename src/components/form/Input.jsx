import React, { useState } from "react";
import '/src/css/Input.css';

function Input({texto, tipo, name, event}) {
    return (
        <div className="input-div">
            <span className="texto">{texto}</span>
            <input className="input" type={tipo} name={name} onChange={event}/>
        </div>
    )
}

export default Input;