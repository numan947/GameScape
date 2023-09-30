import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
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
	const { genreId, platformId, sortOrder, searchText } = gameQuery;
	
	
	return useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ['games', gameQuery],
		queryFn: ({pageParam = 1}) => 
				apiClient.getAll({
					params: { 
						genres: genreId, 
						parent_platforms: platformId, 
						ordering: sortOrder, 
						search: searchText,
						page: pageParam
					}
				}),
		getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined,
		staleTime: ms('24h'), // 1 day
	});
 
};

export default useGames;