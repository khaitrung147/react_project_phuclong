import React from "react";
import Nav from "./components/Index/Nav";
import Footer from "./components/Index/Footer";

class Baocao extends React.Component {
  render() {
    return (
      <>
        <Nav></Nav>
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row text-center mb-5">
              <h1>Báo cáo</h1>
            </div>
            <div className="row featurette mt-3">
              <div className="col-md-7 order-md-2 mt-5">
                <h2 className="featurette-heading">THANH MENU</h2>
                <ul className="lead">
                  <li>Điều hướng đến các trang trong web</li>
                  <li>Menu dropdow hiển thị các loại sản phẩm</li>
                  <li>
                    Nhấn vào loại sản phẩm nào sẽ hiển thị sản phẩm loại đó
                  </li>
                  <li>Có nút đăng nhập vào trang admin</li>
                  <li>Có nút vào trang giỏ hàng</li>
                  <li>
                    Nút giỏ hàng có hiển thị số sản phẩm hiện có trong giỏ
                  </li>
                </ul>
              </div>
              <div className="col-md-5 order-md-1 box_shadow">
                <img
                  src="../images/nav.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
            </div>
            <hr className="my-5" />
            <div className="row featurette">
              <div className="col-md-7 mt-5">
                <h2 className="featurette-heading">TRANG CHỦ</h2>
                <ul className="lead">
                  <li>Có banner hiệu ứng tự chuyển động</li>
                  <li>Giới thiệu về cửa hàng</li>
                  <li>Dữ liệu được lấy từ firestore của FireBase</li>
                </ul>
              </div>
              <div className="col-md-5 box_shadow">
                <img
                  src="./images/Trangchu.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
            </div>
            <hr className="my-5" />
            <div className="row featurette mt-3">
              <div className="col-md-7 order-md-2 mt-5">
                <h2 className="featurette-heading">CỬA HÀNG</h2>
                <ul className="lead">
                  <li>Có banner hiệu ứng tự chuyển động</li>
                  <li>Hiển thị các loại sản phẩm</li>
                  <li>Bấm xem chi tiết sẽ xem được sản phẩm thuộc loại đó</li>
                </ul>
              </div>
              <div className="col-md-5 order-md-1 box_shadow">
                <img
                  src="../images/shop.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
            </div>
            <hr className="my-5" />
            <div className="row featurette">
              <div className="col-md-7 mt-5">
                <h2 className="featurette-heading">TRANG LOẠI SẢN PHẨM</h2>
                <ul className="lead">
                  <li>Hiển thị thông tin của loại sản phẩm</li>
                  <li>Hiển thị những sản phẩm thuộc loại sản phẩm đó</li>
                  <li>Bấm xem chi tiết sẽ xem được chi tiết sản phẩm</li>
                </ul>
              </div>
              <div className="col-md-5 box_shadow">
                <img
                  src="./images/Cate.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
            </div>

            <hr className="my-5" />
            <div className="row featurette mt-3">
              <div className="col-md-7 order-md-2 mt-5">
                <h2 className="featurette-heading">CHI TIẾT SẢN PHẨM</h2>
                <ul className="lead">
                  <li>Hiển thị hình ảnh và đầy đủ thông tin của sản phẩm</li>
                  <li>Có thể nhập số lượng và thêm vào giỏ hàng</li>
                  <li>
                    Nếu đã có sản phẩm này trong giỏ hàng thì sản phẩm trong giỏ
                    hàng sẽ tự động tăng số lượng
                  </li>
                  <li>Hiển thị các sản phẩm cùng loại</li>
                </ul>
              </div>
              <div className="col-md-5 order-md-1 box_shadow">
                <img
                  src="../images/detail.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
            </div>
            <hr className="my-5" />
            <div className="row featurette">
              <div className="col-md-7 mt-5">
                <h2 className="featurette-heading">TRANG GIỎ HÀNG</h2>
                <ul className="lead">
                  <li>Nếu giỏ hàng trống sẽ có cảnh báo giỏ hàng trống</li>
                  <li>
                    Nếu giỏ hàng có thì sẽ hiển thị thông tin cơ bản của sản
                    phẩm
                  </li>
                  <li>Có đầy đủ chức năng</li>
                  <li>Tăng số lượng tự động cập nhật số tiền</li>
                  <li>Xóa sản phẩm khỏi giỏ hàng</li>
                </ul>
              </div>
              <div className="col-md-5">
                <div className="row box_shadow">
                  <img src="./images/giohangtrong.png" width="100%" alt="" />
                </div>
                <div className="row box_shadow">
                  <img src="./images/giohang.png" width="100%" alt="" />
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div className="row featurette mt-3">
              <div className="col-md-7 order-md-2 mt-5">
                <h2 className="featurette-heading">TRANG ĐĂNG NHẬP</h2>
                <ul className="lead">
                  <li>Hiển thị form đăng nhập</li>
                  <li>Đăng nhập thành công sẽ vào được trang admin</li>
                  <li>Đăng nhập bằng chức năng xác thực của FireBase</li>
                </ul>
              </div>
              <div className="col-md-5 order-md-1 box_shadow">
                <img
                  src="../images/dangnhap.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </>
    );
  }
}

export default Baocao;
