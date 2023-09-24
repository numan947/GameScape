import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../Hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
	const { games, error } = useGames();
	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{
				sm: 1,
				md: 2,
				lg: 3,
				xl: 4
			}} spacing={10} padding='15px'>
				{games.map(
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