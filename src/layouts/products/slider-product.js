import React, {Component} from 'react';
import StarRatings from 'react-star-ratings';
import dataProduct from '../../data/products';

class SliderProduct extends Component {
    render() {
        return (
            <div className="special-wrapper container px-2">
                <div className="text-center w-full my-10">
                    <h2 className="title-sections text-lg uppercase font-bold text-teal-600">Special</h2>
                </div>
                <ul className="flex w-full flex-auto flex-wrap">
                    {dataProduct.map((item, key) => (
                        <li 
                        key={key}
                        className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-10 product-item-wrapper">
                            <div className="product-item text-center border-grey p-2 border ">
                                <img alt={item.name} src={`./images/product/${item.image}`} className="mx-auto" />
                                <div className="my-5">
                                    <StarRatings 
                                        starRatedColor="#f6ad55"
                                        rating={item.rating || 0}
                                        starDimension="20px"
                                        starSpacing="2px"
                                    />
                                </div>
                                <h2 className="mt-4 h-8 truncate" alt={item.name}>{item.name}</h2>
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
                                <button className="add-to-cart outline-none flex mb-2 items-center tooltip tooltip-right">
                                    <i className="icon-basket icons h4 mx-3 d-block"></i>
                                    <span className="text-tooltip text-xs text-white whitespace-no-wrap bg-teal-500 p-1">Add to cart</span>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SliderProduct;