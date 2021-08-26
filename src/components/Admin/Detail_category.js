import React from 'react';
import getCollection from '../../api/getCollection';
import getDoc from '../../api/getDoc';
import updateDoc from '../../api/updateDoc';

class Detail extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data_cata: [],
            data_detail: {},
            input_name: '',
            input_parrent: '',
            input_hidden: 0,
            input_description: '',
            input_order: 1,
            input_image: '',
        }
    }
    componentDidMount() {
        console.log(this.props.id);
        getDoc('loai-san-pham', this.props.id).then(res => {
            this.setState({
                data_detail: res,
                input_name: res.name,
                input_parrent: res.id_parent,
                input_hidden: res.hidden,
                input_description: res.description,
                input_order: res.order,
                input_image: res.image_url,
            })
        })
        getCollection('loai-san-pham').then(res => {
            this.setState({
                data_cata: res,
            })
        })
    }
    //Hàm lấy giá trị khi input thay đổi trong modal thêm sản phẩm
    change_input = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    //
    //Hàm sửa loại sản phẩm
    Update_data = (event) => {
        event.preventDefault();
        let id = this.state.data_detail.id
        let data = {
            id_parent: this.state.input_parrent,
            image_url: this.state.input_image,
            description: this.state.input_description,
            name: this.state.input_name,
            hidden: (this.state.input_hidden == 0) ? false : true,
            order: parseFloat(this.state.input_order)
        }

        updateDoc("loai-san-pham", id, data)
        getDoc('loai-san-pham', this.props.id).then(res => {
            this.setState({
                data_detail: res
            })
        })
    }
    //
    render() {
        const { data_detail, data_cata } = this.state
        console.log(this.state.input_name);
        return (
            <div className="row">
                <div className="p-3 col-6">
                    <h5>Chi tiết loại sản phẩm</h5>
                    <ul>
                        <li className="my-3">Tên loại sản phẩm: <span>{data_detail.name}</span></li>
                        <li className="my-3">Thuộc loại sản phẩm: <span>{data_cata.map(e => {
                            if (e.id == data_detail.id_parent) {
                                return e.name
                            }
                        })}</span></li>
                        <li className="my-3">Hình ảnh: <img src={data_detail.image_url} width='40%' alt="" /></li>
                        <li className="my-3">Thứ tự sắp xếp: <span>{data_detail.order}</span></li>
                        <li className="my-3">Ẩn/ Hiện: <span>{data_detail.hidden ? "Ẩn" : "Hiện"}</span></li>
                        <li className="my-3">Mô tả loại sản phẩm: <span>{data_detail.description}</span></li>
                    </ul>
                </div>
                <div className="border py-3 px-5 col-6">
                    <h5>Chỉnh sửa</h5>
                    <form className="row" height="100vh">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Tên loại sản phẩm</label>
                            <input value={this.state.input_name} type="text" className="form-control" name="input_name" onChange={(event) => this.change_input(event)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="parrent" className="form-label">Thuộc loại</label>
                            <select class="form-control" onChange={(event) => this.change_input(event)} name="input_parrent">
                                <option selected value="">Không thuộc loại nào</option>
                                {
                                    data_cata.map(e => {
                                        if (e.id_parent == "") {
                                            return <option value={`${e.id}`}>{e.name}</option>
                                        }
                                    })
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Hình ảnh</label>
                            <input value={this.state.input_image} type="text" className="form-control" onChange={(event) => this.change_input(event)} name="input_image" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="order" className="form-label">Thứ tự</label>
                            <input value={this.state.input_order} type="number" className="form-control" onChange={(event) => this.change_input(event)} name="input_order" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hidden" className="form-label">Ẩn/ Hiện</label>
                            <select class="form-control" onChange={(event) => this.change_input(event)} name="input_hidden">
                                <option selected value='0' >Hiện</option>
                                <option value='1'>Ẩn</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Mô tả</label>
                            <textarea value={this.state.input_description} rows="5" onChange={(event) => this.change_input(event)} className="form-control" name="input_description"></textarea>
                        </div>
                        <button onClick={this.Update_data} type="button" name="" id="" class="w-25 m-auto btn btn-primary">Lưu</button>
                    </form>

                </div>
            </div>

        )
    }
}

export default Detail