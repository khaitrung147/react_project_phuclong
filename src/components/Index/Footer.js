import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <section className="footer">
                <footer className="bg-success text-white text-center text-md-start">
                    <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <p>
                           <strong>Trụ sở chính: </strong>Công ty CP Phúc Long Heritage - ĐKKD: 0316 871719
do sở KHĐT TPHCM cấp lần đầu ngày 21/05/2021
                        </p>
                        <p>
                           <strong>Nhà máy: </strong>D_8D_CN Đường XE 1, Khu Công Nghiệp Mỹ Phước III, phường Mỹ Phước, thị xã Bến Cát, tỉnh Bình Dương, Việt Nam
                        </p>
                        <p>
                           <strong>Địa chỉ: </strong>42/24 - 42/26 Đường 643 Tạ Quang Bửu, phường 4, quận 8, Hồ Chí Minh
                        </p>
                        <p>
                           <strong>Điện thoại: </strong>0929441157
                        </p>
                        <p>
                           <strong>Fax: </strong>(028) 6263 0379
                        </p>
                        <p>
                           <strong>Email: </strong>khainttps12314@fpt.edu.vn
                        </p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <ul className="list-unstyled">
                            <li>
                                <p>VN | EN</p>
                            </li>
                            <li>
                                <img style={{width: "100%"}} src="../images/dathongbao.png" />
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </footer>
            </section>

        )
    }
}

export default Footer;