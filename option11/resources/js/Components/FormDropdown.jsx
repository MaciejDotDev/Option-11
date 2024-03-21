import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
const FormDropdown = ({ cardName, children, state, setState, processing,cardId }) => {
    const [dropdownstate, setDropdownopen] = useState(false);

    const setOpen = () => {

        //put  atry block to test vairable
        if (dropdownstate == false) {
            setState(true);
            setDropdownopen(true);
        } else {
            setState(false);

            setDropdownopen(false);
        }
    };

    return (
        <div className="dropdownUpdate">
            <div
                className={
                    "dropdowncontainer " + (dropdownstate ? "expand" : "closed")
                }
            >
                <div className="card-title dropdown">
                    <p> {cardName} </p>
                 <p> {cardId}</p>
                </div>
                <div>
                <button
                    disabled={state}
                    class="btn btn-link"
                    type="button"
                    onClick={() => {
                        setOpen();
                    }}
                >
                    Edit
                </button>

                </div>
              
                <div className="card-open dropdown">
                    {children}
                    
                    <Button
                        variant="primary"
                        type="submit"
                        className="ms-4"
                        disabled={processing}
                    >
                        Update
                    </Button>

                    <Button
                        type="button"
                        onClick={() => {
                            setOpen();
                        }}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FormDropdown;
