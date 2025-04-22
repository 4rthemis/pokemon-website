import React from "react";
import { useSessionStorage } from "../hook/UseSessionStorage";
import PokemonData from "../data/PokemonData";
import PokemonCard from "../components/PokemonCardComponent";
import LayoutSwitcher from ".././components/LayoutSwitcherComponent";
import { usePokemonContext } from "../context/PokemonContext";
import Navbar from "../components/Navbar";

const Home = () => {
  const [pokemons] = useSessionStorage("pokemon-list", PokemonData);
  const { filter, layout } = usePokemonContext();

  const filteredPokemons = Array.isArray(pokemons) ? pokemons.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  ) : [];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-12">
        <Navbar />
        <LayoutSwitcher />
      </div>
      <div
        className={`grid ${layout === "grid" ? "grid-cols-2 md:grid-cols-3 gap-4" : "grid-cols-1 gap-4"}`}
      >
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Home;
