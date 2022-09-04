import { Component } from "react";
import { ShowOneBook } from "./ShowSach";
import { NumberFormat } from "./CurrencyFormat";

export const SideBarItem = (props) => {
    return (
        <div className="sachI">
            <img src={props.book.img} />
            <div className="content">
                <h3>{props.book.name}</h3>
                <p className="price">Giá: <NumberFormat val={props.book.price}/> </p>  
                <small>{props.book.desc} </small>
            </div>
        </div>
    )
}

export class SideBar extends Component {
    constructor(props) {
        super();
        this.state = { caption: 'Sách đã chọn' };
        this.arrSach = [
            {
              id: 1,
              name: 'Nhà Giả Kim (Tái Bản 2020)',
              price: 56000,
              desc: 'Tất cả những trải nghiệm trong chuyến phiêu du the...',
              img: './img/nha-gia-kim.jpg',
            },
            {
              id: 2,
              name: 'Những Giấc Mơ Ở Hiệu Sách Morisaki',
              price: 45000,
              desc: 'Bị người yêu lừa dối, Takako bỏ việc và rơi vào ch...',
              img: './img/giac-mo-o-hieu-sach-morisaki.jpg',
            },
            {
              id: 3,
              name: 'Thư Viện Nửa Đêm',
              price: 109400,
              desc: 'Cuộc đời Nora Seed tràn ngập khổ sở và nuối tiếc. ...',
              img: './img/thu-vien-nua-dem.jpg',
            },
            {
              id: 4,
              name: 'Think And Grow Rich - 13 Nguyên Tắc Nghĩ Giàu, Làm Giàu',
              price: 76000,
              desc: 'Cuốn sách sẽ giúp bạn trở nên giàu có, làm giàu ch...',
              img: './img/think-grow-rich.jpg',
            },
            {
              id: 5,
              name: 'Think And Grow Rich - 13 Nguyên Tắc Nghĩ Giàu, Làm Giàu',
              price: 76000,
              desc: 'Cuốn sách sẽ giúp bạn trở nên giàu có, làm giàu ch...',
              img: './img/think-grow-rich.jpg',
            },
            {
              id: 6,
              name: 'Nhà Giả Kim (Tái Bản 2020)',
              price: 56000,
              desc: 'Tất cả những trải nghiệm trong chuyến phiêu du the...',
              img: './img/nha-gia-kim.jpg',
            },
            {
              id: 7,
              name: 'Những Giấc Mơ Ở Hiệu Sách Morisaki',
              price: 45000,
              desc: 'Bị người yêu lừa dối, Takako bỏ việc và rơi vào ch...',
              img: './img/giac-mo-o-hieu-sach-morisaki.jpg',
            },
            {
              id: 8,
              name: 'Thư Viện Nửa Đêm',
              price: 109400,
              desc: 'Cuộc đời Nora Seed tràn ngập khổ sở và nuối tiếc. ...',
              img: './img/thu-vien-nua-dem.jpg',
            }
          
          
          ];
    }

    render() {

        return (
            <div className='showList'>
              <h3>Danh mục</h3>
                {/* <h3 className="tittle">{this.state.caption}</h3>
                {this.arrSach.map((cartI, index) => {
                    return <SideBarItem book={cartI} removeI={index} />
                })} */}
            </div>
        )
    }
}