import { Component } from "react"
import { NumberFormat } from "./CurrencyFormat";

class ShowOneBook extends Component {
    constructor(props) {
        super();
        this.state = { like: false, addCart: false }
        console.log("Constructor work!!")
    };
    componentDidMount() { 
        console.log("CDidmount work!")
    }
    componentDidUpdate(){
        this.cartList = this.props.listCart;
    }

    handleClick = () => {
        this.setState((prevState) => ({ like: !prevState.like }));
        console.log("Liked ")
    }
    addtoCart = () => {
        this.setState((prevState) => ({ addCart: !prevState.addCart }));
        if(this.cartList==null){
            const sachI = {
                id: this.props.book.id,
                tensach: this.props.book.tensach,
                gia: this.props.book.gia,
                urlHinh: this.props.book.urlHinh,
                soluong: 1
            }
            console.log('in when cart null')
            this.props.AddCart(sachI);
            
        }else{
            let item = this.cartList.find(cartI =>  cartI.id === this.props.book.id )
            if(item){
                item.soluong++;
                console.log('in when cart existed')
            }else{
                const sachI = {
                    id: this.props.book.id,
                    tensach: this.props.book.tensach,
                    gia: this.props.book.gia,
                    urlHinh: this.props.book.urlHinh,
                    soluong: 1
                }
                this.props.AddCart(sachI);
            }
        }    
    }
    render() {
        return (
            <div className={this.state.like ? 'bookItem like' : 'bookItem'}>
                <h3>{this.props.book.tensach}</h3>
                <img src={this.props.book.urlHinh} />
                <p className="price"> {this.props.book.gia} <NumberFormat val={this.props.book.gia} /></p>
                <div className="button">
                    <button className="likeBtn" onClick={this.handleClick}>Thích</button>
                    <button onClick={this.addtoCart} className={this.state.addCart ? 'muaBtn added' : 'muaBtn'}>Chọn mua</button>
                </div>
            </div>
        )
    }

}
export default (ShowOneBook);