import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import getCollection from '../../api/getCollection';

class Menu_dropdown extends React.Component {
    constructor(props) {
        super()
        this.state = {
            loading: false,
            _categories: []
        }
    }
    componentDidMount() {
        getCollection('loai-san-pham').then(res => {
            this.setState({
                loading: true,
                _categories: res
            })
        });
    }

    render() {
        const { _categories } = this.state;
        let arr = [];
        let item = _categories.filter(e => {
            return (e.id_parent !== "");
        })

        _categories.forEach(element => {
            let id = element.id
            if (element.id_parent == "") {
                let a = [];
                item.forEach(e => {
                    if (e.id_parent == id) {
                        let url = `/loai-san-pham/${e.id}`
                        a.push(<li className="mb-2 px-3 py-2"><Link className="" to={url}>{e.name}</Link></li>)
                    }
                });
                arr.push(
                    <ul className="list py-5">
                        <h5 className="mb-3 px-3">{element.name}</h5>
                        {a}
                    </ul>
                )
            }
        });
        var kq =
            <div className="menu_dropdown" id="menu_dropdown">
                {
                    arr
                }
                <ul className="list py-5">
                    <h5 className="mb-3 px-3">Nổi bật</h5>
                    <li className="my-2 px-3 py-2"><Link to=''>Sản phẩm nổi bật</Link></li>
                    <li className="my-2 px-3 py-2"><Link to=''>Sản phẩm xem nhiều</Link></li>
                    <li className="my-2 px-3 py-2"><Link to=''>Sản phẩm mới</Link></li>
                </ul>
            </div>
        return kq;
    }
}

export default Menu_dropdown