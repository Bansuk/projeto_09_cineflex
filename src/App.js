import Header from "./Header/Header";
import MainTitle from "./MainTitle/MainTitle";
import MoviesList from "./MoviesList/MoviesList";
import SessionsList from "./SessionsList/SessionsList";
import Seats from "./SeatsPage/Seats";

const App = () => {
    return (
        <>
            <Header />
            <MainTitle content={"Selecione o filme"} />
            <MoviesList />
            {/* <SessionsList /> */}
            {/* <Seats /> */}
        </>
    );
};

export default App;
