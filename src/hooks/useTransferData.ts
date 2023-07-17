import { Dispatch } from "react";

const API_URL = "http://localhost:8080/";

export function useTransferData(setData: Dispatch<React.SetStateAction<any>>){
    fetch(API_URL)
    .then(res => res.json())
    .then(resConv => setData(resConv))
}