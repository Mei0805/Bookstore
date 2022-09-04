import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { actionLoadBookTypes } from "../../../../redux/actions/actionLoaiSach";
import { actionLayMotLoai, actionUpdateBookType } from "../../../../redux/actions/actionLoaiSach";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

export const SuaLoai = () => {
    const { motloai } = useSelector((state) => state.loaisach)
    const { loaisach } = useSelector(state => state.loaisach)
    const { id } = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionLayMotLoai())
    }, [])

    useEffect(() => {
        if (id && id !== "") dispatch(actionLayMotLoai(id))
    }, [id]);

    const [err, setError] = useState("");
    const [typestate, setTypeState] = useState({
        tenloai: motloai.tenloai,
        thutu: motloai.thutu,
        anhien: motloai.anhien,
    })
    const { tenloai, thutu, anhien } = typestate;
    const handleInputChange = (e) => {
        setTypeState(
            {
                ...typestate,
                [e.target.name]: e.target.value,

            })
        console.log(typestate)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Đã sửa!')
        dispatch(actionUpdateBookType(typestate, id))
        setError("")
        console.log(typestate)
        console.log(err);
    }

    console.log(motloai);
    return (
        <>
            <h1>Sửa loại</h1>
            <Row>
                <Col lg={8}>
                    <Form style={{ width: '80%' }}>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Tên loại</Form.Label>
                                <Form.Control
                                    name="tenloai"
                                    value={tenloai}
                                    type="text"
                                    placeholder="Nhập tên loại"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Thứ tự</Form.Label>
                                <Form.Control
                                    name="thutu"
                                    value={thutu}
                                    type='number'
                                    placeholder='Nhập thứ tự ...'
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Hiển thị</Form.Label>
                                <Form.Select defaultValue="0">
                                    <option value={1}>Có</option>
                                    <option value={2}>Không</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <div className='btn-group'>
                            <Button variant="warning" type="reset">
                                Đặt lại
                            </Button>
                            <Button variant="danger" type="submit" onClick={handleSubmit}>
                                Thêm loại
                            </Button>
                        </div>
                    </Form>
                </Col>


            </Row>

        </>
    )
}