import Button from "../../Auxiliar/Button";
import "./Session.css";

const Session = ({ date, weekday, showtimes }) => {
    return (
        <>
            <span className="session__daytime">
                {weekday} - {date}
            </span>
            <div className="session__hours">
                {showtimes.map(showtime => (
                    <Button
                        key={showtime.id}
                        content={showtime.name}
                        style={"session__button"}
                    />
                ))}
            </div>
        </>
    );
};

export default Session;
