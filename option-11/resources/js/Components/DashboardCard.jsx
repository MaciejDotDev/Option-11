import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { FaCaretDown } from "react-icons/fa";
const DashboardCard = ({ cardName, children }) => {
    const [dropdownstate, setDropdownopen] = useState(false);

    const setOpen = () => {
        if (dropdownstate == false) {
            setDropdownopen(true);
        } else {
            setDropdownopen(false);
        }
    };

    return (
        <div className="dashboardcard">
            <div
                className={
                    "dashboardContainer " +
                    (dropdownstate ? "expand" : "closed")
                }
            >
                <div className="card-title dashboard">
                    <p> {cardName} </p>
                </div>

                <div
                    className={
                        "arrowContainer " + (dropdownstate ? "open" : "closed")
                    }
                >
                    <FaCaretDown
                    className="arrowIcon"
                        fontSize="40px"
                        style={{
                            transform: dropdownstate
                                ? "rotate(180deg)"
                                : "translate(0px, 25px)",
                            transition: "all 400ms ease-in-out",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            setOpen();
                        }}
                    />
                </div>
                {/* to modify below add an arraow and change the div */}
                <div className="card-open" style={{ marginBottom: "2rem" }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardCard;
