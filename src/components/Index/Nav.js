import React from "react";
import Menu_dropdown from "./Menu_dropdown";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super();
    this.state = {
      _cartCount: 0,
    };
  }
  componentDidMount() {
    if (!sessionStorage.cart_items) {
    } else {
      let cart_items = JSON.parse(sessionStorage.cart_items);
      this.setState({
        _cartCount: cart_items.length,
      });
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/">
            <img className="w-50" src="../images/logo.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className=" collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Trang Chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/baocao">
                  Báo cáo
                </Link>
              </li>
              <li className="nav-item dropdown" id="button_dropdown">
                <Link className="nav-link dropdown-toggle" to="/tat-ca-san-pham">
                  Sản phẩm
                </Link>
                <div className="menu_dropdown" id="menu_dropdown">
                  <Menu_dropdown />
                </div>
              </li>

            </ul>
            <form className="d-flex">
              <a href="/dang-nhap" className="btn btn-success mx-2" type="button">
                Đăng nhập
              </a>
              <Link
                to="/gio-hang"
                className="btn btn-outline-success"
                type="button"
              >
                <i className="bi-cart-fill me-1" />
                Giỏ hàng
                <span
                  id="cart_count"
                  className="badge bg-success text-white ms-1 rounded-pill"
                >
                  {this.state._cartCount}
                </span>
              </Link>
            </form>
          </div>
        </div>
      </nav>

    );
  }
}
export default Nav;
