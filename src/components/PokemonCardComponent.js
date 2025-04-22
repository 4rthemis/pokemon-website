import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

const PokemonCard = ({ pokemon }) => {
  return (
    <Link
      to={`/pokemon/${pokemon.name}`}
      className="bg-white border rounded-xl p-4 hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex justify-center mb-2">
        <span className=" text-white text-xs font-bold px-2 py-1 rounded-full">
          #{pokemon.id}
        </span>
      </div>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-24 h-24 object-contain mx-auto mb-2 text-black"
      />
      <h2 className="text-lg font-bold text-center capitalize">{pokemon.name}</h2>
     
    </Link>
  );
};

export default PokemonCard;
