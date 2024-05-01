import * as React from 'react';
import { Grid, Typography, Box, Image } from '@mui/material';

interface PokedexTableProps {
  pokemonArray: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  }[];
}

const PokedexTable: React.FC<PokedexTableProps> = ({ pokemonArray }) => {
  return (
    <Grid container spacing={2}>
      {pokemonArray.map((pokemon) => (
        <Grid item key={pokemon.id} xs={12}>
          <Typography variant="h6">{pokemon.name}</Typography>
          <Typography variant="body1">ID: {pokemon.id}</Typography>
          <Typography variant="body1">Types: {pokemon.types.join(', ')}</Typography>
          <Box sx={{ width: 50, height: 50 }}>
            <Image src={pokemon.sprite} alt={pokemon.name} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default PokedexTable;