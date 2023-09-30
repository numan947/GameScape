import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GameQuery } from '../App';
import useGames from '../Hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

interface GameGridProps {
	gameQuery: GameQuery
};

const GameGrid = ({ gameQuery }: GameGridProps) => {
	const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames(gameQuery);
	const skeletons: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
	if (error) return (<Text>{error.message}</Text>);

	const fetchedGamesCount = data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;
	return (
		<>

			<InfiniteScroll
				dataLength={fetchedGamesCount}
				hasMore={!!hasNextPage}
				next={() => fetchNextPage()}
				loader={<Spinner marginTop={2} />}
			>
				<SimpleGrid columns={{
					sm: 1,
					md: 2,
					lg: 3,
					xl: 4
				}} spacing={6}>
					{isLoading && skeletons.map((skeleton) => { return <GameCardSkeleton key={skeleton} /> })}

					{!isLoading && data?.pages.map((page, index) =>
						<React.Fragment key={index}>
							{page.results.map(
								(game) => {
									return <GameCard game={game} key={game.id} />
								}
							)}
						</React.Fragment>
					)}
				</SimpleGrid>
			</InfiniteScroll>
		</>
	)
}

export default GameGrid