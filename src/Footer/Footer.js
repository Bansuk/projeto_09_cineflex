import Movie from "../MoviesList/Movies/Movie";
import "./Footer.css";

const Footer = ({ movieTitle, movieShowtime, id, source, alt }) => {
    return (
        <div className="footer">
            <Movie
                id={id}
                imageStyle={"footer__image"}
                cardStyle={"footer__card"}
                source={source}
                alt={alt}
            />
            <div>
                <span className="footer__title">{movieTitle}</span>
                <br />
                <span className="footer__title">{movieShowtime}</span>
            </div>
        </div>
    );
};

export default Footer;
