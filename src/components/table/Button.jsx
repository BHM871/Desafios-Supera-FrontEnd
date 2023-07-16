import React from "react";

function Button({key, value, action, className}) {
    return <button key={key} className={className} onClick={action} value={value}>{value}</button>
}

export default Button;