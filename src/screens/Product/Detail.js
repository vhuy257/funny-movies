import React, {Component} from 'react';
import { withRouter } from 'react-router';
import ListProducts from '../../data/Products';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import connect from 'react-redux/es/connect/connect';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../store/actions/cart';

import Formsy from 'formsy-react';
import InputText from '../../components/Elements/InputText';

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
            activeTab: 'desc',
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
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Fugiat molestias dolorum maiores voluptatibus itaque aspernatur eius non architecto, 
                                    accusantium maxime iure cum libero placeat tenetur ad sapiente, at voluptatem tempore!
                                </p>
                            </div>
                            <div className="flex items-center content-center border-t border-gray-200">
                                <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                                    <div className="quantity flex items-center content-center mt-4 mb-4">
                                        <button className="minus outline-none p-2" onClick={() => {this.changeQty('minus')}}><i className="icon-minus"></i></button>
                                            <InputText name="title" validations="isNumeric" value={this.state.qty} validationError="This is not a valid number"/>
                                        <button className="plus outline-none p-2" onClick={() => {this.changeQty('plus')}}><i className="icon-plus"></i></button>
                                    </div>
                                    <button 
                                    type="submit"
                                    onClick={() => {this.addtoCart()}}
                                    className="add-to-cart bg-red-500 text-white p-4 py-2 w-48 hover:bg-red-600">
                                        Add to cart
                                    </button>
                                </Formsy>
                            </div>
                        </div>
                    </div>
    
                    <div className="description-wrapper">
                        <div className="tab-header mt-10 border-b border-gray-200">
                            <ul className="flex">
                                <li 
                                onClick={() => {this.setState({activeTab: 'desc'})}}
                                className={this.state.activeTab === 'desc' ? 'p-2 active font-bold text-teal-700 cursor-pointer' : 'p-2 cursor-pointer'}>Description</li>
                                <li 
                                onClick={() => {this.setState({activeTab: 'rev'})}}
                                className={this.state.activeTab === 'rev' ? 'p-2 active font-bold text-teal-700 cursor-pointer' : 'p-2 cursor-pointer'}>Review</li>
                            </ul>
                        </div>
                        <div className="tab-contentwrapper p-2">
                            <div className={this.state.activeTab === 'desc' ? 'tab-content active' : 'tab-content'}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem velit dolores ex cum aperiam, sed quae reiciendis vitae cumque aut distinctio dicta laudantium iusto, dolor ipsa fugit officiis aliquam. Doloremque?
                            </div>
                            <div className={this.state.activeTab === 'rev' ? 'tab-content active': 'tab-content'}>
                                <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                                    <InputText name="title" validations="isEmail" validationError="This is not a valid email" required/>
                                    <button type="submit" disabled={!this.state.canSubmit}>
                                        Submit
                                    </button>
                                </Formsy>
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