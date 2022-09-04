import { Col, Row } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import { BsPencilFill, BsEyeFill, BsPlus } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { NumberFormat } from "../../../CurrencyFormat";

import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionLoadBooks } from "../../../../redux/actions/actionSach";
import { actionLoadBookTypes } from "../../../../redux/actions/actionLoaiSach";
import { actionXoaSach } from "../../../../redux/actions/actionSach";

export const SachAdmin = () => {
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

    const handleDeleteSach = (id) => {
        if (window.confirm("Xóa nha?")) {
            dispatch(actionXoaSach(id))
        }
    }

    return (
        <>
            <Link to="themsach" className=" nav-item p-3 text-decoration-none" >
                <Button style={{ marginBottom: '10px' }} variant="outline-secondary"><BsPlus />  Thêm sách</Button>
            </Link>

            <ListGroup key={'sm'} horizontal={'sm'} className=" my-2" >
                <ListGroup.Item variant="danger" action key={0} value={0} onClick={handleChangeSachbyLoai}>
                    Tất cả
                </ListGroup.Item>
                {loaisach.map((loaiI) => {
                    return <ListGroup.Item variant="success" action key={loaiI.id} value={loaiI.id} onClick={handleChangeSachbyLoai}>
                        {loaiI.tenloai}
                    </ListGroup.Item>
                })}
            </ListGroup>
            <Table striped bordered hover className='cartTable'>
                <thead>
                    <tr className='text-center'>
                        <th>Hình ảnh</th>
                        <th style={{ width: '30%' }}>Tên sản phẩm</th>
                        <th>Giá tiền</th>
                        <th>Lượt xem</th>
                        <th>Nổi bật</th>
                        <th>Mới</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {(listSachbyLoai) ? listSachbyLoai.map((sachI, index) => {
                        return (
                            <tr key={sachI.id}>
                                <td className="text-center" ><img style={{ width: '50px', height: '80px', objectFit: 'cover' }} src={sachI.urlHinh} height='100' alt="imgSach" /></td>
                                <td className="align-middle">{sachI.tensach}</td>
                                <td className="text-center align-middle">{NumberFormat(Number(sachI.gia))}</td>
                                <td className="text-center align-middle"><BsEyeFill />{sachI.xem}</td>
                                <td className="text-center align-middle">{Number(sachI.hot) == 1 ? <span className="text-danger">Có</span> : '-'}</td>
                                <td className="text-center align-middle">{Number(sachI.moi) == 1 ? <span className="text-success">New</span> : '-'}</td>
                                <td className='buttonGroup text-center align-middle'>
                                    <Button variant="primary" className="update me-2" >
                                        <Link to={`suasach/${sachI.id}`} className=" nav-item text-white" >
                                            <BsPencilFill />
                                        </Link>
                                    </Button>
                                    <Button variant="danger" className="delete" onClick={() => { handleDeleteSach(sachI.id) }}> <BsFillTrashFill /> </Button>
                                </td>
                            </tr>
                        )
                    }) :
                        sach.map((sachI, index) => {
                            return (
                                <tr key={sachI.id}>
                                    <td className="text-center align-middle" ><img style={{ width: '50px', height: '80px', objectFit: 'cover' }} src={sachI.urlHinh} height='100' alt="imgSach" /></td>
                                    <td className="align-middle">{sachI.tensach}</td>
                                    <td className="text-center align-middle">{NumberFormat(Number(sachI.gia))}</td>
                                    <td className="text-center align-middle"><BsEyeFill />{sachI.xem}</td>
                                    <td className="text-center align-middle">{Number(sachI.hot) == 1 ? <span className="text-danger">Có</span> : '-'}</td>
                                    <td className="text-center align-middle">{Number(sachI.moi) == 1 ? <span className="text-success">New</span> : '-'}</td>
                                    <td className='buttonGroup text-center align-middle' >
                                        <Button variant="primary" className="update me-2" >
                                            <Link to={`suasach/${sachI.id}`} className=" nav-item text-white" >
                                                <BsPencilFill />
                                            </Link>
                                        </Button>
                                        <Button variant="danger" className="delete" onClick={() => { handleDeleteSach(sachI.id) }}> <BsFillTrashFill /> </Button>
                                    </td>
                                </tr>
                            )
                        })

                    }
                </tbody>
            </Table>
        </>
    )
}