import { useState, useEffect } from "react";
import { getMoviesList } from "../Auxiliar/API";
import Movies from "./Movies/Movie";
import "./MoviesList.css";

const MoviesList = () => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        getMoviesList().then(response => {
            setMovies(response.data);
        });
    }, []);

    if (movies === null) {
        return <span>Carregando...</span>;
    }

    return (
        <div className="moviesList">
            {movies.map(movie => (
                <Movies
                    key={movie.id}
                    imageStyle={"movie__image"}
                    cardStyle={"movie__card"}
                    source={movie.posterURL}
                    alt={movie.overview}
                />
            ))}
        </div>
    );
};

export default MoviesList;
