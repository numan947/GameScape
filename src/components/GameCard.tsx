import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../Hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import GameCardContainer from "./GameCardContainer"
import NoImagePlaceholder from '../assets/NoImagePlaceholder.webp';
import Emoji from "./Emoji"

interface GameCardProps {
	game: Game
};

const GameCard = ({ game }: GameCardProps) => {
	const optimizedImageUrl = game.background_image??NoImagePlaceholder;
	return (
		<GameCardContainer>
			<Card>
				<Image src={optimizedImageUrl} alt={game.name} />
				<CardBody>
					<HStack justifyContent={'space-between'} marginBottom={3}>
						<PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top}/></Heading>
				</CardBody>
			</Card>
		</GameCardContainer>
	)
}

export default GameCard