import styled from "styled-components";
import loading from "../Assets/loading-buffering.gif";

const Loading = () => {
    return (
        <Container>
            <img src={loading} alt="Carregando..." />
        </Container>
    );
};

export default Loading;

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 250px;

    img {
        width: 150px;
    }
`;
