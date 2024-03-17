import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormDropdown = ({ cardName, children, state, setState, processing, cardId }) => {
    const [dropdownState, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        if (!dropdownState) {
            // Close all other dropdowns
            setState(false);
        }
        setDropdownOpen(!dropdownState);
    };

    return (
        <div className={`form-dropdown ${dropdownState ? 'open' : ''}`}>
            <div className="form-dropdown-header flex flex-col align-items-center" onClick={toggleDropdown}>
                <div className="form-dropdown-title text-center">
                    <p className="fs-5 pb-1">{cardName}</p>
                    <p>{cardId}</p>
                </div>
                <Button className="w-20 mt-3" variant="outline-light" disabled={state} onClick={(e) => e.preventDefault()}>
                    {dropdownState ? 'Close' : 'Edit'}
                </Button>
            </div>
            {dropdownState && (
                <div className="form-dropdown-content">
                    <Form onSubmit={(e) => e.preventDefault()}>
                        {children}
                        <div className="form-buttons flex justify-center mt-3 gap-2">
                            <Button variant="primary" type="submit" disabled={processing}>
                                Update
                            </Button>
                            <Button variant="secondary" onClick={toggleDropdown}>
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </div>
            )}
        </div>
    );
};

export default FormDropdown;
