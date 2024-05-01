import { useState } from 'react';
import { trpc } from '../utils/trpc';

const PokemonForm: React.FC = () => {
    const { data: pokemon, isLoading } = trpc.getPokemon.useQuery(
      { input: pokemonName },
      { enabled: pokemonName !== '' }
    );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform additional actions if needed
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="Enter Pokemon name"
        />
        <button type="submit">Get Pokemon</button>
      </form>
      {isLoading ? (
        <div>Loading...</div>
      ) : pokemon ? (
        <PokemonRow pokemon={pokemon} />
      ) : (
        <div>No Pokemon found</div>
      )}
    </div>
  );
};