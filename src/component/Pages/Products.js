import { Col, Row } from "react-bootstrap";
import ListSach from '../ListSach';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ListGroup from 'react-bootstrap/ListGroup';
import { Pagination } from "react-bootstrap";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionLoadBooks } from '../../redux/actions/actionSach';
import { actionLoadBookTypes } from '../../redux/actions/actionLoaiSach';


const Products = (props) => {
    const [listSachbyLoai, setlistSachbyLoai] = useState()

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(6)

    let dispatch = useDispatch();
    const { sach } = useSelector(state => state.sach)
    const { loaisach } = useSelector(state => state.loaisach)

    useEffect(() => {
        dispatch(actionLoadBooks())
    }, [])
    useEffect(() => {
        dispatch(actionLoadBookTypes())
    }, [])



    console.log('listsach', listSachbyLoai)

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
                        <Breadcrumb.Item active>Sản phẩm</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Col md={2} id='muc2' className="bg-dark text-light p-2 sidebar mt-4 " style={{ minHeight: '100vh' }} >
                <div className='showList'>
                    <h3 style={{ marginBottom: '20px' }}>Danh mục</h3>
                    <ListGroup key={'md'} className=" my-2">
                        <ListGroup.Item action key={0} value={0} onClick={handleChangeSachbyLoai}>
                            Tất cả
                        </ListGroup.Item>
                        {loaisach.map((loaiI) => {
                            return <ListGroup.Item action key={loaiI.id} value={loaiI.id} onClick={handleChangeSachbyLoai}>
                                {loaiI.tenloai}
                            </ListGroup.Item>
                        })}
                    </ListGroup>

                </div>
            </Col>
            <Col md={8} id='muc1' className="p-4" >
                {
                    (listSachbyLoai) ?
                        <ListSach className='bookList' ds={listSachbyLoai} /> :
                    (sach)? <ListSach className='bookList' ds={sach} />:'load'
                }

            </Col>
        </>
    )
}
export default Products