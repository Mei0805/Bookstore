import { useState, useEffect } from 'react';
import ListSach from '../ListSach';

import { Col, Row } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';

import { useDispatch, useSelector } from 'react-redux';
import { actionLoadBooks } from '../../redux/actions/actionSach';
import { actionLoadBookTypes } from '../../redux/actions/actionLoaiSach';

const Main = () => {
    const [listSachbyLoai, setlistSachbyLoai] = useState();
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
            <Col md={12} id='banner' className="" ></Col>

            <Col md={10} id='muc1' className="p-4" >
                <h5 className='text-center'><u>Sản phẩm tại Shop</u></h5>
                <Nav variant="pills" className="d-flex justify-content-center">

                    <ListGroup horizontal={'xl'} className="typeTitle my-2">
                        <ListGroup.Item action key={0} value={0} onClick={handleChangeSachbyLoai}>
                            Tất cả
                        </ListGroup.Item>
                        {loaisach && loaisach.map((loaiI) => (
                            <ListGroup.Item action key={loaiI.id} value={loaiI.id} onClick={handleChangeSachbyLoai}>
                                {loaiI.tenloai}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                </Nav>

                {
                    (listSachbyLoai) ? 
                    <ListSach className='bookList' ds={listSachbyLoai} /> :
                    (sach)?
                    <ListSach className='bookList' ds={sach} /> : 'load'
                }
            </Col>
        </>
    )
}
export default Main
