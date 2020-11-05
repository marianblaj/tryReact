import React, { Component } from "react";
import { Link } from "react-router-dom";
import altEx from "../date/test.jsx";
import categorii from './../date/dummy';

class ElementeDetaliat extends Component {
  state = {
    categorii: categorii
  };

  // const doubleValue = numbers.map((number)=>{
  //   return (number * 2);

  render() {
      
      let numar = this.props.location.state.numarElement;
     const dMap = this.state.categorii[numar].element.map( n =>   n.name  );


     const html  = dMap.map(i => <h3> {i} </h3>);
    return <React.Fragment>{html}, <Link to="/">Back</Link></React.Fragment>;
  }
}

export default ElementeDetaliat;
