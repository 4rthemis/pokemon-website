import React from "react";
import SearchBar from "./SearchBar";
import Logo from "../assets/img/logo.png"

const Navbar = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center py-[6px] px-5 md:px-10 relative">
      <img src={Logo} alt="Logo" className="h-[35px]" />

          <div className="w-[200px] md:w-[250px]">
            <SearchBar />
          </div>

      </div>
      <div className="w-full h-[1px] bg-[#626a91]"></div>
    </div>
  );
};

export default Navbar;
