import axios from "axios";

const MOVIES_URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies";

const SEATS_URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes";

const BOOK_URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many";

const getMoviesList = () => {
    return axios.get(MOVIES_URL);
};

const getSessionsList = id => {
    return axios.get(`${MOVIES_URL}/${id}/showtimes`);
};

const getSeatsList = id => {
    return axios.get(`${SEATS_URL}/${id}/seats`);
};

const bookSeats = () => {
    return axios.post(BOOK_URL);
};

export { getMoviesList, getSessionsList, getSeatsList, bookSeats };
