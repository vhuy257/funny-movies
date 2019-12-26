import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Cart extends Component {
    showConfirm (e) {
        e.target.parentElement.classList.add('actived');
    }

    hideConfirm (e) {
        e.target.parentElement.parentNode.parentNode.classList.remove('actived');
    }

    render() {
        return (
            <div className="container p-3">
                <h2 className="font-bold text-2xl">Cart</h2>
                <div className="flex flex-wrap mt-5 -mx-5 items-start">
                    <div className="w-4/6 p-5">
                    <table className="table-fixed table-cart">
                        <thead className="text-left">
                            <tr>
                                <th className="w-1/4 px-4 py-2"></th>
                                <th className="w-1/2 px-4 py-2">Name</th>
                                <th className="w-1/2 px-4 py-2">Qty</th>
                                <th className="w-1/4 px-4 py-2">Price</th>
                                <th className="w-1/4 px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.cartData.map((item, k) => (
                            <tr key={k}>
                                <td className="border-b px-4 py-2">
                                    <img src={`./images/product/${item.image}`} alt="" className="w-24 mx-auto h-24 object-fit"/>
                                </td>
                                <td className="border-b px-4 py-2">{item.name}</td>
                                <td className="border-b px-4 py-2">{item.qty || 1}</td>
                                <td className="border-b px-4 py-2">{item.price}</td>
                                <td className={item.showOptions ? 'border-b px-4 py-2 relative overflow-hidden item-options actived' : 'border-b px-4 py-2 relative overflow-hidden item-options'}>
                                    <button className="delete_cart-item focus:outline-none" onClick={(e) => {this.showConfirm(e)}}></button>
                                    <div className="option-confirm">
                                        <button className="confirm-yes focus:outline-none">
                                            <i className="icon-check icons h4 d-block mt-4"></i>
                                        </button>
                                        <button className="confirm-cancel focus:outline-none" onClick={(e) => {this.hideConfirm(e)}}>
                                            <i className="icon-close icons h4 d-block mt-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                    <div className="w-2/6 p-5 border-2 border-teal-300">
                        <div className="flex justify-between my-3">
                            <span>Totals:</span>
                            <span>${this.props.totalAmount}</span>
                        </div>
                        <div className="flex justify-between my-3">
                            <span>
                                Shipping:
                            </span>
                            <span>
                                $15
                            </span>
                        </div>
                        <div className="flex justify-between mt-3 items-center">
                            <span className="font-bold">Final Price</span>
                            <strong className="text-xl text-teal-500">${this.props.totalAmount + 15}</strong>
                        </div>
                        <div className="mt-1">
                            <button className="primary-button button bg-teal-500 block text-white w-full p-3 uppercase mt-5">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        
    }, dispatch);
}

function mapStateToProps({cart}) {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);