import { Component } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { actionAddCart } from "../redux/actions/actionCart";
import { NumberFormat } from "./CurrencyFormat";


const ListSach = (props) => {
  let dispatch = useDispatch();
  const {giohang} = useSelector(state=>state.giohang)

  const handleAddCart = (bookI) =>{
    console.log('Thêm giỏ hàng: ', bookI)
    dispatch(actionAddCart(bookI))
    alert("đã thêm giỏ hàng!")
  }

    return (
      <>
        <div id="bookListContainer">
          { props.ds &&
            props.ds.map((bookI) => {
            return <>
              <div className='bookItem' key={bookI.id}>
                <h3>{bookI.tensach}</h3>
                <Link to={`/product/${bookI.id}`} id="namePage" className="navbar-brand text-decoration-none">  <img src={bookI.urlHinh} alt='bookIMG' /></Link>
                <p className="price"> {NumberFormat(Number(bookI.gia))}</p>
                <div className="button">
                  <button className="likeBtn">Thích</button>
                  <button className="muaBtn" onClick={()=> {handleAddCart(bookI)}}>Chọn mua</button>
                </div>
              </div>
            </>
            
          })}
        </div>
      </>

    )}
export default ListSach;