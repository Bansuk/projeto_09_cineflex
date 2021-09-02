import Session from "./Sessions/Session";
import Footer from "../Footer/Footer";
import "./SessionsList.css";
import { useEffect, useState } from "react";
import { getSessionsList } from "../Auxiliar/API";

const SessionsList = () => {
    const [sessions, setSessions] = useState(null);

    useEffect(() => {
        getSessionsList(2).then(response => setSessions(response.data.days));
    }, []);

    if (sessions === null) {
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
            <Footer />
        </>
    );
};

export default SessionsList;
