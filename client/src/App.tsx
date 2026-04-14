import { Routes, Route } from "react-router-dom";
import { Home, Tree, Details } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tree" element={<Tree />} />
      <Route path="/tree/*" element={<Details />} />
    </Routes>
  </QueryClientProvider>
);

export default App;
