// components/PokemonTypeSelection.tsx
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { trpc } from '../trpc';

interface PokemonTypeSelectionProps {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
}

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
}) => {
  const { register, handleSubmit } = useForm<{ type: string }>();

  const onSubmit = async (data: { type: string }) => {
    selectType(data.type);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register('type')}>
        <option value="">Select a type</option>
        <option value="grass">Grass</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
      </select>
      <button type="submit">Filter</button>
    </form>
  );
};

export default PokemonTypeSelection;