import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeReducer from "./EmployeeFromReducer"

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeReducer
})