import { combineReducers } from "redux";
import sachReducer from "./sachReducer";
import loaiSachReducer from "./loaiSachReducer";
import giohangReducer from "./giohangReducer";

const rootReducer =  combineReducers({
    sach:sachReducer,
    loaisach:loaiSachReducer,
    giohang: giohangReducer,
}) 
export default rootReducer;