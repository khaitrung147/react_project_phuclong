import React from 'react';
import firebase from 'firebase';
import Login from '../../Login';
import { Link } from 'react-router-dom';
import getDoc from '../../api/getDoc';
class Menu extends React.Component {
    constructor(props) {
        super();
        this.state = ({
            user: {}
        })
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                var uid = user.uid;
                getDoc('tai-khoan', uid).then(res => {
                    this.setState({
                        user: res,
                    })
                })
            } else {
            }
        })
    }
    signOut() {
        firebase.auth().signOut();
        sessionStorage.removeItem('uid')
    }
    render() {
        return (
            <div className="col-2 d-flex flex-column sidebars-menu flex-shrink-0 p-3 bg-light box_shadow">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src="https://firebasestorage.googleapis.com/v0/b/myreactproject-4e4c4.appspot.com/o/Project_react_asm%2Fimages%2Flogo.png?alt=media&token=07d22893-e183-4503-a1a4-c5165a1b8323" className='w-25 mx-2' alt="" />
                    <h5 className="mx-3 mt-2">ADMIN</h5>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/admin/" className="nav-link row link-dark" aria-current="page">
                            <i className="fas col-3 fa-home" />
                            Trang chủ
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/loai-san-pham" className="nav-link row link-dark">
                            <i className="fas col-3 fa-tachometer-alt" />
                            Loại sản phẩm
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/san-pham" className="nav-link row link-dark">
                            <i className="fas col-3 fa-window-maximize" />
                            Sản phẩm
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/don-hang" className="nav-link row link-dark">
                            <i className="fas col-3 fa-window-maximize" />
                            Đơn hàng
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/tai-khoan" className="nav-link row link-dark">
                            <i className="fas col-3 fa-users" />
                            Tài khoản
                        </Link>
                    </li>
                </ul>
                <hr />
                <Link to="/" className="nav-link row link-dark">
                    <i className="fas col-3 fa-pager" />

                    Về lại trang web
                </Link>
                <div className="btn-group dropend">
                    <button type="button" className="btn d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src='https://image.flaticon.com/icons/png/512/194/194938.png' className="rounded-circle w-25" alt="" />
                        <h6 className="mx-3">{this.state.user.displayName}</h6>
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link onClick={this.signOut} type="submit" className="dropdown-item" to="/dang-nhap">Đăng xuất</Link></li>
                    </ul>
                </div>

            </div>

        )
    }
}

export default Menu;