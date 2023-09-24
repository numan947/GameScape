import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Genre{
	id: number;
	name: string;
}

interface FetchGenresResponse{
	count:number;
	results: Genre[];
};

const useGenres = () => {

	const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const controller = new AbortController();
		apiClient.get<FetchGenresResponse>('/genres', { signal: controller.signal })
			.then((response) => {
				setGenres(response.data.results);
				setError('');
				setLoading(false);
			})
			.catch((error) => {
				if (error instanceof CanceledError)
					return;
				setError(error.message);
				setGenres([]);
				setLoading(false);
			}).finally(() => {
				setLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { genres, error, isLoading };
};

export default useGenres;