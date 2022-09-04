import axios from "axios"
import * as types from '../const/actionType'

const loadLoaiSach = (arrloaisach) => ({
    type: types.LOAD_LOAISACH,
    payload: arrloaisach
})
const loadMotSach = (bookI) => ({
    type: types.GET_MOTLOAI,
    payload: bookI
})

const addLoaiSach = (loaisach) => ({
    type: types.THEM_LOAISACH,
    payload: loaisach
})

const updateLoaiSach = (loaisach) => ({
    type: types.SUA_LOAISACH,
    payload: loaisach
})

const deleteLoaiSach = (loaiID) => ({
    type: types.XOA_LOAISACH,
    payload: loaiID
})

export const actionLoadBookTypes = () => {
    return function (dispatch) {
        axios
        .get(`http://localhost:5000/loaisach?_sort=id&_order=asc`)
        .then((res)=>{
            console.log('response: ',res)
            dispatch(loadLoaiSach(res.data))
            
        })
        .catch(err=> console.log(err));
    }
}

export const actionLayMotLoai = (id) =>{
    return function (dispatch) {
        axios
        .get(`http://localhost:5000/loaisach/${id}`)
        .then((res)=>{
            console.log('response: ',res)
            dispatch(loadMotSach(res.data))
            
        })
        .catch(err=> console.log(err));
    }
}

export const actionAddBookType = (loai) => {
    return function (dispatch) {
        axios
        .post(`http://localhost:5000/loaisach`,loai)
        .then((res)=>{
            console.log('response: ',res)
            dispatch(addLoaiSach(res.data))
            dispatch(actionLoadBookTypes())
        })
    }
}

export const actionUpdateBookType = (loaiI,LoaiID) => {
    return function (dispatch) {
        axios
        .put(`http://localhost:5000/loaisach/${LoaiID}`,loaiI)
        .then((res)=>{
            console.log('response: ',res)
            dispatch(updateLoaiSach(res.data))
            dispatch(actionLoadBookTypes())
        })
    }
}

export const actionXoaSachType = (loaiID) => {
    return function(dispatch){
        axios
        .delete(`http://localhost:5000/loaisach/${loaiID}`)
        .then((res)=>{
            console.log('response: ',res)
            dispatch(deleteLoaiSach())
            dispatch(actionLoadBookTypes())
        })
        .catch((err)=> console.log(err))
    }
}