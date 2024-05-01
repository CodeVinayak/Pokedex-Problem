import { createTRPCRouter } from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../prisma';

const pokemonRouter = createTRPCRouter()
 .query('getPokemon', {
    input: z.string(),
    async resolve({ input }) {
      const pokemon = await prisma.pokemon.findUnique({
        where: { name: input },
      });
      return pokemon;
    },
  })
 .query('getPokemonArray', {
    input: z.array(z.string()),
    async resolve({ input }) {
      const pokemonArray = await prisma.pokemon.findMany({
        where: { name: { in: input } },
      });
      return pokemonArray;
    },
  })
 .query('getFilteredPokemonArray', {
    input: z.object({ type: z.string().optional() }),
    async resolve({ input }) {
      const pokemonArray = await prisma.pokemon.findMany({
        where: input.type
         ? { types: { has: input.type } }
          : {},
      });
      return pokemonArray;
    },
  });

export default pokemonRouter;