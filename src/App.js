import React, {Component} from 'react';
import getAllStarships from './services/sw-api';
import Link from 'react-router-dom';
import Route from 'react-router-dom';
import './App.css';
import { identifier } from '@babel/types';

class App extends Component {
  state = {
    starships: []
  };

  starship = (ship) => {
    return this.state.starships[ship];
  }

  async componentDidMount() {
    // Destructure the object returned
    const starships = await getAllStarships();
    this.setState({
     starships: starships.results
    });
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        {this.state.starship.map(s=>{
         return <getAllStarships starship={s}  />
        })}
      </header>
    </div>
  );
}
}
export default App;
