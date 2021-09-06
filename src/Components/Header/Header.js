import styled from "styled-components";

const Header = () => {
    return (
        <Container>
            <h1>CINEFLEX</h1>
        </Container>
    );
};

export default Header;

const Container = styled.header`
    align-items: center;
    background-color: #c3cfd9;
    display: flex;
    height: 67px;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;

    h1 {
        color: #e8833a;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 34px;
    }
`;
