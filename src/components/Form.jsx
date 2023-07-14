import React from "react";
import Input from "./Input";
import Button from "./Button";
import '/src/css/Form.css';

function Form({metodo}) {
    return(
        <div>
            <form method={metodo}>
                <div>
                    <Input texto={"Data de Ínicio"} tipo={"date"}/>
                    <Input texto={"Data de Fim"} tipo={"date"}/>
                    <Input texto={"Nome do Operador Transacionado"} tipo={"text"}/>
                </div>
                <Button />
            </form>
        </div>
    )
}

export default Form;