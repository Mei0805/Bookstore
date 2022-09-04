import * as types from '../const/actionType'
const initialState = {
    motloai: [],
    loaisach: [],
    loading: false,
}
const loaiSachReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_LOAISACH:
            return {
                ...state,
                loaisach: action.payload,
                loading: false,
            }
        case types.GET_MOTLOAI:
            return {
                ...state,
                motsach: action.payload,
                loading: false,
            }
        case types.THEM_LOAISACH:
            return {
                ...state,
                loading: false,
            }
        case types.SUA_LOAISACH:
            return {
                ...state,
                loading: false,
            }
        case types.XOA_LOAISACH:
            return {
                ...state,
                loading: false,
            }
        default: return state;
    }

}
export default loaiSachReducer