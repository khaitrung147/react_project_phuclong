import React from "react";
import { Link } from "react-router-dom";

class MotItem extends React.Component {
  constructor(props) {
    super();
    this.state = {
      _id: 0,
      _soluong: 1,
      _thanhtien: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.Delete_item = this.Delete_item.bind(this);
  }
  componentDidMount() {
    this.setState({
      _id: this.props.product.id,
      _soluong: this.props.sl,
      _thanhtien: this.props.product.price * this.props.sl,
    });
  }
  Delete_item(event) {
    let cart_items = JSON.parse(sessionStorage.cart_items);

    if (cart_items.length <= 1) {
      window.sessionStorage.removeItem("cart_items");
    } else {
      cart_items.forEach((e, i) => {
        if (e.id_product == this.state._id) {
          cart_items.splice(i, 1);
          window.sessionStorage.cart_items = JSON.stringify(cart_items);
        }
      });
    }
    this.props.Delete();
  }
  handleChange(event) {
    var cart_items = JSON.parse(sessionStorage.cart_items);
    cart_items.forEach((e) => {
      if (e.id_product == this.props.product.id) {
        e.soluong = parseFloat(event.target.value);
      }
    });
    sessionStorage.cart_items = JSON.stringify(cart_items);
    this.setState({
      _soluong: event.target.value,
      _thanhtien: this.props.product.price * event.target.value,
    });
    this.props.change();
  }
  formatCash = (str) => {
    return str
      .toString()
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  };
  render() {
    const { _soluong, _thanhtien } = this.state;
    return (
      <div className="row mb-4">
        <div className="col-md-5 col-lg-3 col-xl-3">
          <div className="">
            <img
              className="img-fluid w-100"
              src={this.props.product.image_url}
              alt="Sample"
            />
          </div>
        </div>
        <div className="col-md-7 col-lg-9 col-xl-9">
          <div>
            <div className="d-flex justify-content-between">
              <div>
                <h5>
                  <Link
                    className="text-dark text-decoration-none"
                    to={`/product/${this.props.product.id}`}
                  >
                    {this.props.product.name}
                  </Link>{" "}
                </h5>
                <p className="mb-3 text-muted text-uppercase small">
                  Quy cách: {this.props.product.specifications}
                </p>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <label htmlFor="inputQuantity" className="mx-2">
                    Số lượng:
                  </label>
                  <input
                    onChange={this.handleChange}
                    value={_soluong}
                    className="form-control text-center"
                    id="inputQuantity"
                    type="num"
                    defaultValue={1}
                    style={{ maxWidth: "3rem" }}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <button
                href=""
                onClick={this.Delete_item}
                type="button"
                className="btn small"
              >
                <i className="fas fa-trash-alt" /> Loại bỏ
              </button>
              <p className="mb-0">
                <span>
                  <strong>{this.formatCash(_thanhtien)} vnđ</strong>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MotItem;
