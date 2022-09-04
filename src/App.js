import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import NavBar from './component/layout/NavBar';

import Main from './component/Pages/Main'
import Products from './component/Pages/Products';
import {Login} from './component/Pages/Login';
import Cart from './component/Pages/Cart';
import { SignUp } from './component/Pages/SignUp';
import { Admin } from './component/Pages/Admin';
import { SingleProduct } from './component/Pages/SingleProduct';

import { SachAdmin } from './component/Pages/Admin/Sach/Sach';
import { LoaiSachAdmin } from './component/Pages/Admin/LoaiSach/LoaiSach';
import { GioHangAdmin } from './component/Pages/Admin/GioHang/GioHang';
import { ThemSach } from './component/Pages/Admin/Sach/ThemSach';
import { SuaSach } from './component/Pages/Admin/Sach/SuaSach';
import { ThemLoai } from './component/Pages/Admin/LoaiSach/ThemLoai';
import { SuaLoai } from './component/Pages/Admin/LoaiSach/SuaLoai';


function App() {
  return (
    <div className="containerBook">
      <header id='Header'>
        <NavBar />

      </header>

      <main style={{}}>
        <Row className="section1 justify-content-center" style={{ minHeight: '80vh', maxWidth: '100%', margin: 0 }}>
          <Routes>
            <Route path='/'exact element={<Main />} />
            <Route path='/products'exact element={<Products />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/admin' element={<Admin />} >
                    <Route index element={<SachAdmin />} />
                    <Route path='sach' element={<SachAdmin />} />
                    <Route path='themsach' element={<ThemSach />} />
                    <Route path='sach/themsach' element={<ThemSach />} />
                    <Route path='sach/suasach/:id' element={<SuaSach />} />
                    <Route path='loaisach' element={<LoaiSachAdmin />} />
                    <Route path='loaisach/themloai' element={<ThemLoai />} />
                    <Route path='loaisach/sualoai/:id' element={<SuaLoai />} />
                    <Route path='giohang' element={<GioHangAdmin />} />
            </Route>
            <Route path='/product/:id' element={<SingleProduct />} />
          </Routes>
        </Row>

        {/* <aside>
          <div id='cart'>
            <div className='title'>Giỏ hàng</div>
          </div>
          <div id='search'>
            <div className='title'>Tìm sách</div>
          </div>
        </aside> */}
      </main>



      <Row className="footer mt-1 bg-dark text-white p-2" style={{ minHeight: '10vh', maxWidth: '100%', margin: 0 }}>
        <div id="footer1" sm={12} className="bg-dark"> by @PS15288 </div>
      </Row>
    </div>
  );
}
export default App;