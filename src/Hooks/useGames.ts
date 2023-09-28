import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/api-client";


//TODO: Fix this duplication of platform -> duplicated in usePlatforms.ts
export interface Platform {
	id: number,
	name: string,
	slug: string,
};

export interface Game {
	id: number,
	name: string,
	background_image: string,
	parent_platforms: { platform: Platform }[],
	metacritic: number,
	rating_top: number,
	// rating: number,
}

const useGames = (gameQuery:GameQuery) => {
	const { genre, platform, sortOrder, searchText} = gameQuery;
	return useQuery<FetchResponse<Game>, Error>({
		queryKey:['games', gameQuery],
		queryFn: () => apiClient
		.get<FetchResponse<Game>>(
			"/games", 
			{ params: { genres: genre?.id, parent_platforms: platform?.id, ordering: sortOrder, search:searchText} })
			.then((res) => res.data),	
	});

};

export default useGames;