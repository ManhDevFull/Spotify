import { combineReducers }from "redux"
import reducerMusic from "./music"
import reducerLogin from "./login"
import setNewLib from "./setNewL"
const allReducers = combineReducers({
    reducerMusic,
    reducerLogin,
    setNewLib,
})
export default allReducers