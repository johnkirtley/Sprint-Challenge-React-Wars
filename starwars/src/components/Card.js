import React from "react";
import styled from "styled-components";


const Card = (props) => {

    const Container = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
margin: 5% 0;
    `

    const Card = styled.div`
    border: 2px solid black;
    width: 45%;
    margin:auto;
    padding: 5% 0;
    `

    return (
        <Container>
            <Card>
                <h2>{props.person.name}</h2>
                <h3>{props.person.birth_year}</h3>
                <p>{props.person.height}</p>
            </Card>
        </Container>

    )
}

export default Card;