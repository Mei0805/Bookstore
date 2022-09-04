import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { Card, Button } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


export const SignUp = () => {
  return (
    <>
      <Row id='breadcrumb' className='justify-content-center p-0 mt-3 '>
        <Col md={10}>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item active>Đăng ký</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      
        <Col md={3} id='' className="p-2" style={{ minHeight: '80vh' }} >
          <form>
            <div className="col-lg-12">
              <div className="register-btn">
                <h2 className='text-center'>Đăng Ký</h2>
                <div className="group-input mb-2">
                  <label for="exampleInputEmail1">Tên Của Bạn *</label>
                  <input className="form-control" type="text" id="name" />
                </div>
                <div className="group-input mb-2">
                  <label for="exampleInputEmail1">Tên đăng nhập (username) *</label>
                  <input className="form-control" type="text" id="username" />
                </div>
                <div className="group-input mb-2">
                  <label for="exampleInputEmail1">Mật khẩu  *</label>
                  <input className="form-control" type="password" id="password" />
                </div>
                <div className="group-input mb-2">
                  <label for="exampleInputEmail1">E-Mail *</label>
                  <input className="form-control" type="email" id="mail" />
                </div>
                <div className="group-input mb-2">
                  <label for="exampleInputEmail1">Số Điện Thoai *</label>
                  <input className="form-control" type="tel" id="tell" />
                </div>

                <div className='group-input text-center m-4'><button className='btn btn-primary'>Đăng ký</button></div>
              </div>
            </div>
          </form>


        </Col>

    </>

  )
}