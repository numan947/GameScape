import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react';
import { Genre } from './Hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './Hooks/useGames';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
          <GenreList selectedGenre={selectedGenre} onGenreSelected={setSelectedGenre} />
        </GridItem>
      </Show>

      <GridItem area='main'>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform:Platform | null)=>setSelectedPlatform(platform)}/>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
