import "./Button.css";

const Button = ({ style, content }) => {
    return <button className={`button ${style}`}>{content}</button>;
};
export default Button;
