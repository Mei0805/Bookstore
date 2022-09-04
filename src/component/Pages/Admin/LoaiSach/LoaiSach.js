import { Col, Row } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import { BsPencilFill, BsEyeFill, BsPlus } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionLoadBookTypes } from "../../../../redux/actions/actionLoaiSach";
import { actionXoaSachType } from "../../../../redux/actions/actionLoaiSach";
export const LoaiSachAdmin = () => {
    let dispatch = useDispatch();
    const { loaisach } = useSelector(state => state.loaisach)

    useEffect(() => {
        dispatch(actionLoadBookTypes())
    }, [])

    const handleDeleteLoai = (id) => {
        if (window.confirm("Xóa nha?")) {
            dispatch(actionXoaSachType(id))
        }
    }

    return (
        <>
            <Link to="themloai" className=" nav-item p-3 text-decoration-none" >
                <Button style={{ marginBottom: '10px' }} variant="outline-secondary"><BsPlus />  Thêm Loại sách</Button>
            </Link>


            <Table striped bordered hover className='cartTable'>
                <thead>
                    <tr className='text-center'>
                        <th>STT</th>
                        <th style={{ width: '70%' }}>Tên loại</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {(loaisach) && loaisach.map((loaiI, index) => {
                        return (
                            <tr key={loaiI.id}>
                                <td className="text-center" >{loaiI.id}</td>
                                <td>{loaiI.tenloai}</td>

                                <td className='text-center buttonGroup'>
                                    <Button variant="primary" className="update me-2" >
                                        <Link to={`sualoai/${loaiI.id}`} className=" nav-item text-white" >
                                            <BsPencilFill />
                                        </Link>
                                    </Button>

                                    <Button variant="danger" className="delete" onClick={() => { handleDeleteLoai(loaiI.id) }} > <BsFillTrashFill /> </Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}