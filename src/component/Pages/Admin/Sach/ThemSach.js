import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionLoadBookTypes } from '../../../../redux/actions/actionLoaiSach';
import { actionAddBook } from '../../../../redux/actions/actionSach';

export const ThemSach = () => {
    let dispatch = useDispatch();

    const { loaisach } = useSelector(state => state.loaisach)

    useEffect(() => {
        dispatch(actionLoadBookTypes())
    }, [])

    const [err, setError] = useState("");
    const [bookstate, setBookState] = useState({
        tensach: 'sasds',
        urlHinh:'/imageSach/de-co-mot-tuong-lai.png',
        gia: 200000,
        idLoai: 4,
        xem: '344',
        hot: '1',
        moi: '1',
        mota: '',
    })
    const { tensach, urlHinh, gia, idLoai, xem, hot, moi, mota } = bookstate;
    const handleInputChange = (e) => {
        setBookState(
            {
                ...bookstate,
                [e.target.name]: e.target.value,

            })
        console.log(bookstate)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!tensach || !gia || !xem) {
            setError("YC Nhập đủ field")
            console.log(bookstate)
            console.log(err);
        }
        else {
            alert('Đã thêm!')
            dispatch(actionAddBook(bookstate))
            setError("")
            console.log(bookstate)
            console.log(err);
        }
    }
    return (
        <>
            <h1>Thêm sách</h1>
            <Form style={{ width: '80%' }}>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Label>Tên sách</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="tensach"
                        defaultValue={'Sách tên nè'} 
                        value={tensach}
                        placeholder="Nhập tên sách" 
                        onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Loại Sách</Form.Label>
                        <Form.Select defaultValue="0">
                            <option value={0}>Chọn loại sách</option>
                            {loaisach.map((loaiI) => (
                                <option value={loaiI.id}>{loaiI.tenloai}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                </Row>
                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Giá tiền</Form.Label>
                        <Form.Control
                        name="gia"
                        type='number' 
                        placeholder='Nhập giá tiền ...' 
                        value={gia}
                        onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Lượt xem</Form.Label>
                        <Form.Control 
                        name="xem"
                        type='number'
                        placeholder='Nhập lượt xem ...' 
                        value={xem}
                        onChange={handleInputChange}
                         />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Mới</Form.Label>
                        <Form.Select defaultValue="0">
                            <option value={1}>Mới</option>
                            <option value={2}>Không</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Nổi bật</Form.Label>
                        <Form.Select defaultValue="0">
                            <option value={1}>Nổi bật</option>
                            <option value={2}>Không</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Form.Group style={{marginBottom:'15px'}}  >
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control 
                        as="textarea" rows={3}
                        name="mota"
                        value={mota}
                        placeholder="Mô tả ..." 
                        onChange={handleInputChange}
                        />
                    </Form.Group>

                <div className='btn-group'>
                    <Button variant="warning" type="reset">
                        Đặt lại
                    </Button>
                    <Button 
                    variant="danger" 
                    type="submit"
                    key="add"
                    autoComplete="off"
                    onClick={handleSubmit}
                    >
                        Thêm sách
                    </Button>
                </div>
            </Form>
        </>
    )
}