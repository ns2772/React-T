import React from "react";
import ReactDOM from "react-dom";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

const queryCache = new QueryCache();
const queryClient = new QueryClient({ queryCache });

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
