import React from "react";

const VerifyPasswordModal = ({handleShow, handleClose, show ,setShow}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    handleShow()
    return (
        <div>
            <Modal centered size="sm" className="text-dark" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className=" text-red-600">Query Received!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thank you for your query! We have received it and will get back to you within 48 hours.
                </Modal.Body>

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

