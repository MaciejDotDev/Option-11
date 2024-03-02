import React, { useState } from "react";
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
                <div
                    className="card-title dashboard"
                    onClick={() => {
                        setOpen();
                    }}
                >
                    <p> {cardName} </p>
                </div>
                {/* to modify below add an arraow and change the div */}
                <div
                    style={{
                      
                    }}
                >
         
                </div>

                <div className="card-open">{children}</div>
            </div>
        </div>
    );
};

export default DashboardCard;
