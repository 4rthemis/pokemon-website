import React from "react";
import { usePokemonContext } from "../hook/PokemonContext";

const LayoutSwitcher = () => {
  const { state, dispatch } = usePokemonContext();

  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_LAYOUT" })}
      className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
    >
      Switch to {state.layout === "grid" ? "List" : "Grid"} View
    </button>
  );
};

export default LayoutSwitcher;
