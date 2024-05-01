import { initTRPC } from '@trpc/server';
import { TRPCContext } from '@trpc/react';

const t = initTRPC.create();

export const trpc = t.createTRPCContext();

export function withTRPC(App: React.ComponentType) {
  return function TRPCApp(props: any) {
    return (
      <TRPCContext.Provider value={trpc}>
        <App {...props} />
      </TRPCContext.Provider>
    );
  };
}