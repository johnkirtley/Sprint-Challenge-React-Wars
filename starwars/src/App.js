
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./components/Card";
import styled from "styled-components";
import './App.css';

const App = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        setData(res.data.results);
      })
      .catch(err => {
        console.log("Cannot get data", err);
      })
  }, [])

  const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  `





  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Grid>
        {
          data.map((character, id) => {
            return (
              <>
                <Cards character={character} key={id} />
              </>
            )
          })
        }
      </Grid>
    </div>
  );

}




export default App;
