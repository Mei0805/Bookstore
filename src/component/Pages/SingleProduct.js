import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionLayMotSach } from '../../redux/actions/actionSach';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

import { useParams } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const SingleProduct = () => {
    const { motsach } = useSelector((state) => state.sach)

    const { id } = useParams();
    const dispatch = useDispatch();
    console.log(motsach)

    useEffect(() => {
        if (id && id !== "") dispatch(actionLayMotSach(id))
    }, [id]);

    return (
        <>
            <Row style={{ padding: '2rem 5rem', minHeight: '80vh' }}>
                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={motsach.urlHinh} style={{ height: '400px', width: '300px', objectFit: 'cover' }} alt='bookIMG' width={200} />

                </Col>

                <Col>
                    {motsach.length === 0 ?
                        <>Load...</>
                        : <>
                            <h1 className='text-primary'>{motsach.tensach}</h1>
                            <h3 className="price text-danger">
                                {motsach.gia}
                            </h3>
                            <div style={{width:'80%'}} >
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Mô tả sách</Accordion.Header>
                                        <Accordion.Body>
                                            Việc triều đình nhà Nguyễn thay đổi từ khuynh hướng tổ chức ảnh hưởng Nam Á của thời kỳ đầu sang mô thức chính trị hoàn toàn Hán hóa theo kiểu nhà Thanh (từ Minh Mạng trở đi) 
                                            đã khiến cho nhiều lân bang e dè, tạo thành những nghi kỵ gây bất lợi về sau, hoàn toàn thiếu hẳn sự đồng tình với khu vực. Phải chăng đó cũng là lý do tại sao khi phải đối phó 
                                            với các đoàn quân xâm lăng của Tây phương, triều đình nhà Nguyễn không còn biết gì hơn là chạy theo khuôn mẫu của Thanh đình, bắt chước chính sách của họ một cách tuyệt vọng mà 
                                            không bao giờ ngoảnh lại liên minh với chính khu vực mà họ đã mọc mầm trước đây một thế kỷ?
                                            
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Đánh giá</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                </div>

                            <div className="button" style={{marginTop:'2rem'}}>
                                <Button variant="primary" size="lg">
                                    Chọn mua
                                </Button>
                            </div>
                        </>

                    }
                </Col>
            </Row>
        </>
    )
}