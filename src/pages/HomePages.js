import React, { useEffect, useState } from "react";
import { ENDPOINTS } from "../api/endpoints";
import { useLocalStorage } from "../hooks/useLocalStorage";
import PokemonCard from "../components/PokemonCard";
import LayoutSwitcher from "../components/LayoutSwitcher";
import FilterBar from "../components/FilterBar";
import { usePokemonContext } from "../context/PokemonContext";

const HomePages = () => {
  const [layout, setLayout] = useState("double");
  const [pokemons, setPokemons] = useLocalStorage("pokemon-list", []);
  const { filter, setFilter } = usePokemonContext();

  useEffect(() => {
    if (pokemons.length === 0) {
      fetch(ENDPOINTS.list)
        .then((res) => res.json())
        .then((data) => {
          const formatted = data.results.map((p, idx) => ({
            name: p.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              idx + 1
            }.png`,
            type: "unknown",
          }));
          setPokemons(formatted);
        });
    }
  }, []);

  const filtered = pokemons.filter((p) =>
    p.name.includes(filter.toLowerCase())
  );

  return (
    <div className="p-4">
      <LayoutSwitcher layout={layout} setLayout={setLayout} />
      <FilterBar value={filter} onChange={setFilter} />
      <div
        className={`grid gap-4 mt-4 ${
          layout === "double" ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {filtered.map((p) => (
          <PokemonCard key={p.name} pokemon={p} />
        ))}
      </div>
    </div>
  );
};

export default HomePages;
