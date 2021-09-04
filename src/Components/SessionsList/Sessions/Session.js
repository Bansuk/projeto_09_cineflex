import Button from "../../../Auxiliar/Button";
import "./Session.css";
import { Link } from "react-router-dom";

const Session = ({ date, weekday, showtimes }) => {
    return (
        <>
            <span className="session__daytime">
                {weekday} - {date}
            </span>
            <div className="session__hours">
                {showtimes.map((showtime, index) => (
                    <Link to={`/assentos/${showtime.id}`}>
                        <Button
                            key={index}
                            content={showtime.name}
                            style={"session__button"}
                        />
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Session;
