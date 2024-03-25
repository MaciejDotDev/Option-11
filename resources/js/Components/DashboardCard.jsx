import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { FaCaretDown } from "react-icons/fa";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
const DashboardCard = ({ cardName, children, wish, wishlistAmount }) => {
    const [dropdownstate, setDropdownopen] = useState(false);

    const setOpen = () => {
        if (dropdownstate == false) {
            setDropdownopen(true);
        } else {
            setDropdownopen(false);
        }
    };

    const wishlistCount = (wish) => {


if (!wishlistAmount == 0) {

    return (
        <div
        className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
        style={{
            width: "2rem",
            height: "2rem",
           // position: "absolute",
            marginLeft: "18rem",
            marginBottom: "20rem",
            transform: "translateY(-100%)",
            display:"inline-flex"
        }}
    >
        <span style={{ color: "#fff", fontSize: "1rem" }}>
{wishlistAmount}
        </span>
    </div>

    );

}










    }

    return (
        <div className="dashboardcard">
            <div
                className={
                    "dashboardContainer " +
                    (dropdownstate ? "expand" : "closed")
                }
            >
                <div className="card-title dashboard">

                    <p> {cardName}  {wishlistCount()} </p>

                </div>

                <div
                    className={
                        "arrowContainer " + (dropdownstate ? "open" : "closed")
                    }
                >
                    <Button
                        style={{
                            transition: "all 400ms ease-in-out",
                            cursor: "pointer",
                            width: "100%",
                            color: "grey",
                            marginTop: " 0.1rem",
                        }}
                        sx={{color: 'white'}}
                        onClick={() => {
                            setOpen();
                        }}
                    >
                        {" "}
                        <FaCaretDown
                            className="arrowIcon"
                            fontSize="40px"
                            style={{
                                transform: dropdownstate
                                    ? "rotate(180deg)"
                                    : "translate(0px, 0px)",
                                transition: "all 400ms ease-in-out",
                                // Set the background color to grey
                                zIndex: "1",
                                "&:hover": {
                                    backgroundColor: "darkgrey", // Optionally change the hover color
                                },
                            }}
                        />
                    </Button>
                </div>
                {/* to modify below add an arraow and change the div */}
                <div className="card-open">{children}</div>
            </div>
        </div>
    );
};

export default DashboardCard;
