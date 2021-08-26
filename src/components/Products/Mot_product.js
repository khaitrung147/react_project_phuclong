import React from "react";
import { Link } from "react-router-dom";

class Mot_product extends React.Component {
  constructor(props) {
    super();
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
    const url = `/san-pham/${this.props.product.id}`;
    return (
      <div className="col mb-5">
        <div className="card h-100 box_shadow">
          <img
            className="card-img-top"
            src={this.props.product.image_url}
            alt="..."
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{this.props.product.name}</h5>
              <h6 className="text-success">
                {this.formatCash(this.props.product.price)} vnđ
              </h6>
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-success mt-auto" href={url}>
                Xem chi tiết
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mot_product;
