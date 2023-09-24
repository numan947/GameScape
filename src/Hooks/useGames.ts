import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
}

export interface FetchGamesResponse {
	count: number,
	results: Game[]
}
const useGames = () => {

	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const controller = new AbortController();
		apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
			.then((response) => {
				setGames(response.data.results);
				setError('');
				setLoading(false);
			})
			.catch((error) => {
				if (error instanceof CanceledError)
					return;
				setError(error.message);
				setGames([]);
				setLoading(false);
			}).finally(() => {
				setLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { games, error, isLoading };
};

export default useGames;