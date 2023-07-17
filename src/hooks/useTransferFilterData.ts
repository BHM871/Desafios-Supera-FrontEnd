import { Dispatch } from "react";

const API_URL = "http://localhost:8080/filters?";

function prepareUrl(initial: String, final: String, name: String){
    return API_URL + 
        (initial ? "initial=" + initial : "") + 
        (final ? "&final=" + final : "") + 
        (name ? "&name=" + name : "");
}

export function useTransferFilterData(initial: String, final: String, name: String, setData: Dispatch<React.SetStateAction<any>>){
    fetch(prepareUrl(initial, final, name))
    .then(res => res.json())
    .then(resConv => setData(resConv));
}