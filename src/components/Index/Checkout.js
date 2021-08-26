import React from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import setDoc from '../../api/setDoc';
import getDoc from '../../api/getDoc';

class Checkout extends React.Component {
    constructor() {
        super();
        this.state = {
            total: 0,
            product: [],
            hoten: '',
            diachi: '',
            sdt: 0,
        }
    }
    componentDidMount() {
        let cart_items = JSON.parse(sessionStorage.cart_items);
        let total = 0
        if (cart_items) {
            cart_items.forEach((e) => {
                let id = e.id_product;
                let quantity = e.soluong;
                if (quantity != 0 || quantity != null) {
                    getDoc("san-pham", `${id}`).then((res) => {
                        this.setState({
                            product: [...this.state.product, { id_product: e.id_product, soluong: e.soluong }],
                            total: this.state.total + parseFloat(quantity) * parseFloat(res.price)
                        })
                    });
                }
            });
        }
    }
    //Hàm lấy giá trị khi input thay đổi trong modal thêm sản phẩm
    change_input = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    //

    //Hàm thanh toán
    Thanhtoan = (event) => {


        event.preventDefault();
        var date = new window.Date();

        let data = {
            id: date.getTime(),
            hoten: this.state.hoten,
            diachi: this.state.diachi,
            sdt: this.state.sdt,
            tongtien: this.state.total,
            sanpham: this.state.product,
            thoigian: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        }
        setDoc('don-hang', data);
        sessionStorage.removeItem('cart_items')
    }
    //
    render() {
        console.log(this.state.total);
        return (
            <>
                <Nav></Nav>
                <section>
                    <div className="container my-5">
                        <h4 className='text-center'>THANH TOÁN</h4>
                        <form onSubmit={this.Thanhtoan} className="m-auto w-50">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Họ tên người nhận hàng: </label>
                                <input onChange={(event) => this.change_input(event)} required type="text" className="form-control" name='hoten' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Địa chỉ người nhận hàng: </label>
                                <input onChange={(event) => this.change_input(event)} required type="text" className="form-control" name='diachi' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Số điện thoại người nhận hàng: </label>
                                <input onChange={(event) => this.change_input(event)} required type="number" className="form-control" name='sdt' />
                            </div>
                            <div className="mb-3">
                                <h5 className="mb-4">Phương thức thanh toán</h5>
                                <div className="d-flex align-items-center">
                                    <img
                                        className="mr-5"
                                        width="45px"
                                        src="https://www.mungbaobao.com/upload/news/2019/05/19/12/08/14/icon-thanh-toan-1.png?v=1"
                                        alt="COD"
                                    />
                                    <span> Thanh toán khi nhận hàng</span>
                                </div>
                            </div>
                            <button type="submit" className="m-auto btn btn-success">Thanh toán</button>
                        </form>
                    </div>


                </section>
                <Footer></Footer>
            </>
        )
    }
}

export default Checkout