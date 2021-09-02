import "./Movie.css";

const Movies = ({ imageStyle, cardStyle, source, alt }) => {
    return (
        <div className={cardStyle}>
            <img className={imageStyle} src={source} alt={alt} />
        </div>
    );
};

export default Movies;
