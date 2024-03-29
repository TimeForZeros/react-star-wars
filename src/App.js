import React, { Component } from "react";
import { getAllStarships } from "./services/sw-api";
import StarshipPage from './pages/StarshipPage';
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
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
        <header className="App-header">Starships</header>
        <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div class='item-container'>
              {this.state.starships.map((s, i) => (
                <div class='item'>
                <Link to={`/starships/${i}`} key={s.name}>
                  {s.name}
                </Link>
                </div>
              ))}
            </div>
          )}
        />
            <Route path='/starships/:idx' render={(props) => 
            <StarshipPage
              {...props}
              getStarship={this.getStarship}
            />
          }/>
        </Switch>
      </div>
    );
  }
}
export default App;
