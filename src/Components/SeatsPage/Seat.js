import { useState } from "react";

const Seat = ({ seat, selectSeat }) => {
    const [selected, setSelected] = useState("");

    return (
        <button
            className={`seats__seat ${
                seat.isAvailable ? "" : "seats__seat--unavailable"
            } ${selected}`}
            onClick={() => {
                if (!seat.isAvailable) {
                    alert("Esse assento não está disponível.");
                    return;
                }

                if (!selected) {
                    setSelected("seats__seat--selected");
                    selectSeat(seat, true);
                } else {
                    setSelected("");
                    selectSeat(seat, false);
                }
            }}
        >
            {seat.name}
        </button>
    );
};
export default Seat;
