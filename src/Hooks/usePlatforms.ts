import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";


export interface Platform{
	id: number;
	name: string;
	slug: string;
}
const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
	queryKey:['platforms'],
	queryFn: apiClient.getAll,
	staleTime: 84600_000,// 24 hours
});

export default usePlatforms;