import Movie from "../MoviesList/Movies/Movie";
import "./Footer.css";

const Footer = ({ movieTitle, movieShowtime }) => {
    return (
        <div className="footer">
            <Movie cardStyle={"footer__card"} imageStyle={"footer__image"} />
            <div>
                <span className="footer__title">{movieTitle}</span>
                <br />
                <span className="footer__title">{movieShowtime}</span>
            </div>
        </div>
    );
};

export default Footer;
