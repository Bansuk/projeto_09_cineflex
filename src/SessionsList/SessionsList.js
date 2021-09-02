import Session from "./Sessions/Session";
import Footer from "../Footer/Footer";
import "./SessionsList.css";

const SessionsList = () => {
    return (
        <>
            <div className="sessionsList">
                <Session />
                <Session />
            </div>
            <Footer />
        </>
    );
};

export default SessionsList;
