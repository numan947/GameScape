import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../Hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../Hooks/useGenres';

interface GameGridProps {
	selectedGenre:Genre|null;
};

const GameGrid = ({selectedGenre}:GameGridProps) => {
	const { data, error, isLoading } = useGames(selectedGenre);

	const skeletons: number[] = [1, 2, 3, 4, 5, 6,7,8];

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{
				sm: 1,
				md: 2,
				lg: 3,
				xl: 4
			}} spacing={3} padding='15px'>
				{isLoading && skeletons.map((skeleton) => { return <GameCardSkeleton key={skeleton} /> })}
				{!isLoading && data.map(
					(game) => {
						return <GameCard game={game} key={game.id} />
					}
				)
				}
			</SimpleGrid>
		</>
	)
}

export default GameGrid