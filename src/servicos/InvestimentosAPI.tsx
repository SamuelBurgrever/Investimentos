import axios from 'axios';
import { LoginData } from '../interfaces/LoginInterface';

const apiClient = axios.create({
    baseURL: 'https://tcwhl22p-5165.brs.devtunnels.ms',
    headers:{
        'Content-Type': 'application/json'
    }
})

export const LoginAPI =(loginData: LoginData)=>{
    return apiClient.post('/api/Login/login', loginData)
}


export const FetchShareBySymbol = async (symbol: string) =>{
    try {
        const response = await apiClient.get(`/Share/${symbol}`,
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao logar: ', error);
        throw error;
    }
}


export const FetchShareListPaged = async (page: number, resultsByPage: number) =>{
    try {
        const response = await apiClient.get(`/Share/${page}, ${resultsByPage}`,
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao retornar lista de ações paginada: ', error);
        throw error;
    }
}

export const FetchAllShares = async () =>{
    try {
        const response = await apiClient.get(`/Share`,
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao retornar a lista completa de ações: ', error);
        throw error;
    }
}
