import { useState, useEffect } from "react";
import { getMoviesList } from "../../Auxiliar/API";
import styled from "styled-components";
import Loading from "../../Auxiliar/Loading";
import MainTitle from "../MainTitle/MainTitle";
import Movies from "./Movie";

const MoviesList = () => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        getMoviesList().then(response => {
            setMovies(response.data);
        });
    }, []);

    if (movies === null) {
        return <Loading />;
    }

    return (
        <>
            <MainTitle content={"Selecione o filme"} />
            <Container>
                {movies.map(movie => (
                    <Movies
                        key={movie.id}
                        link={`/sessoes/${movie.id}`}
                        source={movie.posterURL}
                        alt={movie.overview}
                    />
                ))}
            </Container>
        </>
    );
};

export default MoviesList;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 25px 0 25px;
`;
