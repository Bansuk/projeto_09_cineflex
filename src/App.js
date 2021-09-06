import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header/Header";
import MoviesList from "./Components/MoviesList/MoviesList";
import Seats from "./Components/SeatsPage/Seats";
import SessionsList from "./Components/SessionsList/SessionsList";
import SuccessPage from "./Components/SuccessPage/SuccessPage";

const App = () => {
    const [order, setOrder] = useState({
        orderInfo: { ids: [], name: "", cpf: "" },
        title: "",
        date: "",
        showtime: "",
    });

    const updateOrder = (
        title,
        date,
        showtime,
        seatsNumber,
        ids,
        name,
        cpf
    ) => {
        setOrder({
            ...order,
            orderInfo: { ids, name, cpf },
            title,
            date,
            showtime,
            seatsNumber,
        });
    };

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={MoviesList} />
                <Route
                    path="/sessoes/:idFilme"
                    exact
                    component={SessionsList}
                />
                <Route path="/assentos/:idSessao" exact>
                    <Seats updateOrder={updateOrder} order={order} />
                </Route>
                <Route path="/sucesso" exact>
                    <SuccessPage updateOrder={updateOrder} order={order} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
