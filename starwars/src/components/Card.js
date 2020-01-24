import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Homeworld from "./Homeworld";


const Cards = (props) => {

    const starshipCount = props.character.starships.length;

    const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    border: 2px solid black;
    margin: 3%;
    background-color: lightgrey;

    &:hover {
        transform: scale(1.1);
        transition: 0.3s ease-in;
    }
    `

    const CardInfo = styled.div`
    display: flex;
    flex-flow: column;
    `

    const FilmContainer = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    
    `




    return (
        <Container>
            <CardInfo>
                <h2>Name: {props.character.name}</h2>
                <h3>Height: {props.character.height}</h3>
                <h3>Gender: {props.character.gender}</h3>
                <h3>{starshipCount > 0 ? `Amount of Starships: ${starshipCount}` : 'No Starships'}</h3>
                <h3>Films:</h3>
                <FilmContainer>
                    {
                        props.character.films.map((film, id) => {
                            return (
                                <Homeworld film={film} key={id} />
                            )
                        })
                    }
                </FilmContainer>
            </CardInfo>
        </Container>
    )
}

export default Cards;