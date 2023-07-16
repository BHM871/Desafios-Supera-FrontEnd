import React, { useState } from "react";
import '/src/css/Input.css';

function Input({text, type, name, event}) {
    return (
        <div className="input-div">
            <span className="text">{text}</span>
            <input className="input" type={type} name={name} onChange={event}/>
        </div>
    )
}

export default Input;