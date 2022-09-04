import { Col, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { Card } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { BsFillTrashFill } from "react-icons/bs";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionLoadCart, actionXoaCart } from "../../redux/actions/actionCart";

import { NumberFormat } from "../CurrencyFormat";

const CartItem = (props) => {
    let dispatch = useDispatch();
    const handleDeleteCartItem = (id) => {
        if (window.confirm("Xóa nha?")) {
            dispatch(actionXoaCart(id))
        }

    }

    return (
        <tr>
            <td className="text-center " ><img style={{ width: '80px', height: '120px', objectFit: 'cover' }} src={props.book.urlHinh} height='100' alt="imgSach" /></td>
            <td className="align-middle">{props.book.tensach}</td>
            <td className="text-center align-middle">{NumberFormat(Number(props.book.gia))}</td>
            <td className="text-center align-middle">1</td>
            <td className='tienMotSach align-middle'>
                {NumberFormat(Number(props.book.gia) * 1)}
                <button className="deleteCartI" onClick={() => { handleDeleteCartItem(props.book.id) }}> <BsFillTrashFill /> </button>

            </td>
        </tr>
    )

}


const Cart = (props) => {
    const [cartList, setCartList] = useState([]);
    useEffect(() => {
        setCartList(props.listCart);
    }, [props.listCart])

    let dispatch = useDispatch();
    const { giohang } = useSelector(state => state.giohang)

    useEffect(() => {
        dispatch(actionLoadCart())
    }, [])


    // const sumTong = () => {
    //     var sum = 0;
    //     cartList.map(cartItem => {
    //         let sumOne = cartItem.gia * cartItem.soluong;
    //         sum += sumOne;
    //     })
    //     return <div>hi</div>;
    // }




    return (
        <>
            <Row id='breadcrumb' className='justify-content-center p-0 mt-3 '>
                <Col md={10}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                        <Breadcrumb.Item active>Giỏ hàng</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Col md={10} id='' className="p-2" style={{ minHeight: '80vh' }} >
                <h4>Giỏ hàng</h4>
                <Table striped bordered hover className='cartTable'>
                    <thead>
                        <tr className='text-center'>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá tiền</th>
                            <th>Số lượng</th>
                            <th>Tổng tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {giohang && giohang.map((cartI, index) => {
                            return <CartItem book={cartI} />
                        })}
                    </tbody>
                </Table>

                <Row className=' d-flex justify-content-end'>
                    <Card className='col-4 mt-5 p-0'>
                        <Card.Header><strong>Tổng hóa đơn</strong></Card.Header>
                        <Card.Body>
                            <Card.Title id='total'>...</Card.Title>
                        </Card.Body>
                    </Card>

                </Row>
            </Col>

        </>

    )
}
export default Cart;
