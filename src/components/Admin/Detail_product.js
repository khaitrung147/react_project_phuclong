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
            input_catagory: '',
            input_quicach: 0,
            input_description: '',
            input_price: 1,
            input_image: '',
        }
    }
    componentDidMount() {
        console.log(this.props.id);
        getDoc('san-pham', this.props.id).then(res => {
            this.setState({
                data_detail: res,
                input_name: res.name,
                input_catagory: res.id_catagory,
                input_quicach: res.specifications,
                input_description: res.description,
                input_price: res.price,
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

        updateDoc("san-pham", id, data)
        getDoc('san-pham', this.props.id).then(res => {
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
                        <li className="my-3">Tên sản phẩm: <span>{data_detail.name}</span></li>
                        <li className="my-3">Hình ảnh: <img src={data_detail.image_url} width='40%' alt="" /></li>
                        <li className="my-3">Qui cách: <span>{data_detail.specifications}</span></li>
                        <li className="my-3">Thuộc loại sản phẩm: <span>{data_cata.map(e => {
                            if (e.id == data_detail.id_catagory) {
                                return e.name
                            }
                        })}</span></li>
                        <li className="my-3">Giá sản phẩm: <span>{data_detail.price}</span></li>
                        <li className="my-3">Mô tả loại sản phẩm: <span>{data_detail.description}</span></li>
                    </ul>
                </div>
                <div className="border py-3 px-5 col-6">
                    <h5>Chỉnh sửa</h5>
                    <form className="row" height="100vh">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Tên sản phẩm</label>
                            <input type="text" value={this.state.input_name} className="form-control" name="input_name" onChange={(event) => this.change_input(event)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="catagory" className="form-label">Thuộc loại</label>
                            <select class="form-control" onChange={(event) => this.change_input(event)} name="input_catagory">
                                {
                                    data_cata.map(e => {
                                        if (e.id_parent != "") {
                                            if (e.id == this.state.input_catagory) {
                                                return <option selected value={`${e.id}`}>{e.name}</option>
                                            }
                                            else {
                                                return <option value={`${e.id}`}>{e.name}</option>
                                            }
                                        }
                                    })
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Hình ảnh</label>
                            <input type="text" value={this.state.input_image} className="form-control" onChange={(event) => this.change_input(event)} name="input_image" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Giá sản phẩm (vnđ)</label>
                            <input type="number" value={this.state.input_price} className="form-control" onChange={(event) => this.change_input(event)} name="input_price" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quicach" className="form-label">Qui cách</label>
                            <input type="text" value={this.state.input_quicach} className="form-control" onChange={(event) => this.change_input(event)} name="input_quicach" />

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