import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../Hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { GameQuery } from '../App';

interface GameGridProps {
	gameQuery:GameQuery
};

const GameGrid = ({gameQuery}:GameGridProps) => {
	const { data, error, isLoading } = useGames(gameQuery);
	const skeletons: number[] = [1, 2, 3, 4, 5, 6,7,8];
	if(error) return (<Text>{error.message}</Text>);
	
	return (
			<SimpleGrid columns={{
				sm: 1,
				md: 2,
				lg: 3,
				xl: 4
			}} spacing={6} padding='15px'>
				{isLoading && skeletons.map((skeleton) => { return <GameCardSkeleton key={skeleton} /> })}
				{!isLoading && data?.results.map(
					(game) => {
						return <GameCard game={game} key={game.id} />
					}
				)
				}
			</SimpleGrid>
	)
}

export default GameGrid