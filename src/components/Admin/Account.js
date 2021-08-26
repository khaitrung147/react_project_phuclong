import React from "react";
import firebase from "firebase";
import Menu from "./Menu";
import getCollection from "../../api/getCollection";
import createAccount from "../../api/createAccount";
import setDoc from "../../api/setDoc";
import Detail from "./Detail_account";

class Account extends React.Component {
  constructor(props) {
    super();
    this.state = {
      all_check: false,
      isCheck: [],
      data: [],
      select: false,
      input_name: "",
      input_email: "",
      input_phone: 0,
      input_password: "",
      input_password2: "",
      input_image: "",
      view_detail: false,
      detail: "Tra",
    };
    this.Dangki = this.Dangki.bind(this);
    this.change_input = this.change_input.bind(this);
  }
  componentDidMount() {
    //Hàm lấy danh sách loại sản phẩm
    getCollection("tai-khoan").then((res) => {
      this.setState({
        data: res,
      });
    });
    //
  }
  //Hàm chọn tất cả
  all_checked = () => {
    this.setState({
      all_check: !this.state.all_check,
      isCheck: this.state.data.map((li) => li.id),
    });
    if (this.state.all_check) {
      this.setState({
        isCheck: [],
      });
    }
  };
  //
  //Hàm chọn
  checked = (e) => {
    const { name, checked } = e.target;
    this.setState({
      isCheck: [...this.state.isCheck, name],
    });
    if (!checked) {
      this.setState({
        isCheck: this.state.isCheck.filter((item) => item != name),
      });
    }
  };
  //
  //Hàm ẩn hiện checkbox
  selected = (e) => {
    this.setState((prevState) => ({ select: !prevState.select }));
    this.setState({
      isCheck: [],
    });
  };
  //
  //Hàm lấy giá trị khi input thay đổi trong modal thêm sản phẩm
  change_input = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  //
  //Hàm đăng kí tài khoản
  Dangki = (event) => {
    event.preventDefault();
    createAccount(this.state.input_email, this.state.input_password2).then(
      (uid) => {
        let data = {
          id: uid,
          displayName: this.state.input_name,
          phoneNumber: this.state.input_phone,
          email: this.state.input_email,
          photoURL: this.state.input_image,
        };
        setDoc("tai-khoan", data);
        getCollection("tai-khoan").then((res) => {
          this.setState({
            data: res,
          });
        });
      }
    );
  };
  //
  //Xoá
  Delete = () => {
    // if (window.confirm("Bạn thật sự muốn xoá " + this.state.isCheck.length + " mục này")) {
    //     this.state.isCheck.forEach(id => {
    //         deleteDoc('loai-san-pham', id)
    //     });
    // }
    // getCollection('loai-san-pham').then(res => {
    //     this.setState({
    //         isCheck: [],
    //         data: res,
    //     })
    // })
  };
  //
  //Xem chi tiết
  View_detail = (e) => {
    this.setState({
      detail: e.target.id,
      view_detail: !this.state.view_detail,
    });
    getCollection("tai-khoan").then((res) => {
      this.setState({
        isCheck: [],
        data: res,
      });
    });
  };
  //
  //Hàm tìm kiến
  Search = (e) => {
    getCollection("loai-san-pham").then((res) => {
      if (e.target.value.length == 0) {
        this.setState({
          isCheck: [],
          data: res,
        });
      } else {
        this.setState({
          isCheck: [],
          data: res.filter((item) =>
            item.name.toLowerCase().match(e.target.value)
          ),
        });
      }
    });
  };
  //
  render() {
    const { data, select } = this.state;

    return (
      <>
        <div style={{ height: "100vh" }} className="m-0 row">
          <Menu />
          <div className="col-10">
            <div className="container mt-4">
              <div style={{ height: "95vh" }} className="card box_shadow">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between">
                    <h6>Tài khoản</h6>
                    <div className="d-flex">
                      <form className="d d-flex mx-5">
                        <input
                          onChange={(event) => this.Search(event)}
                          name="input_search"
                          className="form-control me-2"
                          type="search"
                          placeholder="Tìm kiếm"
                          aria-label="Search"
                        />
                      </form>
                      <button
                        type="button"
                        className="btn btn-dark"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Thêm tài khoản
                      </button>
                      <button
                        className="d-none btn btn-dark mx-2"
                        onClick={this.selected}
                        disabled={this.state.view_detail ? true : false}
                        type="button"
                      >
                        {this.state.select ? "Bỏ chọn" : "Chọn"}
                      </button>
                      <button
                        className="d-none btn btn-dark"
                        onClick={this.Delete}
                        disabled={this.state.isCheck.length != 0 ? false : true}
                        type="submit"
                      >
                        Xoá
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body overflow-auto">
                  <table
                    className={
                      this.state.view_detail ? "d-none table" : "table"
                    }
                  >
                    <thead className="table-light">
                      <tr>
                        <th hidden={select ? "" : "true"} scope="col">
                          <input
                            checked={this.state.all_check}
                            type="checkbox"
                            onChange={() => this.all_checked()}
                            class="form-check-input"
                          />
                        </th>
                        <th scope="col">#</th>
                        <th scope="col">Tên tài khoản</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((e, index) => {
                        return (
                          <tr>
                            <td hidden={select ? "" : "true"}>
                              <input
                                checked={this.state.isCheck.includes(e.id)}
                                type="checkbox"
                                name={e.id}
                                onChange={(e) => this.checked(e)}
                                class="form-check-input"
                              />{" "}
                            </td>
                            <th scope="row">{index + 1}</th>
                            <td>{e.displayName}</td>
                            <td>{e.email}</td>
                            <td>
                              <a
                                onClick={(e) => this.View_detail(e)}
                                id={e.id}
                                class="text-decoration-none"
                                href="#"
                                role="button"
                              >
                                Chi tiết
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="container">
                    {this.state.view_detail ? (
                      <Detail id={this.state.detail} />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div
                  className={this.state.view_detail ? "card-footer" : "d-none"}
                >
                  <a
                    class="btn btn-outline-dark col-2"
                    onClick={(e) => this.View_detail(e)}
                    href="#"
                    role="button"
                  >
                    <i className="fas fa-arrow-left" /> Trở về
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Đăng kí tài khoản
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <form className="row" onSubmit={this.Dangki}>
                    <div className="col-6">
                      <div className="mb-3">
                        <label htmlFor="displayName" className="form-label">
                          Tên người dùng
                        </label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          name="input_name"
                          onChange={(event) => this.change_input(event)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="image" className="form-label">
                          Hình đại diện
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(event) => this.change_input(event)}
                          name="input_image"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                          Số điện thoại
                        </label>
                        <input
                          required
                          type="number"
                          className="form-control"
                          onChange={(event) => this.change_input(event)}
                          name="input_phone"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label htmlFor="hidden" className="form-label">
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          className="form-control"
                          onChange={(event) => this.change_input(event)}
                          name="input_email"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Mật khẩu
                        </label>
                        <input
                          required
                          type="password"
                          className="form-control"
                          onChange={(event) => this.change_input(event)}
                          name="input_password"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password2" className="form-label">
                          Xác nhận mật khẩu (
                          {this.state.input_password ==
                          this.state.input_password2 ? (
                            <span className="text-success">Khớp</span>
                          ) : (
                            <span className="text-danger">Chưa khớp</span>
                          )}
                          )
                        </label>
                        <input
                          required
                          type="password"
                          className="form-control"
                          onChange={(event) => this.change_input(event)}
                          name="input_password2"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="mx-1 btn btn-primary">
                        Đăng kí
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Đóng
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Account;
