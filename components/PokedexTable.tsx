// components/PokedexTable.tsx
import * as React from 'react';
import { Grid, Typography, Box, Avatar } from '@mui/material';

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
        <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
          <Box display="flex" alignItems="center">
            <Avatar src={pokemon.sprite} alt={pokemon.name} />
            <Box ml={2}>
              <Typography variant="h6">{pokemon.name}</Typography>
              <Typography variant="body1">ID: {pokemon.id}</Typography>
              <Typography variant="body1">Types: {pokemon.types.join(', ')}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default PokedexTable;