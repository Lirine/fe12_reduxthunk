import React, { useState } from 'react';
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

import {connect} from "react-redux";
import {addCard} from "./redux/actions";

const AddModal = (props) => {

    const [modal, setModal] = useState(false);
    const [newName, setNewName] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newPriority, setNewPriority] = useState('')

    const toggle = () => setModal(!modal);

    const addButtonHandler = () => {
        props.addThisCard({
            name: newName,
            description: newDescription,
            priority: newPriority,
            status: 'todo'
        })

        toggle()
    }

   return (
        <div>
            <Button outline color="primary" onClick={toggle}>ADD CARD</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Add new card</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Task title</InputGroupText>
                        </InputGroupAddon>
                        <Input type='text' value={newName} onChange={e => setNewName(e.target.value)}/>
                    </InputGroup>

                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                Task description
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" value={newDescription} onChange={e => setNewDescription(e.target.value)}/>
                    </InputGroup>
                    <select className="form-select" aria-label="Default select example"
                            value={newPriority} onChange={e => setNewPriority(e.target.value)}>
                        <option defaultValue={1}>Priority</option>
                        {props.priorities.map(el => <option key = {el} value={el}>{el}</option>)}
                    </select>
                </ModalBody>
                <ModalFooter>
                    <Button outline color="success" onClick={addButtonHandler}>Submit</Button>{' '}
                    <Button outline color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => ({
    statuses: state.statuses,
    priorities: state.priorities
})

const mapDispatchToProps = (dispatch) => ({
     addThisCard: (obj)=> dispatch(addCard(obj))
    })

export default connect(mapStateToProps, mapDispatchToProps) (AddModal);