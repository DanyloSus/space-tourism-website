import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <img src="./shared/logo.svg" alt="Logo" className="w-12 h-12" />
      <div className=" bg-white opacity-[0.2515] w-[473px] h-[1px] flex-shrink-[0]"></div>
      <nav className=" w-[830px] h-24 backdrop-blur-[40.774227142333984px]">
        <ol>
          <li>Home</li>
          <li>DESTINATION</li>
          <li>CREW</li>
          <li>TECHNOLOGY</li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
