import styled from "styled-components";

const Button = ({ content, action, height, width }) => {
    return (
        <ButtonStyle onClick={action} height={height} width={width}>
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
    height: ${props => props.height || "43px"};
    width: ${props => props.width || "83px"};
`;
