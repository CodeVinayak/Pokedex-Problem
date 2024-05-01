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
        if (!pokemon) {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: `Pokemon with name ${input} not found`,
          });
        }
        return pokemon;
      }),
    // ... other procedures
  });

  export type AppRouter = typeof appRouter;