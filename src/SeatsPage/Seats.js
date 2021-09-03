import Button from "../Auxiliar/Button";
import "./Seats.css";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { getSeatsList } from "../Auxiliar/API";
import { useParams } from "react-router-dom";

const Seats = () => {
    const { idSessao } = useParams();
    const [seats, setSeats] = useState(null);

    useEffect(() => {
        getSeatsList(idSessao).then(response => setSeats(response.data));
    }, [idSessao]);

    if (seats === null) {
        return <span>Carregando...</span>;
    }

    return (
        <div className="seats">
            <div className="seats__map">
                <div className="seats__seat">01</div>
            </div>
            <form className="seats__form">
                <div className="seats__input">
                    <span>Nome do comprador:</span>
                    <input type="text" placeholder="Digite seu nome..." />
                </div>

                <div className="seats__input">
                    <span>CPF do comprador:</span>
                    <input type="text" placeholder="Digite seu CPF..." />
                </div>
            </form>
            <Button style={"seats__button"} content={"Reservar assento(s)"} />
            <Footer
                key={seats.movie.id}
                movieTitle={seats.movie.title}
                id={seats.movie.id}
                source={seats.movie.posterURL}
                alt={seats.movie.overview}
                movieShowtime={`${seats.day.weekday} - ${seats.name}`}
            />
        </div>
    );
};

export default Seats;
