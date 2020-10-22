const initState = { userData: [], coverData: [] };

function studiofyReducer(state = initState, action) {
    switch (action.type) {
        case "LOAD_USERDATA":
            return { ...state, userData: action.payload }
        case "LOAD_COVERS":
            return { ...state, coverData: action.payload }
        default:
            return state
    }
}
export default studiofyReducer