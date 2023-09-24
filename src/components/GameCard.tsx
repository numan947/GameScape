import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../Hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import GameCardContainer from "./GameCardContainer"


interface GameCardProps {
	game: Game
};

const GameCard = ({ game }: GameCardProps) => {
	const optimizedImageUrl = game.background_image;
	return (
		<GameCardContainer>
			<Card>
				<Image src={optimizedImageUrl} alt={game.name} />
				<CardBody>
					<Heading fontSize='2xl'>{game.name}</Heading>
					<HStack justifyContent={'space-between'}>
						<PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
						<CriticScore score={game.metacritic} />
					</HStack>
				</CardBody>
			</Card>
		</GameCardContainer>
	)
}

export default GameCard