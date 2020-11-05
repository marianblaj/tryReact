import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pagina5 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3>pagina 5</h3>
        <Link to="/">Mergi la Pagina 1.</Link>
        <Link to="/pagina2">Mergi la Pagina 2.</Link>
        <Link to="/pagina3">Mergi la Pagina 3.</Link>
        <Link to="/pagina4">Mergi la Pagina 4.</Link>
      </React.Fragment>
    );
  }
}

export default Pagina5;
