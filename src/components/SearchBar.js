import React, { useState } from "react";
import { usePokemonContext } from "../context/PokemonContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  const { filter, setFilter } = usePokemonContext();
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex items-center gap-2">
      {!isActive ? (
        <MagnifyingGlassIcon
          className="h-5 w-5 text-white cursor-pointer"
          onClick={() => setIsActive(true)}
        />
      ) : (
        <input
          type="text"
          autoFocus
          placeholder="Search Pokémon"
          className="w-full p-2 border rounded text-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          onBlur={() => {
            if (filter === "") setIsActive(false);
          }}
        />
      )}
    </div>
  );
};

export default SearchBar;
