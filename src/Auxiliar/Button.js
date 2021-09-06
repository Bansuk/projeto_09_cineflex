import "./Button.css";

const Button = ({ style, content, action }) => {
    return (
        <button className={`button ${style}`} onClick={action}>
            {content}
        </button>
    );
};
export default Button;
