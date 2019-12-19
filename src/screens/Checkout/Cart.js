import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div className="container p-3">
                <h2 className="font-bold text-2xl">Cart</h2>
                <div className="flex flex-wrap mt-5 -mx-5 items-start">
                    <div className="w-4/6 p-5">
                    <table className="table-fixed">
                        <thead className="text-left">
                            <tr>
                                <th className="w-1/4 px-4 py-2"></th>
                                <th className="w-1/2 px-4 py-2 uppercase text-gray-600">Name</th>
                                <th className="w-1/4 px-4 py-2 uppercase text-gray-600">Price</th>
                                <th className="w-1/4 px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-b px-4 py-2"><img src="./images/product/balenciaga-explorer-backpack-graffiti-5032210fe35-1080.jpg" alt="" className="w-32 mx-auto h-32 object-fit"/></td>
                                <td className="border-b px-4 py-2">Intro to CSS</td>
                                <td className="border-b px-4 py-2">Adam</td>
                                <td className="border-b px-4 py-2">858</td>
                            </tr>
                            <tr>
                                <td className="border-b px-4 py-2"><img src="./images/product/ray-ban-aviator-58mm-classic-green-sunglasses-rb3025-l0205-58-14.jpg" alt="" className="w-32 mx-auto h-32 object-fit"/></td>
                                <td className="border-b px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                                <td className="border-b px-4 py-2">Adam</td>
                                <td className="border-b px-4 py-2">112</td>
                            </tr>
                            <tr>
                                <td className="border-b px-4 py-2"><img src="./images/product/tissot-le-locle-powermatic-80-automatic-mens-watch-t0064071603300.jpg" alt="" className="w-32 mx-auto h-32 object-fit"/></td>
                                <td className="border-b px-4 py-2">Into to JavaScript</td>
                                <td className="border-b px-4 py-2">Chris</td>
                                <td className="border-b px-4 py-2">1,280</td>
                            </tr>
                            <tr>
                                <td className="border-b px-4 py-2"><img src="./images/product/tissot-le-locle-powermatic-80-automatic-mens-watch-t0064071603300.jpg" alt="" className="w-32 mx-auto h-32 object-fit"/></td>
                                <td className="border-b px-4 py-2">Into to JavaScript</td>
                                <td className="border-b px-4 py-2">Chris</td>
                                <td className="border-b px-4 py-2">1,280</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="w-2/6 p-5 border-2 border-teal-300">
                        <div className="flex justify-between my-3">
                            <span>Totals:</span>
                            <span>$7400</span>
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
                            <strong className="text-xl text-teal-500">$7.500</strong>
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

export default Cart;