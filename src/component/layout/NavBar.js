import { Link } from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.scss'

const NavBar = () => {
  const weekday = ["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"];
  let today = new Date(),
  date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  let day = weekday[today.getDay()];
  
  return (
    <>
      <nav className="navbar NavContainer col-10 d-flex justify-content-center ">
        <Link to="/" id="namePage" className="navbar-brand text-decoration-none"> <h3>TM BOOKSTORE</h3></Link>
        <Link to="/" className="nav-item p-3 text-decoration-none" style={{ marginLeft: '250px' }}>Trang chủ</Link>
        <Link to="/products" className=" nav-item p-3 text-decoration-none" >Sản phẩm</Link>
        <Link to="/cart" className="nav-item p-3 text-decoration-none">Giỏ hàng</Link>
        <NavDropdown title="Tài khoản" style={{ color: '#2d95e3' }} className="nav-item text-decoration-none">
          <NavDropdown.Item><Link to="/login" className="nav-item p-3 text-decoration-none">Đăng nhập</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to="/signup" className="nav-item p-3 text-decoration-none">Đăng ký</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to="/admin" className="nav-item p-3 text-decoration-none">Quản trị</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item ><Link to="/" className="nav-item p-3 text-decoration-none">Đăng xuất</Link></NavDropdown.Item>
        </NavDropdown>
        <Link to="/" className="nav-item p-3 text-decoration-none">Report</Link>

      </nav>
      <span className="dateGreet"><i>Xin chào, Hôm nay là thứ {day}, {date}</i></span>
    </>
  );
}

export default NavBar;