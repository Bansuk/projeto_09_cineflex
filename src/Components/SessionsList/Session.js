import { Link } from "react-router-dom";
import Button from "../../Auxiliar/Button";
import styled from "styled-components";

const Session = ({ date, weekday, showtimes }) => {
    return (
        <>
            <SessionDayTime>
                {weekday} - {date}
            </SessionDayTime>
            <SessionHours>
                {showtimes.map((showtime, index) => (
                    <Link to={`/assentos/${showtime.id}`}>
                        <Button key={index} content={showtime.name} />
                    </Link>
                ))}
            </SessionHours>
        </>
    );
};

export default Session;

const SessionDayTime = styled.span`
    font-size: 20px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    color: #293845;
`;

const SessionHours = styled.div`
    margin: 20px 0;
`;
