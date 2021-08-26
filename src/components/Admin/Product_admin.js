import React from "react";
import firebase from "firebase";
import Menu from "./Menu";
import getCollection from "../../api/getCollection";
import setDoc from "../../api/setDoc"
import Detail from "./Detail_product";
import deleteDoc from "../../api/deleteDoc";


class Product_admin extends React.Component {

  constructor(props) {
    super();
    this.state = {
      all_check: false,
      isCheck: [],
      data: [],
      data_cata: [],
      select: false,
      input_name: '',
      input_catagory: '',
      input_quicach: 0,
      input_description: '',
      input_price: 1,
      input_image: '',
      view_detail: false,
      detail: "Tra",
    }
    this.Them_data = this.Them_data.bind(this)
    this.change_input = this.change_input.bind(this)
  }
  componentDidMount() {
    //Hàm lấy danh sách sản phẩm
    getCollection('san-pham').then(res => {
      this.setState({
        data: res,
      })
    })
    getCollection('loai-san-pham').then(res => {
      this.setState({
        data_cata: res,
      })
    })
    //
  }
  //Hàm chọn tất cả
  all_checked = () => {
    this.setState({
      all_check: !this.state.all_check,
      isCheck: this.state.data.map(li => li.id)
    })
    if (this.state.all_check) {
      this.setState({
        isCheck: []
      })
    }
  }
  //
  //Hàm chọn 
  checked = (e) => {
    const { name, checked } = e.target;
    this.setState({
      isCheck: [...this.state.isCheck, name]
    })
    if (!checked) {
      this.setState({
        isCheck: this.state.isCheck.filter(item => item != name)
      })
    }
  }
  //
  //Hàm ẩn hiện checkbox
  selected = (e) => {
    this.setState(prevState => ({ select: !prevState.select }));
    this.setState({
      isCheck: []
    })
  }
  //
  //Hàm lấy giá trị khi input thay đổi trong modal thêm sản phẩm
  change_input = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  //
  //Hàm thêm  sản phẩm
  Them_data = (event) => {
    event.preventDefault();
    let key = this.state.input_name.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D')
      .replace(/\s/g, '-') + "-" + this.state.input_quicach.replace(/\s/g, '')

    let data = {
      id: key,
      id_catagory: this.state.input_catagory,
      image_url: this.state.input_image,
      description: this.state.input_description,
      name: this.state.input_name,
      specifications: this.state.input_quicach.replace(/\s/g, ''),
      price: parseFloat(this.state.input_price),
      hot: 0,
      view: 0,
      new: 0,
    }
    setDoc("san-pham", data)
    getCollection('san-pham').then(res => {
      this.setState({
        data: res,
      })
    })
  }
  //
  //Xoá
  Delete = () => {
    if (window.confirm("Bạn thật sự muốn xoá " + this.state.isCheck.length + " mục này")) {
      this.state.isCheck.forEach(id => {
        deleteDoc('san-pham', id)
      });
    }

    getCollection('san-pham').then(res => {
      this.setState({
        isCheck: [],
        data: res,
      })
    })
  }
  //
  //Xem chi tiết
  View_detail = (e) => {
    this.setState({
      detail: e.target.id,
      view_detail: !this.state.view_detail
    })
    getCollection('san-pham').then(res => {
      this.setState({
        isCheck: [],
        data: res,
      })
    })
  }
  //
  //Hàm tìm kiến
  Search = (e) => {
    getCollection('san-pham').then(res => {
      if (e.target.value.length == 0) {
        this.setState({
          isCheck: [],
          data: res,
        })
      }
      else {
        this.setState({
          isCheck: [],
          data: res.filter(item => item.name.toLowerCase().match(e.target.value))
        })
      }

    })
  }
  //

  render() {
    console.log(this.state.isCheck);
    const { data, select, data_cata } = this.state
    return (
      <>
        <div style={{ height: '100vh' }} className="m-0 row">
          <Menu />
          <div className="col-10">
            <div className="container mt-4">
              <div style={{ height: '95vh' }} className="card box_shadow">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between">
                    <h6>Sản phẩm</h6>
                    <div className='d-flex'>
                      <form className={this.state.view_detail ? "d-none" : "d-flex mx-5"}>
                        <input onChange={(event) => this.Search(event)} name="input_search" className="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search" />
                      </form>
                      <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Thêm sản phẩm
                      </button>
                      <button className="btn btn-dark mx-2" onClick={this.selected} disabled={this.state.view_detail ? true : false} type="button">{this.state.select ? "Bỏ chọn" : "Chọn"}</button>
                      <button className="btn btn-dark" onClick={this.Delete} disabled={this.state.isCheck.length != 0 ? false : true} type="submit">Xoá</button>
                    </div>
                  </div>

                </div>
                <div className="card-body overflow-auto">
                  <table className={this.state.view_detail ? "d-none table" : "table"}>
                    <thead className="table-light">
                      <tr>
                        <th hidden={select ? "" : "true"} scope="col">
                          <input checked={this.state.all_check} type="checkbox" onChange={() => this.all_checked()} class="form-check-input" />
                        </th>
                        <th scope="col">#</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Ẩn/ Hiện</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.map((e, index) => {
                          return <tr>
                            <td hidden={select ? "" : "true"}><input checked={this.state.isCheck.includes(e.id)} type="checkbox" name={e.id} onChange={(e) => this.checked(e)} class="form-check-input" /> </td>
                            <th scope="row">{index + 1}</th>
                            <td>{e.name}</td>
                            <td>{e.hidden ? "Ẩn" : "Hiện"}</td>
                            <td><a onClick={(e) => this.View_detail(e)} id={e.id} class="text-decoration-none" href="#" role="button">Chi tiết</a></td>
                          </tr>
                        })
                      }
                    </tbody>
                  </table>
                  <div className="container">
                    {
                      this.state.view_detail ?
                        <Detail id={this.state.detail} />

                        : <></>
                    }
                  </div>
                </div>
                <div className={this.state.view_detail ? "card-footer" : "d-none"}>
                  <a class="btn btn-outline-dark col-2" onClick={(e) => this.View_detail(e)} href="#" role="button"><i className="fas fa-arrow-left" /> Trở về</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Thêm sản phẩm</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form className="row" onSubmit={this.Them_data}>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Tên sản phẩm</label>
                      <input required type="text" className="form-control" name="input_name" onChange={(event) => this.change_input(event)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="catagory" className="form-label">Thuộc loại</label>
                      <select class="form-control" onChange={(event) => this.change_input(event)} name="input_catagory">
                        <option value="">--Vui lòng chọn loại sản phẩm--</option>
                        {
                          data_cata.map((e, i) => {
                            if (e.id_parent != "") {
                              return <option value={`${e.id}`}>{e.name}</option>
                            }
                          })
                        }
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">Hình ảnh</label>
                      <input required type="text" className="form-control" onChange={(event) => this.change_input(event)} name="input_image" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="price" className="form-label">Giá sản phẩm</label>
                      <input required type="number" className="form-control" onChange={(event) => this.change_input(event)} name="input_price" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="quicach" className="form-label">Qui cách</label>
                      <input required type="text" className="form-control" onChange={(event) => this.change_input(event)} name="input_quicach" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">Mô tả</label>
                      <textarea required rows="8" onChange={(event) => this.change_input(event)} className="form-control" name="input_description"></textarea>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="mx-1 btn btn-primary">Thêm</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Product_admin;
