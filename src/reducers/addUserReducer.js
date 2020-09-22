const initialState = {}
const AddUserReducer = (state = initialState, action) => {
    switch (action.type) {
    case "ADD_USER":
        return { ...state, dataUserItem: action.dataUserItem}

    default:
        return state
    }
}

export default AddUserReducer;
