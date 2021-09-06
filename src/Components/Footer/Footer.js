import styled from "styled-components";
import Movie from "../MoviesList/Movie";

const Footer = ({ movieTitle, movieShowtime, id, source, alt }) => {
    return (
        <FooterStyle>
            <Movie id={id} source={source} alt={alt} isfooter={true} />
            <div>
                <FooterTitle>{movieTitle}</FooterTitle>
                <br />
                <FooterTitle>{movieShowtime}</FooterTitle>
            </div>
        </FooterStyle>
    );
};

export default Footer;

const FooterStyle = styled.div`
    align-items: center;
    background-color: #dfe6ed;
    border: 1px solid #9eadba;
    bottom: 0;
    display: flex;
    height: 117px;
    position: fixed;
    width: 100%;
`;

const FooterTitle = styled.span`
    font-size: 26px;
    font-family: "Roboto", sans-serif;
    color: #293845;
    font-weight: 400;
`;
