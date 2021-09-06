import styled from "styled-components";

const MainTitle = ({ content, issuccesspage }) => {
    return <Title issuccesspage={issuccesspage}>{content}</Title>;
};

export default MainTitle;

const Title = styled.h1`
    color: ${props => (props.issuccesspage ? "#247A6B" : "#293845")};
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: ${props => (props.issuccesspage ? "700" : "400")};
    margin: 100px 0 35px 0;
    text-align: center;
`;
