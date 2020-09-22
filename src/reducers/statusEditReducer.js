const initialState = {
    statusEdit: false
}

const StatusEditReducer = (state = initialState, action) => {
    switch (action.type) {
    case "CHANGE_STATUS_EDIT":
        return {...state, statusEdit: true}
        case "CHANGE_STATUS_EDIT_CANCEL":
        return {...state, statusEdit: false}
    default:
        return state
    }
}
export default StatusEditReducer;