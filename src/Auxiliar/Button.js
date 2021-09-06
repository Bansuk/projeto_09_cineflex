import styled from "styled-components";

const Button = ({ content, action, iswider }) => {
    return (
        <ButtonStyle onClick={action} iswider={iswider}>
            {content}
        </ButtonStyle>
    );
};
export default Button;

const ButtonStyle = styled.button`
    background-color: #e8833a;
    border-radius: 3px;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 400;
    margin-right: 10px;
    height: 43px;
    width: ${props => (props.iswider ? "225px" : "83px")};
`;
