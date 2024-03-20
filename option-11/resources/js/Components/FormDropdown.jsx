import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
const FormDropdown = ({ cardName, children, state, setState, processing,cardId,setClosed, data, submit, type  }) => {
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
        <div className="dropdownUpdate"  >
            <div
                className={
                    "dropdowncontainer " + (dropdownstate ? "expand" : "closed")
                }
                style={{   }}

            >

                <div className="card-title dropdown" style={{  display:"flex" }}>
                <button
                    disabled={state}
                    style={ {marginBottom: "4.1rem"}}
                    class="btn btn-link"
                    type="button"
                    onClick={() => {
                        setOpen();
                    }}
                >
                    Edit
                </button>

                    <strong style={{  marginLeft: "1rem" }}>  {cardName} </strong>
                 <p style={{  marginLeft: "1rem" }}> {cardId}</p>

                </div>

                <div>


                </div>

                <div className="card-open dropdown">
                    {children}

                    <Button

                        variant="primary"
                        type="submit"
                        className="text-white btn btn-dark"
                        disabled={processing}
                        onClick={() => {
                            submit(data, type)
                        }}
                    >
                        Update
                    </Button>

                    <Button
                    style={{  }}
                        type="button"
                        className="text-danger btn btn-dark"
                        onClick={() => {
                            setOpen();
                            setClosed(true);
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
