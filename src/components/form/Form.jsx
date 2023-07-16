import React from "react";
import Input from "./Input";
import Button from "./Button";
import '/src/css/Form.css';

function Form({action, event}) {
    return(
        <div>
            <div className="form">
                <div>
                    <Input texto={"Data de Ínicio"} tipo={"date"} name={"initial"} event={event} />
                    <Input texto={"Data de Fim"} tipo={"date"} name={"final"} event={event} />
                    <Input texto={"Nome do Operador Transacionado"} tipo={"text"} name={"name"} event={event}/>
                </div>
                <Button action={action} />
            </div>
        </div>
    )
}

export default Form;