import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react';
import { Genre } from './Hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './Hooks/usePlatforms';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
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
        lg: '1fr 5fr'
      }}
    >


      <GridItem area='nav'>
        <NavBar onSearch={(searchText: string) => setGameQuery({ ...gameQuery, searchText: searchText })} />
      </GridItem>

      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenreId={gameQuery.genreId} onGenreSelected={(newGenre: Genre | null) => setGameQuery({ ...gameQuery, genreId: newGenre?.id  })} />
        </GridItem>
      </Show>

      <GridItem area='main'>
        <Box paddingLeft={4}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectPlatform={(platform: Platform | null) => setGameQuery({ ...gameQuery, platformId: platform?.id })} />
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
