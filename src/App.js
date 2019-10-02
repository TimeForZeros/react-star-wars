import React, { Component } from "react";
import { getAllStarships } from "./services/sw-api";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    starships: []
  };

  getStarship = ship => {
    return this.state.starships[ship];
  };

  async componentDidMount() {
    const starships = await getAllStarships();
    this.setState({
      starships: starships.results
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Starships!</header>
        <Route
          exact
          path="/"
          render={() => (
            <section>
              {this.state.starships.map((s, i) => (
                <Link to={`/ss/${i}`} key={s.name}>
                  {s.name}
                </Link>
              ))}
            </section>
          )}
        />
      </div>
    );
  }
}
export default App;
