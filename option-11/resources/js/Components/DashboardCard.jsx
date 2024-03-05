import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
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
                   
                 
                    
                >
                    <p> {cardName} </p>
                 
                   
                </div>

                
                <div
                className={
                    "arrowContainer " +
                    (dropdownstate ? "open" : "closed")
                }
           
                onClick={() => {
                    setOpen();
                }}


            >
                
             
          <SlArrowDown fontSize="30px"/>
                </div>
                {/* to modify below add an arraow and change the div */}
               
                <div className="card-open">{children}</div>
              

            </div>
        </div>
    );
};

export default DashboardCard;
