import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";


export interface Genre{
	id: number;
	name: string;
	image_background: string;
}
const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
	queryKey:['genres'],
	queryFn: apiClient.getAll,
	staleTime: 84600_000,// 24 hours
});

export default useGenres;