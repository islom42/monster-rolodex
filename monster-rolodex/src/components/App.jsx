import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
    console.log(1);
  }

  componentDidMount() {
    console.log(3);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {}
        )
      );
  }

  render() {
    console.log(2);

    return (
      <div>
        {this.state.monsters.map((monster) => {
          return (
            <>
              <div>
                <h1>{monster.name}</h1>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

export default App;
