import React from "react";
import Mot_product from "../Products/Mot_product";
import getCollection from "../../api/getCollection";
import ReactDOM from "react-dom";
import Nav from "../Index/Nav";
import Footer from "../Index/Footer";

class Category extends React.Component {
    constructor(props) {
        super()
        this.state = {
            _categories: [],
            _products: []
        }
    }
    componentDidMount() {
        getCollection('loai-san-pham').then(res => {
            this.setState({
                _categories: res
            })
        });
        getCollection('san-pham').then(res => {
            this.setState({
                _products: res
            })
        });
    }
    render() {
        ReactDOM.render("Danh sách sản phẩm", document.getElementById("title_page"))
        const { _categories, _products } = this.state;
        let id = this.props.match.params.id;
        console.log(_categories);
        console.log(_products);
        let arr = [];
        _products.forEach(e => {
            if (e.id_catagory == id) {
                arr.push(<Mot_product product={e} />)
            }
        })
        let arr2 = [];
        _categories.forEach(e => {
            if (e.id == id) {
                arr2 =
                    <div className="row w-75 m-auto text-center">
                        <h3>{e.name}</h3>
                        <p className="fs-5 mb-5" >{e.description}</p>
                    </div>
            }
        })

        let kq =
            <>
                <Nav></Nav>
                <section className="py-5">
                    <div className="container px-4 px-lg-5 mt-5">
                        {arr2}
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {arr}
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </>

        return kq;
    }
};

export default Category;