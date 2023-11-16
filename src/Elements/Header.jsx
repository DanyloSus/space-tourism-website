import React from "react";
import { Component } from "react";
import NavElement from "./NavElement";

class Header extends Component {
  render() {
    return (
      <header className="flex items-center justify-between mt-10 pl-[55px]">
        <img src="./shared/logo.svg" alt="Logo" className="w-12 h-12" />
        <div className=" bg-white opacity-[0.2515] w-[473px] h-[1px] ml-auto relative left-[30px]"></div>
        <nav className=" w-[830px] h-24 backdrop-blur-[40.774227142333984px] px-5">
          <ol className="flex items-center justify-center gap-[50px] w-full h-full">
            <NavElement to="/" text="Home" />
            <NavElement to="/destination" text="DESTINATION" />
            <NavElement to="/crew" text="CREW" />
            <NavElement to="/technology" text="TECHNOLOGY" />
          </ol>
        </nav>
      </header>
    );
  }
}

export default Header;
