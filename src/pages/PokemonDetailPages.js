// pages/PokemonDetailPages.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { ENDPOINTS } from "../api/endpoint";

const PokemonDetailPages = () => {
  const { name } = useParams();
  const [data, setData] = useSessionStorage(`pokemon-detail-${name}`, null);
  const [loading, setLoading] = useState(!data);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const res = await fetch(ENDPOINTS.detail(name));
        const result = await res.json();
        const formatted = {
          name: result.name,
          image: result.sprites.front_default,
          height: result.height,
          weight: result.weight,
          types: result.types.map((t) => t.type.name).join(", "),
        };
        setData(formatted);
      } catch (err) {
        console.error("Error Mengambil Data Pokemon:", err);
      } finally {
        setLoading(false);
      }
    };

    if (!data) fetchDetail();
  }, [name]);

  if (loading || !data) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold capitalize mb-4">{data.name}</h1>
      <img src={data.image} alt={data.name} className="w-48 mx-auto" />
      <p>
        <strong>Height:</strong> {data.height}
      </p>
      <p>
        <strong>Weight:</strong> {data.weight}
      </p>
      <p>
        <strong>Type:</strong> {data.types}
      </p>
    </div>
  );
};

export default PokemonDetailPages;
