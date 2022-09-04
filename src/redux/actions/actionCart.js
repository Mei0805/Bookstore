import axios from "axios"
import * as types from '../const/actionType'

const getCartList = (arrCart) => ({
    type: types.LOAD_CART,
    payload: arrCart
})

const addCart = (cartI) => ({
    type: types.THEM_CART,
    payload: cartI
})

const deleteCart = (cartI) => ({
    type: types.XOA_CART,
    payload: cartI
})

export const actionLoadCart = () => {
    return function (dispatch) {
        axios
        .get(`http://localhost:5000/giohang`)
        .then((res)=>{
            console.log('response: ',res)
            dispatch(getCartList(res.data))
            
        })
        .catch(err=> console.log(err));
    }
}

export const actionAddCart = (cartI) => {
    return function (dispatch) {
        axios
        .post(`http://localhost:5000/giohang`,cartI)
        .then((res)=>{
            console.log('response: ',res)
            dispatch(addCart(res.data))
            dispatch(actionLoadCart())
        })
        .catch(err=> console.log(err.response.data));
    }
}

export const actionXoaCart = (cartID) => {
    return function(dispatch){
        axios
        .delete(`http://localhost:5000/giohang/${cartID}`)
        .then((res)=>{
            console.log('response: ',res)
            dispatch(deleteCart())
            dispatch(actionLoadCart())
        })
        .catch((err)=> console.log(err))
    }
}