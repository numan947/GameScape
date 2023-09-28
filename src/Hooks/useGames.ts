import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";


const apiClient = new APIClient<Game>('/games');

export interface Game {
	id: number,
	name: string,
	background_image: string,
	parent_platforms: { platform: Platform }[],
	metacritic: number,
	rating_top: number,
	// rating: number,
}

const useGames = (gameQuery: GameQuery) => {
	const { genre, platform, sortOrder, searchText } = gameQuery;
	return useQuery<FetchResponse<Game>, Error>({
		queryKey: ['games', gameQuery],
		queryFn: () => apiClient.getAll({ params: { genres: genre?.id, parent_platforms: platform?.id, ordering: sortOrder, search: searchText } })
	});

};

export default useGames;