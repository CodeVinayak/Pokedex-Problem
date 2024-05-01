import * as React from 'react';
import PokemonTypeSelection from '../components/PokemonTypeSelection';
import PokedexTable from '../components/PokedexTable';

interface FilterablePokedexTableProps {
  pokemonArray: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  }[];
  selectedType: string | undefined;
}

const FilterablePokedexTable: React.FC<FilterablePokedexTableProps> = ({
  pokemonArray,
  selectedType,
}) => {
  const filteredPokemonArray = pokemonArray.filter((pokemon) =>
    selectedType ? pokemon.types.includes(selectedType) : true
  );

  return (
    <div>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={(type) => console.log(type)}
      />
      <PokedexTable pokemonArray={filteredPokemonArray} />
    </div>
  );
};

export default FilterablePokedexTable;