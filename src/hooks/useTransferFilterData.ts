import axios, { AxiosPromise } from "axios"
import { TransferData } from "../interfaces/TransferData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080/filters"

export function useTransferFilterData(initial: number, final: number, name: String){

    const fecthData = async () : AxiosPromise<TransferData[]> => {
        const response = axios.get(API_URL + "initial=" + initial + "&final=" + final + "&name=" + name);
        return response;
    }

    const query = useQuery({
        queryFn: fecthData,
        queryKey: ['transfer-data'],
        retry: 2
    });
    
    return {
        ...query,
        data: query.data?.data
    }
}