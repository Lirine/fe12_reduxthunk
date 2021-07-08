import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from "react-redux";
import {deleteCard} from "./redux/actions";

const DeleteModal = (props) => {


    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const deleteButtonHandler = () => {
        props.deleteThisCard(props.id)
        toggle()
    }


    return (
        <div>
            <Button outline color="danger" onClick={toggle}>DELETE</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Delete</ModalHeader>
                <ModalBody>
                    Do you want to delete "{props.name}"?
                </ModalBody>
                <ModalFooter>
                    <Button outline color="success" onClick={deleteButtonHandler} >Submit</Button>{' '}
                    <Button outline color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    deleteThisCard: (id) => dispatch(deleteCard(id))
})

export default connect(null,mapDispatchToProps) (DeleteModal);
