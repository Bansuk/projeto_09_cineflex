import Button from "../Auxiliar/Button";
import "./Seats.css";
import Footer from "../Footer/Footer";

const Seats = () => {
    return (
        <div className="seats">
            <div className="seats__map">
                <div className="seats__seat">01</div>
                <div className="seats__seat">01</div>
                <div className="seats__seat">01</div>
                <div className="seats__seat">01</div>
                <div className="seats__seat">01</div>
                <div className="seats__seat">01</div>
                <div className="seats__seat">01</div>
                <div className="seats__seat">01</div>
                <div className="seats__seat">01</div>
                <div className="seats__seat">01</div>
                <div className="seats__seat">01</div>
                <div className="seats__seat">01</div>
            </div>
            <div className="seats__status">
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
                movieTitle={"Enola Holmes"}
                movieShowtime={"Quinta-feira - 15:00"}
            />
        </div>
    );
};

export default Seats;
