import { Link } from "react-router-dom";
import "./Movie.css";

const Movies = ({ link, imageStyle, cardStyle, source, alt }) => {
    return (
        <Link to={link}>
            <div className={cardStyle}>
                <img className={imageStyle} src={source} alt={alt} />
            </div>
        </Link>
    );
};

export default Movies;
