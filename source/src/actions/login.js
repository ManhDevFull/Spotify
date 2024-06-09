export function stateLogin(type) {
    return {
        type: type,
    }
}
export function valueLogin(type,email, pass) {
    return {
        type: type,
        email: email,
        pass: pass
    }
}