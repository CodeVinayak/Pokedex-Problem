import * as React from 'react';
import { trpc } from '../trpc';
import PokemonForm from '../components/PokemonForm';
import PokemonArrayForm from '../components/PokemonArrayForm';
import { FilterablePokedexTable } from '../components/FilterablePokedexTable';

import withTRPC from '../trpc';

function App({ Component, pageProps }: AppProps) {
  return (
    <withTRPC>
      <Component {...pageProps} />
    </withTRPC>
  );
}