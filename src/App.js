import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext";
import PokemonDetail from "./pages/PokemonDetail";
import Home from "./pages/home";

const App = () => (
  <PokemonProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  </PokemonProvider>
);

export default App;
