import React from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Form from './components/Form';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      players: []
    };
    this.handleChanges = this.handleChanges.bind(this);
  }
  
  handleChanges = e => {
    this.setState({
      userText: e.target.value
    });
  };

  componentDidMount() {
    axios
    .get(`http://localhost:5000/api/players`)
    .then(res =>{
      console.log(res.data);
      this.setState({
        players: res.data
      })
    })
    .catch(err => console.log(err.message));  
  }

 


  render() {
    const {players} = this.state;
    return (
      <div className="App">
      <Navbar />
      <Form />
      <div className = "player">
        {players.map((player, index) => {
          return (
            <div key = {index} className = "playerCard">
              <h2>{player.name}</h2>
              <h3>{player.country}</h3>
              <h3>{player.searches}</h3>
            </div>
          )
        })}
      </div>
      </div>
      
    )
  };  
};

export default App;
