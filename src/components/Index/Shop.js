import React from "react";
import List_category from "../Categories/List_category";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import Footer from "./Footer";

class Shop extends React.Component {
  render() {
    ReactDOM.render("Tất cả sản phẩm", document.getElementById("title_page"));
    return (
      <>
        <Nav></Nav>
        <main>
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div>
                  <img
                    src="../images/tra_banner.jpg"
                    classname="bd-placeholder-img"
                    width="100%"
                    height="100%"
                    aria-hidden="true"
                    preserveaspectratio="xMidYMid slice"
                    focusable="false"
                  />
                  <rect width="100%" height="100%" fill="#777"></rect>
                </div>
                <div className="container">
                  <div className="carousel-caption text-white text-start">
                    <h1 className="text-white">LÁ TRÀ PHÚC LONG.</h1>
                    <p className="fs-5">
                      Cầm trên tay tách trà ngát hương, nhâm nhi trọn vị trà
                      truyền thống như là một cách thể hiện tâm tình đối với
                      cuộc sống.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div>
                  <img
                    src="../images/caphe_banner.jpg"
                    classname="bd-placeholder-img"
                    width="100%"
                    height="100%"
                    aria-hidden="true"
                    preserveaspectratio="xMidYMid slice"
                    focusable="false"
                  />
                  <rect width="100%" height="100%" fill="#777"></rect>
                </div>
                <div className="container">
                  <div className="carousel-caption">
                    <h1 className="text-white">HẠT CÀ PHÊ PHÚC LONG</h1>
                    <p className="fs-5">
                      Tách cà phê hoàn hảo được định nghĩa là tách cà phê có vị
                      đắng đậm đà, chua thanh thoát, lan toả hương thơm nồng
                      nàn, dễ dàng chinh phục vị giác của bất cứ ai.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <section className="py-5">
            <List_category />
            {/* <div className="container px-4 px-lg-5 mt-5">
                <div className="row featurette">
                    <div className="col-md-7 mt-3">
                        <h2 className="featurette-heading">TRÀ TÚI LỌC</h2>
                        <p className="lead">Trà túi lọc tiện dụng được sản xuất theo công thức độc đáo, đảm bảo tận dụng hết tính năng của trà; cả về hương lẫn vị. Không phải tốn nhiều thời gian pha chế, chỉ sau vài phút là có ngay tách trà nóng thơm ngon với nhiều mùi hương đa dạng. Trà túi lọc mở ra phong cách thưởng thức trà hiện đại trong cuộc sống không ngừng phát triển và vươn cao.</p>
                        <p><a href="" className="btn btn-success">Xem chi tiết</a></p>
                    </div>
                    <div className="col-md-5 bg_tea">
                        <img src="./images/tratuiloc_avatar.png" class="rounded-circle" width="100%" alt="" />
                    </div>
                </div>
                <hr className="my-5" />
                <div className="row featurette">
                    <div className="col-md-7 order-md-2 mt-3">
                        <h2 className="featurette-heading">TRÀ TÚI TAM GIÁC</h2>
                        <p className="lead">Trà túi lọc tam giác (hay còn gọi là Trà túi lọc kim tự tháp) được xem là một bước tiến mới của dòng trà túi lọc khi được sản xuất và đóng gói theo công nghệ tiên tiến bậc nhất, tăng sự thẩm thấu của trà ra bên ngoài và gia tăng hương vị đậm đà, mang lại trải nghiệm trọn vẹn khi thưởng thức.</p>
                        <p><a href="" className="btn btn-success">Xem chi tiết</a></p>
                    </div>
                    <div className="col-md-5 order-md-1 bg_tea">
                        <img src="./images/tratuitamgiac_avatar.png" class="rounded-circle" width="100%" alt="" />
                    </div>
                </div>
          </div> */}
          </section>
        </main>
        <Footer></Footer>
      </>
    );
  }
}

export default Shop;
