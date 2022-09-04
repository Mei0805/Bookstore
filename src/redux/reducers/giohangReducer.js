import * as types from '../const/actionType'
const initialState = {
    giohang: [],
    loading: false,
}

const giohangReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_CART:
            return {
                ...state,
                giohang: action.payload,
                loading: false,
            }
        case types.THEM_CART:
            return {
                ...state,
                loading: false,
            }
        case types.XOA_CART:
            return {
                ...state,
                loading: false,
            }
        case types.SUM_CART:
            return {
                ...state,
                loading: false,
            }
        default: return state;

    }

}
export default giohangReducer;