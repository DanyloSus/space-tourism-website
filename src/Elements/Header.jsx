import React from "react";
import { Component } from "react";
import NavElement from "./NavElement";

class Header extends Component {
  render() {
    return (
      <header className="flex items-center justify-between pl-[55px] pt-10 md:pt-0 md:pl-[39px] overflow-x-auto">
        <img src="./shared/logo.svg" alt="Logo" className="w-12 h-12" />
        <div className=" bg-white opacity-[0.2515] w-[473px] h-[1px] ml-auto relative left-[30px] md:hidden" />
        <nav className=" w-[830px] h-24 backdrop-blur-[40.774227142333984px] px-5 md:w-[450px] md:gap-[37px] md:bg-[rgba(255,_255,_255,_0.04)]">
          <ol className="flex items-end justify-center gap-[50px] w-full h-full">
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
