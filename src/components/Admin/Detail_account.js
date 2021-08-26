import React from 'react';
import getDoc from '../../api/getDoc';

class Detail extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data_detail: [],
        }
    }
    componentDidMount() {
        console.log(this.props.id);
        getDoc('tai-khoan', this.props.id).then(res => {
            this.setState({
                data_detail: res,
            })
        })
    }
    render() {
        const { data_detail } = this.state
        return (
            <div className="row">
                <div className="p-3 col-6">
                    <h5>Chi tiết tài khoản</h5>
                    <ul>
                        <li className="my-3">Tên người dùng: <span>{data_detail.displayName}</span></li>
                        <li className="my-3">Hình ảnh: <img src={data_detail.photoURL} width='40%' alt="" /></li>
                        <li className="my-3">Email: <span>{data_detail.email}</span></li>
                        <li className="my-3">Số điện thoại: <span>{data_detail.phoneNumber}</span></li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Detail