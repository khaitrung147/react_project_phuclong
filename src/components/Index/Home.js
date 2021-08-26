import React from "react";
import ReactDOM from 'react-dom'
import Nav from "./Nav";
import Footer from "./Footer";

class Home extends React.Component {
    render() {
        ReactDOM.render("Trang chủ", document.getElementById("title_page"));
        return (
            <>
                <Nav></Nav>
                <header className="">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="../images/banner1.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="../images/banner2.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </header>
                <section className="py-5">
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row featurette">
                            <div className="col-md-7 mt-3">
                                <h2 className="featurette-heading">TỪ NHỮNG MẦM TRÀ, <span className="text-muted">CHÚNG TÔI TẠO RA NIỀM ĐAM MÊ.</span></h2>
                                <p className="lead">Trải qua hơn 50 năm chắt chiu tinh hoa từ những búp trà xanh và hạt cà phê thượng hạng cùng mong muốn mang lại cho khách hàng những trải nghiệm giá trị nhất khi thưởng thức, Phúc Long liên tục là thương hiệu tiên phong với nhiều ý tưởng sáng tạo đi đầu trong ngành trà và cà phê.

                                    Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm hảo hạng khi được tạo ra từ sự phấn đấu không ngừng cùng niềm đam mê. Và chính kết nối dựa trên niềm tin, sự trung thực và tin yêu sẽ góp phần mang đến những nét đẹp trong văn hóa thưởng trà và cà phê ngày càng bay cao, vươn xa.</p>
                            </div>
                            <div className="col-md-5">
                                <img src="./images/home1.jpg" width="100%" height="100%" alt="" />
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div className="row featurette mt-3">
                            <div className="col-md-7 order-md-2 mt-5">
                                <h2 className="featurette-heading">ĐỘI NGŨ NHÂN VIÊN TRÀN ĐẦY NHIỆT HUYẾT</h2>
                                <p className="lead">Trong suốt quá trình hoạt động và phát triển, đội ngũ quản lý và nhân viên của Phúc Long Coffee & Tea, qua bao thế hệ, đã cùng nhau xây dựng, nuôi dưỡng niềm đam mê dành cho trà và cà phê với mong muốn được thử thách bản thân trong ngành dịch vụ năng động và sáng tạo.</p>
                            </div>
                            <div className="col-md-5 order-md-1">
                                <img src="../images/home2.jpg" width="100%" height="100%" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </>
        );
    };
}




export default Home;