import Header from "./Header/Header";
import MainTitle from "./MainTitle/MainTitle";
import MoviesList from "./MoviesList/MoviesList";
import SessionsList from "./SessionsList/SessionsList";
import Seats from "./SeatsPage/Seats";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Header />
            <MainTitle content={"Selecione o filme"} />
            <SessionsList path="/sessoes/:idFilme" />{" "}
        </>
    );
};

export default App;
