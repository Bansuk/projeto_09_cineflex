import { getSessionsList } from "../../Auxiliar/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Loading from "../../Auxiliar/Loading";
import MainTitle from "../MainTitle/MainTitle";
import Session from "./Session";

const SessionsList = () => {
    const { idFilme } = useParams();
    const [sessions, setSessions] = useState(null);

    useEffect(() => {
        getSessionsList(idFilme).then(response => setSessions(response.data));
    }, [idFilme]);

    if (sessions === null) {
        return <Loading />;
    }

    return (
        <>
            <MainTitle content={"Selecione o horário"} />
            <Container>
                {sessions.days.map(session => (
                    <Session
                        key={session.id}
                        date={session.date}
                        weekday={session.weekday}
                        showtimes={session.showtimes}
                    />
                ))}
            </Container>
            <Footer
                movieTitle={sessions.title}
                source={sessions.posterURL}
                alt={sessions.overview}
            />
        </>
    );
};

export default SessionsList;

const Container = styled.div`
    margin: 0 0 150px 25px;
`;
