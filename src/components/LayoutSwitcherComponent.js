import React from "react";
import { usePokemonContext } from "../context/PokemonContext";
import { ViewColumnsIcon, ListBulletIcon } from "@heroicons/react/24/solid";
import '../index.css';

const LayoutSwitcher = () => {
  const { layout, setLayout } = usePokemonContext();

  return (
    <div className="flex items-center">
     <button
  className={`px-3 py-1 border flex items-center gap-1 transition-colors duration-200 rounded-l-lg ${
    layout === "grid" ? "bg-[#0C1231] text-[#97A0CC]" : "bg-[#3D4466] text-[#97A0CC]"
  }`}
  onClick={() => setLayout("grid")}
>
  <ViewColumnsIcon className="h-5 w-5" />
</button>

<button
  className={`px-3 py-1 border flex items-center gap-1 transition-colors duration-200 rounded-r-lg ${
    layout === "list" ? "bg-[#0C1231] text-[#97A0CC]" : "bg-[#3D4466] text-[#97A0CC]"
  }`}
  onClick={() => setLayout("list")}
>
  <ListBulletIcon className="h-5 w-5" />
</button>

    </div>
  );
};

export default LayoutSwitcher;
