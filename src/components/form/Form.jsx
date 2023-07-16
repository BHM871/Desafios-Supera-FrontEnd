import React from "react";
import Input from "./Input";
import Button from "./Button";
import '/src/css/Form.css';

function Form({action, event}) {
    return(
        <div>
            <div className="form">
                <div>
                    <Input text={"Data de Ínicio"} type={"date"} name={"initial"} event={event} />
                    <Input text={"Data de Fim"} type={"date"} name={"final"} event={event} />
                    <Input text={"Nome do Operador Transacionado"} type={"text"} name={"name"} event={event}/>
                </div>
                <Button action={action} />
            </div>
        </div>
    )
}

export default Form;