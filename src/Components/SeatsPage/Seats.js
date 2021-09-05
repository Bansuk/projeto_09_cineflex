import { useEffect, useState } from "react";
import { bookSeats, getSeatsList } from "../../Auxiliar/API";
import { useParams } from "react-router-dom";
import Button from "../../Auxiliar/Button";
import Footer from "../Footer/Footer";
import Seat from "./Seat";
import "./Seats.css";

const Seats = () => {
    const { idSessao } = useParams();
    const [seats, setSeats] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [buyerName, setBuyerName] = useState("");
    const [buyerId, setBuyerId] = useState("");
    const order = { ids: [], name: "", cpf: "" };

    useEffect(() => {
        getSeatsList(idSessao).then(response => setSeats(response.data));
    }, [idSessao]);

    if (seats === null) return <span>Carregando...</span>;

    const selectSeat = (seat, selected) => {
        if (selected) setSelectedSeats([...selectedSeats, seat.id]);
        else setSelectedSeats(selectedSeats.filter(e => e !== seat.id));
    };

    const sendOrder = () => {
        order.ids = selectedSeats;
        order.name = buyerName;
        order.cpf = buyerId;
        bookSeats(order);
    };

    return (
        <div className="seats">
            <div className="seats__map">
                {seats.seats.map(seat => (
                    <Seat seat={seat} selectSeat={selectSeat} />
                ))}
            </div>
            <form className="seats__form">
                <div className="seats__input">
                    <span>Nome do comprador:</span>
                    <input
                        type="text"
                        placeholder="Digite seu nome..."
                        value={buyerName}
                        onChange={e => setBuyerName(e.target.value)}
                    />
                </div>

                <div className="seats__input">
                    <span>CPF do comprador:</span>
                    <input
                        type="text"
                        placeholder="Digite seu CPF..."
                        value={buyerId}
                        onChange={e => setBuyerId(e.target.value)}
                    />
                </div>
            </form>
            <Button
                style={"seats__button"}
                content={"Reservar assento(s)"}
                onClick={sendOrder()}
            />
            <Footer
                movieTitle={seats.movie.title}
                link={""}
                source={seats.movie.posterURL}
                alt={seats.movie.overview}
                movieShowtime={`${seats.day.weekday} - ${seats.name}`}
            />
        </div>
    );
};

export default Seats;
