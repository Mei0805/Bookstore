import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionLoadBookTypes } from '../../../../redux/actions/actionLoaiSach';
import { actionAddBookType } from '../../../../redux/actions/actionLoaiSach';

export const ThemLoai = () => {
    let dispatch = useDispatch();

    const { loaisach } = useSelector(state => state.loaisach)

    useEffect(() => {
        dispatch(actionLoadBookTypes())
    }, [])

    

    const [err, setError] = useState("");
    const [typestate, setTypeState] = useState({
        tenloai: '', 
        thutu: 0,
        anhien: 1,
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
        alert('Đã thêm!')
        dispatch(actionAddBookType(typestate))
        setError("")
        console.log(typestate)
        console.log(err);
    }

    return (
        <>
            <h1>Thêm loại</h1>
            <Form style={{ width: '80%' }}>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Label>Tên loại</Form.Label>
                        <Form.Control
                            name="tenloai"
                            value={tenloai}
                            type="text"
                            defaultValue={'Tên loại nè'}
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
        </>
    )
}