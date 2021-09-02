import Header from "./Header/Header";
import MainTitle from "./MainTitle/MainTitle";
import MoviesList from "./MoviesList/MoviesList";
import SessionsList from "./SessionsList/SessionsList";
import Seats from "./SeatsPage/Seats";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <MainTitle content={"Selecione o filme"} />
            <Switch>
                <Route path="/" exact>
                    <MoviesList />
                </Route>
                <Route path="/sessoes/:idFilme" exact>
                    <SessionsList />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
