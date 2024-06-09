const setNewLib = (state = true, action) => {
    switch (action.type) {
        case "NEW":
            return !state
        default:
            return state
    }
}
export default setNewLib;