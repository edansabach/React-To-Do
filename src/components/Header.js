import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>To Do List</h1>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
export default Header;
