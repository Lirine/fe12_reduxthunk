import axios from "axios";

export function getStatuses() {
    return (dispatch) =>
        axios
            .get('https://nazarov-kanban-server.herokuapp.com/column')
            .then(res => dispatch({
                type: "GET_STATUSES",
                payload: res.data
            }))
            .catch(err => console.log(err))

}

export function getCards() {
    return (dispatch) =>
        axios
            .get('https://nazarov-kanban-server.herokuapp.com/card')
            .then(res => dispatch({
                type: "GET_CARDS",
                payload: res.data
            }))
            .catch(err => console.log(err))
}

export function addCard(obj) {
    return (dispatch) => {
        axios
            .post("https://nazarov-kanban-server.herokuapp.com/card", {...obj})
            .then(res => dispatch(getCards()))
            .catch(err => console.log(err))
    }
}

export function deleteCard(id) {
    return (dispatch) =>
        axios
            .delete(`https://nazarov-kanban-server.herokuapp.com/card/${id}`)
            .then(res => dispatch(
                getCards()
            ))
            .catch(err => console.log(err))
}

export function changeStatus(card, statuses, direction) {

    const statusArr = statuses.map(el => el.status)
    const newStatus = statusArr[statusArr.indexOf(card.status) + direction]

    return (dispatch) => {
        axios
            .patch(`https://nazarov-kanban-server.herokuapp.com/card/${card._id}`, {status: newStatus})
            .then(res => dispatch(
                getCards()
            ))
            .catch(err => console.log(err))
    }
}

export function changePriority(id, priority, direction) {
    const newPriority = priority + direction
    return (dispatch) => {
        axios
            .patch(`https://nazarov-kanban-server.herokuapp.com/card/${id}`, {priority: newPriority})
            .then(res => dispatch(getCards()))
            .catch(err => console.log(err))
    }
}

export function editCard(id, obj) {
    return (dispatch) => {
        axios
            .patch(`https://nazarov-kanban-server.herokuapp.com/card/${id}`, {...obj})
            .then(res => dispatch(
                getCards()
            ))
            .catch(err => console.log(err))
    }
}
