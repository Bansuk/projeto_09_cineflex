import Session from "./Sessions/Session";
import Footer from "../Footer/Footer";
import "./SessionsList.css";
import { useEffect, useState } from "react";
import { getSessionsList } from "../Auxiliar/API";
import { useParams } from "react-router-dom";

const SessionsList = () => {
    const { idFilme } = useParams();
    const [sessions, setSessions] = useState(null);
    const [movie, setMovies] = useState(null);

    useEffect(() => {
        getSessionsList(idFilme).then(
            response => (
                setSessions(response.data.days), setMovies(response.data)
            )
        );
    }, []);

    if (sessions === null || movie === null) {
        return <span>Carregando...</span>;
    }

    return (
        <>
            <div className="sessionsList">
                {sessions.map(session => (
                    <Session
                        key={session.id}
                        date={session.date}
                        weekday={session.weekday}
                        showtimes={session.showtimes}
                    />
                ))}
            </div>
            <Footer
                movieTitle={movie.title}
                id={movie.id}
                source={movie.posterURL}
                alt={movie.overview}
            />
        </>
    );
};

export default SessionsList;
