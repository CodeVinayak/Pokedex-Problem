import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../prisma'; 
const t = initTRPC.create();

export const appRouter = t.router({
  getPokemon: t.procedure
    .input(z.string())
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findUnique({
        where: { name: input },
      });
      return pokemon;
    }),
  getPokemonArray: t.procedure
    .input(z.array(z.string()))
    .query(async ({ input }) => {
      const pokemonArray = await prisma.pokemon.findMany({
        where: { name: { in: input } },
      });
      return pokemonArray;
    }),
  getFilteredPokemonArray: t.procedure
    .input(z.object({ type: z.string().optional() }))
    .query(async ({ input }) => {
      const pokemonArray = await prisma.pokemon.findMany({
        where: input.type ? { types: { has: input.type } } : {},
      });
      return pokemonArray;
    }),
});

export type AppRouter = typeof appRouter;