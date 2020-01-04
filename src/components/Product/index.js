import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import {Link} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../store/actions/cart';

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.addtoCart = this.addtoCart.bind(this);
    }

    addtoCart(item) {
        this.props.addProductToCart({
            product: item
        });
    }

    render() {
        let { item } = this.props;
        
        return (
            <li 
            className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-10 product-item-wrapper">
                <div className="product-item text-center border-grey p-2 border ">
                    <img alt={item.name} src={`./images/product/${item.image}`} className="mx-auto" />
                    <div className="my-5">
                        <StarRatings 
                            starRatedColor="#f6ad55"
                            rating={item.rating || 0}
                            starDimension="16px"
                            starSpacing="2px"
                        />
                    </div>
                    <Link to={`product/${item.id}`}>
                        <h2 className="mt-4 h-8 truncate" alt={item.name}>{item.name}</h2>
                    </Link>
                    <h4 className="font-bold text-teal-600 text-xl">$ {item.price}</h4>
                </div>
                <div className="product-toolbars text-center flex flex-col items-center justify-start pt-5">
                    <button className="quick-view outline-none mb-2 items-center flex tooltip tooltip-right">
                        <i className="icon-magnifier icons h4 mx-3 d-block"></i>
                        <span className="text-tooltip text-xs text-white whitespace-no-wrap bg-teal-500 p-1">Quick view</span>
                    </button>
                    <button className="addto-wishlist outline-none mb-2 flex items-center tooltip tooltip-right">
                        <i className="icon-heart icons h4 mx-3 d-block"></i>
                        <span className="text-tooltip text-xs text-white whitespace-no-wrap bg-teal-500 p-1">Add to wishlist</span>
                    </button>
                </div>
                <div className="add-to-cart">
                    <button className="btn primary" onClick={() => {this.addtoCart(item)}}>Add to cart</button>
                </div>
            </li>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addProductToCart: cartActions.addProductToCart,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(ProductItem);