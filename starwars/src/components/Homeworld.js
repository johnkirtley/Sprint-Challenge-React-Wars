import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";




const Films = (props) => {
    const filmLink = props.film;
    const [film, setFilm] = useState([]);

    useEffect(() => {
        axios
            .get(`${filmLink}`)
            .then(res => {
                setFilm(res.data);
            })
            .catch(err => {
                console.log("Cannot get data", err);
            })
    }, []);





    return (
        <>
            <p>{film.title}</p>
        </>
    )
}

export default Films;