import React from "react";
import { Link } from "react-router-dom";

const PokemonCardComponent = ({ pokemon }) => (
  <Link to={`/pokemon/${pokemon.name}`}>
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-full h-32 object-contain"
      />
      <h2 className="text-lg font-bold">{pokemon.name}</h2>
      <p>{pokemon.type}</p>
    </div>
  </Link>
);

export default PokemonCardComponent;
