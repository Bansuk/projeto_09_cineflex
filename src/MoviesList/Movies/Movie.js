import { Link } from "react-router-dom";
import "./Movie.css";

const Movies = ({ id, imageStyle, cardStyle, source, alt }) => {
    return (
        <Link to={`/sessoes/${id}`}>
            <div className={cardStyle}>
                <img className={imageStyle} src={source} alt={alt} />
            </div>
        </Link>
    );
};

export default Movies;
