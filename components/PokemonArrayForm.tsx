import { useState } from 'react';
import { trpc } from '../utils/trpc';
import PokedexTable from './PokedexTable';

const PokemonArrayForm: React.FC = () => {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const { data: pokemonArray, isLoading } = trpc.getPokemonArray.useQuery(
    { input: pokemonNames },
    { enabled: pokemonNames.length > 0 }
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
          value={pokemonNames.join(', ')}
          onChange={(e) => setPokemonNames(e.target.value.split(',').map((name) => name.trim()))}
          placeholder="Enter Pokemon names (comma-separated)"
        />
        <button type="submit">Get Pokemon Array</button>
      </form>
      {isLoading ? (
        <div>Loading...</div>
      ) : pokemonArray ? (
        <PokedexTable pokemonArray={pokemonArray} />
      ) : (
        <div>No Pokemon found</div>
      )}
    </div>
  );
};