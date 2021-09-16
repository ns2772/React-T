import { render, RenderOptions } from "@testing-library/react";
import React from "react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";

export const queryCache = new QueryCache();
export const queryClient = new QueryClient({ queryCache: queryCache });

const AllProviders: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
