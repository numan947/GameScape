import axios, { AxiosRequestConfig } from "axios";
import { API_KEY } from "../env";
export interface FetchResponse<T>{
	count:number;
	results: T[];
	next:string|null;
};

const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key:API_KEY
	}
});

class APIClient<T>{
	endpoint:string;
	constructor(endpoint:string){
		this.endpoint = endpoint;
	}
	getAll = (config:AxiosRequestConfig)=>{
		return axiosInstance.get<FetchResponse<T>>(this.endpoint,config).then((res) => res.data);
	}
}

export default APIClient;