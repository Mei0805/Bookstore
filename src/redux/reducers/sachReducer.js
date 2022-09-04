import * as types from '../const/actionType'
const initialState = {
    sach: [],
    motsach:[],
    loading: false,
}

const sachReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_SACH:
            return {
                ...state,
                sach: action.payload,
                loading: false,
            }
        case types.GET_MOTSACH:
            return{
                ...state,
                motsach:action.payload,
                loading:false,
            }
        case types.THEM_SACH:
            return state;
        case types.SUA_SACH:
            return state;
        case types.XOA_SACH:
            return state;
        default: return state;
    }

}
export default sachReducer;