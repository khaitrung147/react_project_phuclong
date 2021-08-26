import React from 'react';
import { Link } from 'react-router-dom';

class Mot_category extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <div className="row featurette my-5">
                    <div className={(this.props.nth == true) ? "col-md-7 order-md-2 mt-3" : "col-md-7 mt-3"}>
                        <h2 className="featurette-heading">{this.props.category.name}</h2>
                        <p className="lead">{this.props.category.description}</p>
                        <p><Link to={`/loai-san-pham/${this.props.category.id}`} className="btn btn-success">Xem ngay</Link></p>
                    </div>
                    <div className={(this.props.nth == true) ? "col-md-5 order-md-1 bg_tea" : "col-md-5 bg_tea"}>
                        <img className="rounded-circle" src={this.props.category.image_url} width="100%" alt="" />
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default Mot_category