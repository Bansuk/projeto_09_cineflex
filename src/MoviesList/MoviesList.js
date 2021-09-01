import "./MoviesList.css";
import Movies from "./Movies/Movies";

const MoviesList = () => {
    return (
        <div className="moviesList">
            <Movies />
            <Movies />
            <Movies />
            <Movies />
        </div>
    );
};

export default MoviesList;
