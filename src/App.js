import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonDetail from "./pages/PokemonDetailPages";
import { PokemonProvider } from "../src/context/PokemonContext";
import Home from "./pages/HomePages";

function App() {
  return (
    <PokemonProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </Router>
    </PokemonProvider>
  );
}

export default App;