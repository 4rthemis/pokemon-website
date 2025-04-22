// components/FilterBar.js
import React from "react";
import { usePokemonContext } from "../hook/PokemonContext";

const FilterBar = () => {
  const { state, dispatch } = usePokemonContext();

  return (
    <input
      type="text"
      placeholder="Search Pokémon"
      className="w-full p-2 border rounded mb-4"
      value={state.filter}
      onChange={(e) =>
        dispatch({ type: "SET_FILTER", payload: e.target.value })
      }
    />
  );
};

export default FilterBar;
