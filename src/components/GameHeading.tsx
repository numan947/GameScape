import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenre from '../Hooks/useGenre'
import usePlatform from '../Hooks/usePlatform'

interface GameHeadingProps {
	gameQuery: GameQuery | null
};


const GameHeading = ({ gameQuery }: GameHeadingProps) => {
	const genre = useGenre(gameQuery?.genreId);

	const platform = usePlatform(gameQuery?.platformId);
	const heading =`${platform?.name||''} ${genre?.name||''} Games`;
	return (
		<Heading marginY={5} fontSize={'5xl'} as='h1'>{heading}</Heading>
	)
}

export default GameHeading