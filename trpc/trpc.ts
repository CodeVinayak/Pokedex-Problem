import { createReactQueryHooks } from '@trpc/react';
import { initTRPC } from '@trpc/server';
import type { AppRouter } from '../server/router';

const t = initTRPC.create();

export const trpc = createReactQueryHooks<AppRouter>();