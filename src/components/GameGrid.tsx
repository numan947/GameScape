import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../Hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { GameQuery } from '../App';
import React from 'react';

interface GameGridProps {
	gameQuery: GameQuery
};

const GameGrid = ({ gameQuery }: GameGridProps) => {
	const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
	const skeletons: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
	if (error) return (<Text>{error.message}</Text>);

	return (
		<>
			<Box padding='15px'>
				<SimpleGrid columns={{
					sm: 1,
					md: 2,
					lg: 3,
					xl: 4
				}} spacing={6}>
					{isLoading && skeletons.map((skeleton) => { return <GameCardSkeleton key={skeleton} /> })}

					{!isLoading && data?.pages.map(page =>
						<React.Fragment>
							{page.results.map(
								(game) => {
									return <GameCard game={game} key={game.id} />
								}
							)}
						</React.Fragment>
					)}
				</SimpleGrid>

				{hasNextPage && <Button 
				className="btn-primary btn-lg btn-block"
				disabled={isFetchingNextPage}
				marginTop={4} 
				marginBottom={4} onClick={()=>fetchNextPage()}>{isFetchingNextPage?"Loading...":"Next Page"}</Button>}

			</Box>
		</>
	)
}

export default GameGrid