import { router, createRouter } from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../prisma';

const pokemonRouter = createRouter()
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
        where: input.type ? { types: { has: input.type } } : {},
      });
      return pokemonArray;
    },
  });

export default pokemonRouter;


// import { initTRPC, TRPCError } from '@trpc/server/dist/core';
// import { z } from 'zod';
// import { prisma } from '../prisma';

// const t = initTRPC.create();

// export const appRouter = t.router({
//   getPokemon: t.procedure
//     .input(z.string())
//     .query(async ({ input }) => {
//       const pokemon = await prisma.pokemon.findUnique({
//         where: { name: input },
//       });
//       if (!pokemon) {
//         throw new TRPCError({
//           code: 'NOT_FOUND',
//           message: `Pokemon with name ${input} not found`,
//         });
//       }
//       return pokemon;
//     }),
//   // ... other procedures
// });

// export type AppRouter = typeof appRouter;import { initTRPC, TRPCError } from '@trpc/server/dist/core';
// import { z } from 'zod';
// import { prisma } from '../prisma';

// const t = initTRPC.create();

// export const appRouter = t.router({
//   getPokemon: t.procedure
//     .input(z.string())
//     .query(async ({ input }) => {
//       const pokemon = await prisma.pokemon.findUnique({
//         where: { name: input },
//       });
//       if (!pokemon) {
//         throw new TRPCError({
//           code: 'NOT_FOUND',
//           message: `Pokemon with name ${input} not found`,
//         });
//       }
//       return pokemon;
//     }),
//   // ... other procedures
// });

// export type AppRouter = typeof appRouter;