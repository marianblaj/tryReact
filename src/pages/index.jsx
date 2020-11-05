import React, { Component } from "react";
import { Link } from "react-router-dom";
import categorii from "../date/dummy.jsx";
import altEx from "../date/test.jsx";

class MainPage extends Component {
  state = {
    categorii: categorii,
    altEx: altEx,
  };

  render() {
    
    const dMap = this.state.categorii.map(function(value, id){

       return( <Link to={{pathname: "/elementeDetaliat", state:{numarElement: id}}}> <h1 key={id}> {value.name} </h1> </Link>)
    });
    
    return <React.Fragment>{dMap}</React.Fragment>;
  }
}

export default MainPage;
