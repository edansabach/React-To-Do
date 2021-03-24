import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Directory from "./Navbar";

class Main extends Component {
  render() {
    return (
      <>
        <Directory />
        <Header />
        <Footer />
      </>
    );
  }
}

export default Main;
