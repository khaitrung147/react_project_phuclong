import React from 'react';
import getDoc from '../../api/getDoc';

class Detail extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data_detail: {},
            product: []
        }
    }
    componentDidMount() {
        console.log(this.props.id);
        getDoc('don-hang', this.props.id).then(res => {
            this.setState({
                data_detail: res,
                product: res.sanpham
            })
        })
    }
    render() {
        const { data_detail } = this.state
        return (
            <div className="row">
                <div className="p-3 col-6">
                    <h5>Chi tiết đơn hàng</h5>
                    <ul>
                        <li className="my-3">Họ tên người nhận: <span>{data_detail.hoten}</span></li>
                        <li className="my-3">Địa chỉ nhận: <span>{data_detail.diachi}</span></li>
                        <li className="my-3">Số điện thoại: <span>{data_detail.sdt}</span></li>
                        <li className="my-3">Thời gian đặt hàng: <span>{data_detail.thoigian}</span></li>
                        <li className="my-3">Tổng tiền thanh toán: <span>{data_detail.tongtien}</span></li>
                        <li className="my-3">Sản phẩm đã đặt: <br />
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Sản phẩm</th>
                                        <th>Số lượng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.product.map((e, i) => {
                                            return <tr>
                                                <td scope="row">{i + 1}</td>
                                                <td>{e.id_product}</td>
                                                <td>{e.soluong}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Detail