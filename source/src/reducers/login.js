const reducerLogin = (state = false, action) => {
    switch (action.type) {
        case "login":
            return !state
        default:
            return state
    }
}
export default reducerLogin;
