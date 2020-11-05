import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pagina3 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3>pagina 3</h3>
        <Link to="/">Mergi la Pagina 1.</Link>
        <Link to="/pagina2">Mergi la Pagina 2.</Link>
        <Link to="/pagina4">Mergi la Pagina 4.</Link>
        <Link to="/pagina5">Mergi la Pagina 5.</Link>
      </React.Fragment>
    );
  }
}

export default Pagina3;
