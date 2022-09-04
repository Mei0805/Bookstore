import { Col, Row } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import { BsPencilFill, BsEyeFill, BsPlus } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

import { Route, Routes, Link, Outlet } from "react-router-dom";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionLoadBooks } from '../../redux/actions/actionSach';
import { actionLoadBookTypes } from '../../redux/actions/actionLoaiSach';

import { SachAdmin } from "./Admin/Sach/Sach";
import { LoaiSachAdmin } from "./Admin/LoaiSach/LoaiSach";
import { GioHangAdmin } from "./Admin/GioHang/GioHang";

export const Admin = () => {
    const [listSachbyLoai, setlistSachbyLoai] = useState()
    const [loaisachI, setLoaiSachI] = useState();
    let dispatch = useDispatch();
    const { sach } = useSelector(state => state.sach)
    const { loaisach } = useSelector(state => state.loaisach)


    useEffect(() => {
        dispatch(actionLoadBooks())
    }, [])
    useEffect(() => {
        dispatch(actionLoadBookTypes())
    }, [])

    const handleChangeSachbyLoai = (e) => {
        const idLoai = e.target.value;
        console.log(idLoai);

        if (idLoai == 0) {
            setlistSachbyLoai(sach);
        } else {
            setlistSachbyLoai(sach.filter((sachI) => (sachI.idLoai == idLoai)));
        }
    }

    return (
        <>
            <Row id='breadcrumb' className='justify-content-center p-0 mt-3 '>
                <Col md={10}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                        <Breadcrumb.Item active>Quản trị</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>

            <Col md={2} id='muc2' className="bg-dark text-light p-2 sidebar mt-4 " style={{ minHeight: '100vh' }} >
                <div className='showList'>
                    <h3 style={{ marginBottom: '20px' }}>Danh mục</h3>
                    <ListGroup key={'sm'} className=" my-2">
                        <ListGroup.Item action key={0} value={0} >
                            <Link to="sach" className=" nav-item p-3 text-decoration-none text-dark" >Sách</Link>
                        </ListGroup.Item>
                        <ListGroup.Item action key={0} value={0} >
                            <Link to="loaisach" className=" nav-item p-3 text-decoration-none text-dark" >Loại sách</Link>
                        </ListGroup.Item>
                        <ListGroup.Item action key={0} value={0}>
                            <Link to="giohang" className=" nav-item p-3 text-decoration-none text-dark" >Xem thời tiết</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Col>
            <Col md={8} id='muc1' className="p-4 ps-5" >
                <Outlet />
            </Col>
        </>
    )
}