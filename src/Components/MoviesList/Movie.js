import { Link } from "react-router-dom";
import styled from "styled-components";

const Movies = ({ link, source, alt, isfooter }) => {
    return (
        <Link to={link}>
            <Card isfooter={isfooter}>
                <img src={source} alt={alt} />
            </Card>
        </Link>
    );
};

export default Movies;

const Card = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    height: ${props => (props.isfooter ? "89px" : "209px")};
    justify-content: center;
    ${props =>
        props.isfooter
            ? "margin: 14px 14px 14px 10px;"
            : "margin-bottom: 20px"};
    width: ${props => (props.isfooter ? "64px" : "145px")};

    img {
        height: ${props => (props.isfooter ? "72px" : "193px")};
        width: ${props => (props.isfooter ? "48px" : "129px")};
    }
`;
