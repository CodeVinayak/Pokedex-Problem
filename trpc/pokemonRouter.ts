import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import { prisma } from '../prisma';

const pokemonRouter = router({
  getPokemon: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findUnique({
        where: { name: input },
      });
      return pokemon;
    }),
  getPokemonArray: publicProcedure
    .input(z.array(z.string()))
    .query(async ({ input }) => {
      const pokemonArray = await prisma.pokemon.findMany({
        where: { name: { in: input } },
      });
      return pokemonArray;
    }),
  getFilteredPokemonArray: publicProcedure
    .input(z.object({ type: z.string().optional() }))
    .query(async ({ input }) => {
      const pokemonArray = await prisma.pokemon.findMany({
        where: input.type ? { types: { has: input.type } } : {},
      });
      return pokemonArray;
    }),
});

export default pokemonRouter;