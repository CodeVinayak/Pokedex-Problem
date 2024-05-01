import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { trpc } from '../utils/trpc';
import PokemonTypeSelection from './PokemonTypeSelection';
import PokedexTable from './PokedexTable';

const FilterablePokedexTable: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
  const [cursor, setCursor] = useState<number | null>(null);
  const [limit, setLimit] = useState(10);

  const { data: pokemonArray, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useQuery({
    queryKey: ['getFilteredPokemonArray', { type: selectedType, cursor, limit }],
    queryFn: ({ queryKey }) =>
      trpc.getFilteredPokemonArray.query({ type: queryKey[1].type, cursor: queryKey[1].cursor, limit: queryKey[1].limit }),
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <PokemonTypeSelection selectedType={selectedType} selectType={setSelectedType} />
      <PokedexTable pokemonArray={pokemonArray || []} />
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
        </button>
      </div>
    </div>
  );
};