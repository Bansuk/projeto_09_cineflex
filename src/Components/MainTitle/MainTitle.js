import "./MainTitle.css";

const MainTitle = ({ content, style }) => {
    return <h1 className={`mainTitle ${style}`}>{content}</h1>;
};

export default MainTitle;
