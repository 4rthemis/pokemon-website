import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSessionStorage } from "../hook/UseSessionStorage";
import PokemonData from "../data/PokemonData";


const PokemonDetail = () => {
  const { name } = useParams();
  const [data, setData] = useSessionStorage(`pokemon-detail-${name}`, null);

  useEffect(() => {
    const found = PokemonData.find((p) => p.name === name);
    if (found) {
      setData(found);
    }
  }, [name, setData]);

  if (!data) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl text-primaryText font-bold capitalize mb-4">{data.name}</h1>
      <img src={data.image} alt={data.name} className="w-48 mx-auto" />
      <div className="mt-4 space-y-2">
        <p>
          <strong>Type:</strong> {data.type}
        </p>
        <p>
          <strong>Health:</strong> {data.health}/{data.maxHealth}
        </p>
        <p>
          <strong>Attack:</strong> {data.attack}
        </p>
        <p>
          <strong>Defense:</strong> {data.defense}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetail;