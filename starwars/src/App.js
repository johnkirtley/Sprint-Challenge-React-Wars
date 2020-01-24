import React, { useState, useEffect } from 'react';
import Card from "./components/Card"
import axios from "axios";
import './App.css';

const App = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        setCharacter(res.data.results);
      })
      .catch(err => {
        console.log("cannot get data", err);
      })
  }, []);



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {
        character.map((person, id) => {
          return (
            <Card key={id} person={person} />
          )
        })
      }
    </div>
  );

}




export default App;
