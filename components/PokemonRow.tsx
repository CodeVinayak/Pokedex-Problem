// components/PokemonRow.tsx
import * as React from 'react';
import { Grid, Typography, Box, Image } from '@mui/material';

interface PokemonRowProps {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  };
}

const PokemonRow: React.FC<PokemonRowProps> = ({ pokemon }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Typography variant="h6">{pokemon.name}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body1">ID: {pokemon.id}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body1">Types: {pokemon.types.join(', ')}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ width: 50, height: 50 }}>
          <Image src={pokemon.sprite} alt={pokemon.name} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default PokemonRow;