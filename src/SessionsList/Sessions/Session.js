import "./Session.css";
import Button from "../../Auxiliar/Button";

const Session = () => {
    return (
        <>
            <span className="session__daytime">Quinta-feira - 24/06/2021</span>
            <div className="session__hours">
                <Button content={"15:00"} style={"session__button"} />
                <Button content={"19:00"} style={"session__button"} />
            </div>
        </>
    );
};

export default Session;
