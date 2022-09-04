import axios from "axios"
import * as types from '../const/actionType'

const loadSach = (books) => ({
    type: types.LOAD_SACH,
    payload: books
})

const loadMotSach = (bookI) => ({
    type: types.GET_MOTSACH,
    payload: bookI
})

const addSach = (bookI) => ({
    type: types.THEM_SACH,
    payload: bookI
})

const updateSach = (bookI) => ({
    type: types.SUA_SACH,
    payload: bookI
})

const deleteSach = (bookId) => ({
    type: types.XOA_SACH,
    payload: bookId
})

export const actionLoadBooks = () => {
    return function (dispatch) {
        axios
        .get(`http://localhost:5000/sach`)
        .then((res)=>{
            console.log('response: ',res)
            dispatch(loadSach(res.data))
            
        })
        .catch(err=> console.log(err));
    }
}

export const actionLayMotSach = (id) =>{
    return function (dispatch) {
        axios
        .get(`http://localhost:5000/sach/${id}`)
        .then((res)=>{
            console.log('response: ',res)
            dispatch(loadMotSach(res.data))
            
        })
        .catch(err=> console.log(err));
    }
}

export const actionAddBook = (bookI) => {
    return function (dispatch) {
        axios
        .post(`http://localhost:5000/sach`,bookI)
        .then((res)=>{
            console.log('response: ',res)
            dispatch(addSach(res.data))
            dispatch(actionLoadBooks())
        })
    }
}

export const actionUpdateBook = (bookI,bookID) => {
    return function (dispatch) {
        axios
        .put(`http://localhost:5000/sach/${bookID}`,bookI)
        .then((res)=>{
            console.log('response: ',res)
            dispatch(updateSach(res.data))
            dispatch(actionLoadBooks())
        })
    }
}

export const actionXoaSach = (bookId) => {
    return function(dispatch){
        axios
        .delete(`http://localhost:5000/sach/${bookId}`)
        .then((res)=>{
            console.log('response: ',res)
            dispatch(deleteSach())
            dispatch(actionLoadBooks())
        })
        .catch((err)=> console.log(err))
    }
}