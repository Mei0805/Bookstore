import { Col, Row } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';


export const Login = () => {
  return (
    <>
      <Row id='breadcrumb' className='justify-content-center p-0 mt-3 '>
        <Col md={10}>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item active>Đăng nhập</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      
        <Col md={3} id='' className="p-2" style={{ minHeight: '80vh' }} >
          <form>
            <div className="col-lg-12">
              <div className="register-btn">
                <h2 className='text-center'>Đăng Nhập</h2>
                <div className="group-input mb-2">
                  <label for="exampleInputEmail1">Username</label>
                  <input className="form-control" type="text" id="name" placeholder='Nhập Username...'/>
                </div>
                <div className="group-input mb-2">
                  <label for="">Mật khẩu </label>
                  <input className="form-control" type="password" id="password" placeholder='Nhập Mật khẩu ...' />
                </div>

                <div className='group-input text-center m-4'><button className='btn btn-primary'>Đăng nhập</button></div>
              </div>
            </div>
          </form>


        </Col>

    </>

  )
}