import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenres from '../Hooks/useGenres'
import usePlatforms from '../Hooks/usePlatforms'

interface GameHeadingProps {
	gameQuery: GameQuery | null
};


const GameHeading = ({ gameQuery }: GameHeadingProps) => {

	const{data:genres} = useGenres();

	const genre = genres?.results.find((genre) => genre.id === gameQuery?.genreId);

	const {data:platforms} = usePlatforms();
	const platform = platforms?.results.find((platform)=>platform.id === gameQuery?.platformId);

	const heading =`${platform?.name||''} ${genre?.name||''} Games`;
	return (
		<Heading marginY={5} fontSize={'5xl'} as='h1'>{heading}</Heading>
	)
}

export default GameHeading