import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react';
import { Genre } from './Hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './Hooks/useGames';

export interface GameQuery{
  genre:Genre | null;
  platform:Platform| null;
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
        <NavBar />
      </GridItem>

      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onGenreSelected={(newGenre:Genre| null)=>setGameQuery({...gameQuery,genre:newGenre})} />
        </GridItem>
      </Show>

      <GridItem area='main'>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform:Platform | null)=>setGameQuery({...gameQuery, platform:platform})}/>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
