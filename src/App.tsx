import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react';
import { Genre } from './Hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './Hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
  searchText: string | null;
}


function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
      templateColumns={{
        base: '1fr',
        lg: '1fr 3fr'
      }}
    >


      <GridItem area='nav'>
        <NavBar onSearch={(searchText: string) => setGameQuery({ ...gameQuery, searchText: searchText })} />
      </GridItem>

      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onGenreSelected={(newGenre: Genre | null) => setGameQuery({ ...gameQuery, genre: newGenre })} />
        </GridItem>
      </Show>

      <GridItem area='main'>
        <Box paddingLeft={4}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform: Platform | null) => setGameQuery({ ...gameQuery, platform: platform })} />
            </Box>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(order: string | null) => setGameQuery({ ...gameQuery, sortOrder: order })} />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
