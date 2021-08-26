import React, { useState, useRef } from 'react';
import getDoc from '../../api/getDoc';
import ReactDOM from 'react-dom';
import Nav from '../Index/Nav';
import Footer from '../Index/Footer';
import getCollection from '../../api/getCollection';
import Mot_product from './Mot_product';


class Detail_product extends React.Component {
    constructor(props) {
        super();
        this.state = {
            _product: {},
            _product_similar: [],
            _quantity: 1,
            _formatCash: () => { },
            _addToCart: () => { }
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ _quantity: event.target.value });
    }
    componentDidMount() {
        getDoc('san-pham', `${this.props.match.params.id}`).then(res => {
            this.setState({
                _product: res,
                _formatCash: (str) => {
                    return str.toString().split('').reverse().reduce((prev, next, index) => {
                        return ((index % 3) ? next : (next + ',')) + prev
                    })
                }
            })
            window.scrollTo(0, 0);
        });

        getCollection('san-pham').then(res => {
            let i = 0;
            res.forEach((e) => {
                if (e.id_catagory == this.state._product.id_catagory && e.id != this.state._product.id && i < 4) {
                    this.setState({
                        _product_similar: [...this.state._product_similar, <Mot_product product={e} />]
                    })
                    i++;
                }
            })
        })
    }
    addToCart = () => {
        let id = this.state._product.id;
        let quantity = this.state._quantity;
        let items = []
        if (!sessionStorage.cart_items) {
            let i = { id_product: id, soluong: parseFloat(quantity) };
            items.push(i);
            window.sessionStorage.cart_items = JSON.stringify(items);
        } else {
            items = JSON.parse(sessionStorage.cart_items);
            let add = true;
            items.forEach(element => {
                if (element.id_product == id) {
                    element.soluong += parseFloat(quantity);
                    add = false;
                }
            });
            if (add == true) {
                let i = { id_product: id, soluong: parseFloat(quantity) };
                items.push(i);
                window.sessionStorage.cart_items = JSON.stringify(items);
            }
            else {
                window.sessionStorage.cart_items = JSON.stringify(items);
            }
        }
        ReactDOM.render(items.length, document.getElementById('cart_count'))
    }
    render() {

        ReactDOM.render("Chi tiết sản phẩm", document.getElementById("title_page"));
        const { _product, _formatCash, _quantity, _product_similar } = this.state;
        return (
            <>
                <Nav></Nav>
                <section className="py-5">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="row gx-4 gx-lg-5 align-items-center">
                            <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={_product.image_url} alt="..." /></div>
                            <div className="col-md-6">
                                <h1 className="display-5 fw-bolder">{_product.name}</h1>
                                <div className="fs-5 mb-5">
                                    <h3 className="text-success">{_formatCash(_product.price)} vnđ</h3>
                                </div>
                                <p className="lead"><strong>Quy cách: </strong>{_product.specifications}</p>
                                <p className="lead"><strong>Mô tả: </strong>{_product.description}</p>
                                <div className="d-flex">
                                    <input onChange={this.handleChange} value={_quantity} className="form-control text-center me-3" id="inputQuantity" type="num" style={{ maxWidth: '3rem' }} />
                                    <button onClick={this.addToCart} className="btn btn-outline-success flex-shrink-0" type="button">
                                        <i className="bi-cart-fill me-1" />
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Related items section*/}
                <section className="py-5 bg-light">
                    <div className="container px-4 px-lg-5 mt-5">
                        <h2 className="fw-bolder mb-4">Sản phẩm tương tự</h2>
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {_product_similar}
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </>

        )
    }
}

export default Detail_product