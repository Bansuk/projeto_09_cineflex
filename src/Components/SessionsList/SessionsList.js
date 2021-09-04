import Session from "./Sessions/Session";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { getSessionsList } from "../../Auxiliar/API";
import { useParams } from "react-router-dom";
import "./SessionsList.css";

const SessionsList = () => {
    const { idFilme } = useParams();
    const [sessions, setSessions] = useState(null);

    useEffect(() => {
        getSessionsList(idFilme).then(response => setSessions(response.data));
    }, [idFilme]);

    if (sessions === null) {
        return <span>Carregando...</span>;
    }

    return (
        <>
            <div className="sessionsList">
                {sessions.days.map((session, index) => (
                    <Session
                        key={index}
                        date={session.date}
                        weekday={session.weekday}
                        showtimes={session.showtimes}
                    />
                ))}
            </div>
            <Footer
                movieTitle={sessions.title}
                link={null}
                source={sessions.posterURL}
                alt={sessions.overview}
            />
        </>
    );
};

export default SessionsList;
