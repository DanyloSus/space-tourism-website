import React from "react";
import { Component } from "react";
import NavElement from "./NavElement";
import { connect } from "react-redux";
import HamMenu from "./HamMenu";

class Header extends Component {
  handleChange = () => {
    this.props.dispatch({ type: "CHANGE" });
  };

  render() {
    const { value } = this.props;

    return (
      <header className="flex items-center justify-between pl-[55px] pt-10 md:pt-0 md:pl-[39px] md:overflow-x-auto sm:px-6 sm:pt-6">
        <img
          src="./shared/logo.svg"
          alt="Logo"
          className="w-12 h-12 sm:w-10 sm:h-10"
        />
        <div className=" bg-white opacity-[0.2515] w-[473px] h-[1px] ml-auto relative left-[30px] md:hidden sm:hidden" />
        <nav className=" w-[830px] h-24 backdrop-blur-[40.774227142333984px] px-5 md:w-[450px] md:gap-[37px] md:bg-[rgba(255,_255,_255,_0.04)] sm:hidden">
          <ol className="flex items-end justify-center gap-[50px] w-full h-full">
            <NavElement to="/" text="Home" />
            <NavElement to="/destination" text="DESTINATION" />
            <NavElement to="/crew" text="CREW" />
            <NavElement to="/technology" text="TECHNOLOGY" />
          </ol>
        </nav>
        <img
          src="./shared/icon-hamburger.svg"
          alt="Hamburger"
          className="w-6 h-[21px] sm:block hidden"
          onClick={this.handleChange}
        />
        <HamMenu />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.isHam.value,
});

export default connect(mapStateToProps)(Header);
