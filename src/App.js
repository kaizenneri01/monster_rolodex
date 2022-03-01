import React, { Component } from "react";
import { CardList } from "./components/Card-list";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monster"
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
            console.log(this.state);
          }}
        ></input>
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
