import Header from "./Components/Header/Header";
import MainTitle from "./Components/MainTitle/MainTitle";
import MoviesList from "./Components/MoviesList/MoviesList";
import SessionsList from "./Components/SessionsList/SessionsList";
import Seats from "./Components/SeatsPage/Seats";
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
                <Route path="/assentos/:idSessao" exact component={Seats} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
