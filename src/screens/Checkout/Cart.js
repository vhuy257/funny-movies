import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div className="container p-3">
                <h2 className="font-bold text-2xl">Cart</h2>
                <div className="flex flex-wrap mt-5">
                    <div className="w-4/5">
                    <table class="table-fixed">
                        <thead className="text-left">
                            <tr>
                                <th className="w-1/4 px-4 py-2"></th>
                                <th className="w-1/2 px-4 py-2">Name</th>
                                <th className="w-1/4 px-4 py-2">Price</th>
                                <th className="w-1/4 px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src="./images/product/balenciaga-explorer-backpack-graffiti-5032210fe35-1080.jpg" alt="" className="w-32 mx-auto h-32 object-fit"/></td>
                                <td className="px-4 py-2">Intro to CSS</td>
                                <td className="px-4 py-2">Adam</td>
                                <td className="px-4 py-2">858</td>
                            </tr>
                            <tr>
                                <td><img src="./images/product/ray-ban-aviator-58mm-classic-green-sunglasses-rb3025-l0205-58-14.jpg" alt="" className="w-32 mx-auto h-32 object-fit"/></td>
                                <td className="px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                                <td className="px-4 py-2">Adam</td>
                                <td className="px-4 py-2">112</td>
                            </tr>
                            <tr>
                                <td><img src="./images/product/tissot-le-locle-powermatic-80-automatic-mens-watch-t0064071603300.jpg" alt="" className="w-32 mx-auto h-32 object-fit"/></td>
                                <td className="px-4 py-2">Into to JavaScript</td>
                                <td className="px-4 py-2">Chris</td>
                                <td className="px-4 py-2">1,280</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="w-1/5">

                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;