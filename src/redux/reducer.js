const initialState = {
    statuses: [],
    cards: [],
    priorities: [1,2,3,4,5]
}

const kanban = (state=initialState,action) => {

    switch(action.type) {
        case "GET_STATUSES":
            return {...state, statuses: action.payload}
        case "GET_CARDS":
            return {...state, cards: action.payload}
        default: return state
    }
}

export default kanban