import React, { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [filter, setFilter] = useState("");
  return (
    <PokemonContext.Provider value={{ filter, setFilter }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);
