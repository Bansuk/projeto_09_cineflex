import styled from "styled-components";

const MainTitle = ({ content, color, weigth }) => {
    return (
        <Title color={color} weigth={weigth}>
            {content}
        </Title>
    );
};

export default MainTitle;

const Title = styled.h1`
    color: ${props => props.color || "#293845"};
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: ${props => props.weigth || "400"};
    margin: 100px 0 35px 0;
    text-align: center;
`;
