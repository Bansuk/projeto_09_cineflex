import { useEffect, useState } from "react";
import { bookSeats, getSeatsList } from "../../Auxiliar/API";
import { Link, useParams } from "react-router-dom";
import Button from "../../Auxiliar/Button";
import Footer from "../Footer/Footer";
import Loading from "../../Auxiliar/Loading";
import Seat from "./Seat";
import MainTitle from "../MainTitle/MainTitle";
import "./Seats.css";

const Seats = ({ updateOrder, order }) => {
    const { idSessao } = useParams();
    const [seats, setSeats] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedSeatsNumber, setSelectedSeatsNumber] = useState([]);
    const [buyerName, setBuyerName] = useState("");
    const [buyerId, setBuyerId] = useState("");

    useEffect(() => {
        getSeatsList(idSessao).then(response => setSeats(response.data));
    }, [idSessao]);

    if (seats === null) return <Loading />;

    const selectSeat = (seat, selected) => {
        if (selected) {
            setSelectedSeats([...selectedSeats, seat.id]);
            setSelectedSeatsNumber([...selectedSeatsNumber, seat.name]);
        } else {
            setSelectedSeats(selectedSeats.filter(e => e !== seat.id));
            setSelectedSeatsNumber(
                selectedSeatsNumber.filter(e => e !== seat.name)
            );
        }
    };

    const handleOrder = e => {
        if (selectedSeats.length === 0) {
            alert("Pelo menos um assento deve ser escolhido!");
            e.preventDefault();
        }

        if (buyerName === "") {
            alert("O nome do comprador não pode estar em branco!");
            e.preventDefault();
        } else if (!/^([^0-9]*)$/.test(buyerName)) {
            alert("O nome do comprador não pode conter números!");
            e.preventDefault();
        }
        if (buyerId === "") {
            alert("O cpf do comprador não pode estar em branco!");
            e.preventDefault();
        } else if (!/\d{3}\.?\d{3}\.?\d{3}-?\d{2}/.test(buyerId)) {
            alert("Formato de CPF inválido!");
            e.preventDefault();
        }

        updateOrder(
            seats.movie.title,
            seats.day.date,
            seats.name,
            selectedSeatsNumber,
            selectedSeats,
            buyerName,
            buyerId
        );
    };

    const sendOrder = () => {
        bookSeats(order.orderInfo);
    };

    return (
        <>
            <MainTitle content={"Selecione o(s) assento(s)"} />
            <div className="seats">
                <div className="seats__map">
                    {seats.seats.map(seat => (
                        <Seat seat={seat} selectSeat={selectSeat} />
                    ))}
                </div>
                <div className="seats__orientation">
                    <div className="seats__example">
                        <button className="seats__seat seats__seat--selected"></button>
                        <div>Selecionado</div>
                    </div>
                    <div className="seats__example">
                        <button className="seats__seat"></button>
                        <div>Disponível</div>
                    </div>
                    <div className="seats__example">
                        <button className="seats__seat seats__seat--unavailable"></button>
                        <div>Indisponível</div>
                    </div>
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
                <Link to="/sucesso" onClick={handleOrder}>
                    <Button
                        content={"Reservar assento(s)"}
                        action={sendOrder}
                        iswider={true}
                    />
                </Link>
                <Footer
                    movieTitle={seats.movie.title}
                    source={seats.movie.posterURL}
                    alt={seats.movie.overview}
                    movieShowtime={`${seats.day.weekday} - ${seats.name}`}
                />
            </div>
        </>
    );
};

export default Seats;
