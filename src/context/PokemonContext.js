import React, { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [filter, setFilter] = useState("");
  const [layout, setLayout] = useState("grid");
  const [shortBy, setShortBy] = useState("id");

  return (
    <PokemonContext.Provider value={{ filter, setFilter, layout, setLayout, shortBy, setShortBy }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);
