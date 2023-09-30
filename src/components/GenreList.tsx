import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../Hooks/useGenres'


interface GenreListProp {
	onGenreSelected: (genre: Genre | null) => void,
	selectedGenreId?: number
}


const GenreList = ({ onGenreSelected, selectedGenreId }: GenreListProp) => {
	const { data, error, isLoading } = useGenres();

	if (error)
		return null;
	if (isLoading)
		return <Spinner />

	return (
		<List>
			{selectedGenreId && <ListItem key={'reset-genre'}>
				<HStack paddingY={'5px'}>
					{/* <Image boxSize='32px' src={genre.image_background} /> */}
					<Button onClick={() => { onGenreSelected(null); }} variant='link' fontSize='x-large' colorScheme='teal'>Reset Selection</Button>
				</HStack>
			</ListItem>}
			{data?.results.map((genre) => {
				return <ListItem key={genre.id}>
					<HStack paddingY={'5px'}>
						<Image boxSize='32px' src={genre.image_background} />
						<Button onClick={() => { onGenreSelected(genre); }} variant='link' fontSize='x-large' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}>{genre.name}</Button>
					</HStack>
				</ListItem>
			})}
		</List>
	)
}

export default GenreList