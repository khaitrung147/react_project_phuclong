import React from 'react';
import Mot_category from './Mot_category';
import getCollection from '../../api/getCollection';

class List_category extends React.Component {
    constructor(props) {
        super()
        this.state = {
            _categories: []
        }
    }
    componentDidMount() {
        getCollection('loai-san-pham').then(res => {
            this.setState({
                _categories: res
            })
        });
    }
    render() {
        const { _categories } = this.state;
        console.log(_categories);
        let i = true;
        let arr = [];
        _categories.forEach(element => {
            if (element.id_parent !== "") {
                if (i === true) {
                    arr.push(<Mot_category category={element} nth={i} />)
                    i = false
                }
                else {
                    arr.push(<Mot_category category={element} nth={i} />)
                    i = true
                }
            }
        });

        let kq =
            <div className="container px-4 px-lg-5 mt-5">
                {
                    arr
                }
            </div>

        return kq;
    }
}

export default List_category
