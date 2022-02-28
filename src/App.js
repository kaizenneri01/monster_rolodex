import React, { Component } from "react";
import { CardList } from "./components/Card-list";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
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
        <CardList name="kaizen">
          {this.state.monsters.map((monster, index) => (
            <h1 key={monster.id}> {monster.name + index} </h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
