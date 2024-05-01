import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { trpc } from '../utils/trpc';
import PokemonTypeSelection from './PokemonTypeSelection';
import PokedexTable from './PokedexTable';

const FilterablePokedexTable: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);

  const { data: pokemonArray, isLoading } = useQuery({
    queryKey: ['getFilteredPokemonArray', { type: selectedType }],
    queryFn: () =>
      trpc.getFilteredPokemonArray.query({ type: selectedType }),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={setSelectedType}
      />
      <PokedexTable pokemonArray={pokemonArray || []} />
    </div>
  );
};