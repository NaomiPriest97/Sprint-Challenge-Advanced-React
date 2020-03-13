import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Form from './components/Form';

const App = () => {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/players`)
      
      .then(res => {
        console.log(res.data);
        setPlayer(res.data)})
      
      .catch(err => console.log(err));
  }, []);



  return (
    <div className="App">
     <Navbar />
     <Form />
    </div>
  );
}

export default App;
