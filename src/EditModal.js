import React, {useState} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    InputGroup,
    InputGroupAddon,
    InputGroupText, Input
} from 'reactstrap';
import {editCard} from "./redux/actions";
import {connect} from "react-redux";

const EditModal = (props) => {

    const [modal, setModal] = useState(false);
    const [newName, setNewName] = useState(props.name)
    const [newDescription, setNewDescription] = useState(props.description)

    const toggle = () => setModal(!modal);

    const editButtonHandler = () => {
        props.editThisCard(props.id, {
            name: newName,
            description: newDescription
        })

        toggle()
    }

    return (
        <div>
            <Button outline color="primary" onClick={toggle}>EDIT</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit card {props.name}</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Task title</InputGroupText>
                        </InputGroupAddon>
                        <Input type='text' value={newName} onChange={e => setNewName(e.target.value)}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                Task description
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" value={newDescription} onChange={e => setNewDescription(e.target.value)}/>
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button outline color="success" onClick={editButtonHandler}>Submit</Button>{' '}
                    <Button outline color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    editThisCard: (id, obj) => dispatch(editCard(id, obj))
})

export default connect(null, mapDispatchToProps)(EditModal);