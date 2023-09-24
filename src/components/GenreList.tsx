import { HStack, Icon, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../Hooks/useGenres'

const GenreList = () => {
	const { data, error, isLoading } = useGenres();

	if(error)
		return null;
	if(isLoading)
		return <Spinner/>

	return (
		<List>
			{data.map((genre) => {
				return <ListItem key={genre.id}>
					<HStack paddingY={'5px'}>
						<Image boxSize='32px' src={genre.image_background} />
						<Text fontSize='x-large'>{genre.name}</Text>
					</HStack>
				</ListItem>
			})}
		</List>
	)
}

export default GenreList