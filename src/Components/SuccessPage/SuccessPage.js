import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Auxiliar/Button";
import MainTitle from "../MainTitle/MainTitle";

const SuccessPage = ({ updateOrder, order }) => {
    const clearOrder = () => {
        updateOrder("", "", "", [], [], "", "");
    };

    return (
        <>
            <MainTitle
                content={"Pedido feito com sucesso!"}
                style={"mainTitleSuccess"}
            />
            <Container>
                <Title>Filme e sessão</Title>
                <Information>{order.title}</Information> <br />
                <Information>
                    {order.date} {order.showtime}
                </Information>
                <Title>Ingressos</Title>
                {order.seatsNumber.map(number => (
                    <Information>
                        Assento {number}
                        <br />
                    </Information>
                ))}
                <Title>Comprador</Title>
                <Information>Nome: {order.orderInfo.name}</Information>
                <br />
                <Information>CPF: {order.orderInfo.cpf}</Information>
            </Container>
            <Link to={"/"}>
                <Button
                    style={"seats__button"}
                    content={"Voltar para home"}
                    action={clearOrder}
                />
            </Link>
        </>
    );
};

export default SuccessPage;

const Container = styled.div`
    color: #293845;
    font-family: "Roboto", sans-serif;
    margin-left: 30px;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weigth: 700;
    margin-bottom: 50px;
`;

const Information = styled.span`
    font-size: 22px;
    font-weigth: 400;
`;
