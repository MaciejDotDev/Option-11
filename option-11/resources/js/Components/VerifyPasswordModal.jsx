

import { Container, Form, Button, Modal } from "react-bootstrap";
const VerifyPasswordModal = ({handleShow, handleClose, show ,setShow}) => {


    return (
        <div>
            <Modal centered size="sm" className="text-dark" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className=" text-red-600">For your security please enter your password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thank you for your query! We have received it and will get back to you within 48 hours.
                </Modal.Body>
                <Button
                            variant="primary"
                            type="submit"
                            className="ms-4 mt-8 d-block w-50"

                        >
                            Generate Report
                        </Button>
                <Modal.Footer>
                    <Button variant="outline-dark" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default VerifyPasswordModal;
