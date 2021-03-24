import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import Tool from "./Tool";

class Main extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Header />
        <Tool />
        <Footer />
      </>
    );
  }
}

export default Main;
