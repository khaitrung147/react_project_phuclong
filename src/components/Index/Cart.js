import React from "react";
import MotItem from "../Carts/MotItem";
import getDoc from "../../api/getDoc";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  constructor(props) {
    super();
    this.state = {
      _total: 0,
      _countItem: 0,
      _listItem: [],
      _checkOut: false,
      _formatCash: (str) => {
        return str
          .toString()
          .split("")
          .reverse()
          .reduce((prev, next, index) => {
            return (index % 3 ? next : next + ",") + prev;
          });
      },
    };
  }
  change_total() {
    this.setState({
      _total: 0,
    });
    let cart_items = JSON.parse(sessionStorage.cart_items);
    cart_items.forEach((e) => {
      let id = e.id_product;
      let quantity = e.soluong;
      if (quantity == null) {
        this.setState((prevState, props) => {
          return {
            _total: 0,
          };
        });
      } else {
        getDoc("san-pham", `${id}`).then((res) => {
          this.setState((prevState, props) => {
            return {
              _total:
                this.state._total +
                parseFloat(quantity) * parseFloat(res.price),
            };
          });
        });
      }
    });
  }
  componentDidMount() {
    if (!sessionStorage.cart_items) {
      this.setState({
        _total: 0,
        _countItem: 0,
        _checkOut: false,
        _listItem: [
          <div className="alert alert-warning" role="alert">
            Bạn chưa thêm sản phẩm nào vào giỏ hàng !
          </div>,
        ],
      });
      ReactDOM.render(0, document.getElementById("cart_count"));
    } else {
      this.setState({
        _listItem: [],
        _total: 0,
        _countItem: 0,
      });
      let cart_items = JSON.parse(sessionStorage.cart_items);
      let countItem = 0;
      let total = 0;
      cart_items.forEach((e) => {
        let id = e.id_product;
        let quantity = e.soluong;
        countItem++;
        getDoc("san-pham", `${id}`).then((res) => {
          total += parseFloat(quantity) * parseFloat(res.price);
          this.setState({
            _total: total,
            _countItem: countItem,
            _checkOut: true,
            _listItem: [
              ...this.state._listItem,
              <MotItem
                Delete={() => this.componentDidMount()}
                change={() => this.change_total()}
                sl={quantity}
                product={res}
              />,
            ],
          });
        });
      });
      ReactDOM.render(countItem, document.getElementById("cart_count"));
    }
  }
  render() {
    const { _listItem, _checkOut, _countItem, _total, _formatCash } =
      this.state;
    return (
      <>
        <Nav></Nav>
        <section>
          <div className="container">
            <div className="row my-5">
              <div className={_checkOut == false ? "col-lg-12" : "col-lg-8"}>
                <div className="wish-list mb-3">
                  <div className="card-body">
                    <h5 className="mb-4">
                      Giỏ hàng (<span>{_countItem}</span>)
                    </h5>
                    {_listItem}
                  </div>
                </div>
              </div>
              <div className={_checkOut == false ? "d-none" : "col-lg-4"}>
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="mb-3">Tổng tiền</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Thành tiền:
                        <span>{_formatCash(_total)} vnđ</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Phí giao hàng:
                        <span>Miễn phí</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Tổng tiền phải thanh toán:</strong>
                        </div>
                        <span>
                          <strong>{_formatCash(_total)} vnđ</strong>
                        </span>
                      </li>
                    </ul>
                    <Link to="/thanh-toan"
                      type="button"
                      className={this.state._total != 0 ? "btn btn-success btn-block waves-effect waves-light" : "d-none"}
                    >
                      Thanh toán
                    </Link>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
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
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </>
    );
  }
}

export default Cart;
