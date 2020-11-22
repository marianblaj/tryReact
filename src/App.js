import React, { Component } from "react";
import "./App.css";
import ShowTime from "./components/ShowTime";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import heading from "./components/css/Inline";
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

class App extends Component {
  state = {
    name: "",
    nameLength: 0,
    currentTime: "",
    letterSplit: [],
    indexToRemove: -1,
  };

  // constructor(props) {
  //   super(props);
  //   this.callbackParent = this.callbackParent.bind(this);
  // }

  UsernameChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
      nameLength: event.target.value.length,
      letterSplit: Array.from(event.target.value),
    });
  };

  buttonPresset = () => {
    this.setState({
      name: "",
      nameLength: 0,
      letterSplit: [],
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleString(),
      });
    }, 1000);
  }

  handleRemove = (indexToRemove) => {
    //console.log(indexToRemove);
    var array = [...this.state.letterSplit];

    if (indexToRemove !== -1) {
      array.splice(indexToRemove, 1);
      this.setState({
        letterSplit: array,
        name: array.toLocaleString().replace(/,/g, ""),
        nameLength: array.length,
      });
    }
  };

  render() {
    //console.log(typeof this.state.name);
    return (
      <React.Fragment>
        <div className="App">
          <ShowTime currentTime={this.state.currentTime} />
          <UserInput
            changed={this.UsernameChangeHandler}
            currentName={this.state.name}
          />
          <div style={heading}>
            <UserOutput userName={this.state.name} />
            <ValidationComponent nameLength={this.state.nameLength} />
            <p>Lungime nume introdus:</p>
            <p>{this.state.nameLength}</p>
          </div>
          <button className="btn btn-primary" onClick={this.buttonPresset}>
            reset
          </button>
          {this.state.letterSplit.map((litera, index) => (
            <CharComponent
              key={index}
              index={index}
              letter={litera}
              handleRemove={this.handleRemove.bind(this)}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
