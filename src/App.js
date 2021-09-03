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
                <Route path="/" exact component={MoviesList} />
                <Route
                    path="/sessoes/:idFilme"
                    exact
                    component={SessionsList}
                />
                <Route path="/assentos/:idSessao" exact>
                    <Seats />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
