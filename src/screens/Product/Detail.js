import React, {Component} from 'react';
import { withRouter } from 'react-router';
import ListProducts from '../../data/Products';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import connect from 'react-redux/es/connect/connect';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../store/actions/cart';

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1020/1000/600/',
      thumbnail: 'https://picsum.photos/id/1020/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1021/1000/600/',
      thumbnail: 'https://picsum.photos/id/1021/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1022/1000/600/',
      thumbnail: 'https://picsum.photos/id/1022/250/150/',
    },
];

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 1,
            product: []
        }
    }
    
    componentDidMount() {
        let id = this.props.match.params.id;
        this.setState({
            product: ListProducts.filter(item => {
                return item.id === parseInt(id);
            })
        });
    }

    addtoCart() {
        this.props.addProductToCart({
            product: this.state.product[0]
        });
    }

    setQuantity = (newvalue) => {
        if(!parseInt(newvalue.target.value) > 0) {
            return false;
        }
        this.setState({qty: parseInt(newvalue.target.value)})
    }

    changeQty = (params) => {
        if(params === 'plus') {
            this.setState({qty: parseInt(this.state.qty + 1)})
        } else {
            if(this.state.qty === 1) {
                return false;
            }
            this.setState({qty: parseInt(this.state.qty - 1)})
        }   
    }

    render() {
        return (
            <>
                <div className="breadcrumbs bg-orange-400 text-white">
                    <div className="container p-3">
                        <div className="text-center">
                            <span className="item">
                                Home
                            </span>
                            <span>
                                {this.state.product[0] && this.state.product[0].name}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">   
                    <div className="flex -mx-4">
                        <div className="w-3/6 px-4">
                            <ImageGallery 
                                autoPlay={true}
                                showNav={true}
                                lazyLoad={true}
                                items={images} 
                                showPlayButton={false}
                                showFullscreenButton={false}
                            />
                        </div>
                        <div className="w-3/6 px-4">
                            <h2 className="text-2xl">
                                { this.state.product[0] && this.state.product[0].name }
                            </h2>
                            <h3 className="text-2xl text-orange-600 font-bold">
                                $ { this.state.product[0] && this.state.product[0].price }
                            </h3>
                            <div className="list-attribute text-base my-4">
                                <ul>
                                    <li className="my-1">
                                        <i className="icon-layers"></i> <span className="ml-3 text-sm font-bold">M</span>
                                    </li>
                                    <li className="my-1">
                                        <i className="icon-pie-chart"></i> <span className="ml-3 text-sm font-bold">Blue</span>
                                    </li>
                                    <li className="my-1">
                                        <i className="icon-cursor"></i> <span className="ml-3 text-sm font-bold">Free shipping</span>
                                    </li>
                                </ul>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat molestias dolorum maiores voluptatibus itaque aspernatur eius non architecto, accusantium maxime iure cum libero placeat tenetur ad sapiente, at voluptatem tempore!
                                </p>
                            </div>
                            <div className="flex items-center content-center border-t border-gray-200">
                                <div className="quantity">
                                    <button className="minus outline-none" onClick={() => {this.changeQty('minus')}}><i className="icon-minus"></i></button>
                                    <input type="number" value={this.state.qty} onChange={(value) => {this.setQuantity(value)}} className="border px-2 py-1 outline-none w-12 m-4 text-center"/>
                                    <button className="plus outline-none" onClick={() => {this.changeQty('plus')}}><i className="icon-plus"></i></button>
                                </div>
                                <button 
                                onClick={() => {this.addtoCart()}}
                                className="add-to-cart bg-red-500 text-white p-4 py-2 ml-2 hover:bg-red-600">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
    
                    <div className="tab-content">
                        <div className="tab-header mt-10 border-b border-gray-200">
                            <ul className="flex">
                                <li className="p-2 active font-bold text-teal-700">Description</li>
                                <li className="p-2">Review</li>
                            </ul>
                        </div>
                        <div className="tab-content p-2">
                            <div className="desciption">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem velit dolores ex cum aperiam, sed quae reiciendis vitae cumque aut distinctio dicta laudantium iusto, dolor ipsa fugit officiis aliquam. Doloremque?
                            </div>
                            <div className="review">
    
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addProductToCart: cartActions.addProductToCart,
    }, dispatch)
}


export default connect(null, mapDispatchToProps)(withRouter(Detail));