import React, { Component } from "react";
import "./App.css";
import ShowTime from "./components/ShowTime";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import heading from "./components/css/Inline";
import { Redirect } from "react-router-dom";

class App extends Component {
  state = {
    name: "ccc",
    currentTime: "",
  };

  UsernameChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  buttonPresset = () => {
    this.setState({
      name: "",
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleString(),
      });
    }, 1000);
  }

  render() {
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
          </div>

          <button className="btn btn-primary" onClick={this.buttonPresset}>
            reset
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
