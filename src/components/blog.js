import React, {Component} from 'react';

class Blog extends Component {
    render() {
        return (
            <>
            <div className="container text-center">
                <h2 className="text-lg title-sections uppercase font-bold text-teal-600 my-10">Our News</h2>
            </div>
            <div className="container mb-4 list--post px-2">
                <ul className="flex flex-wrap -mx-2">
                    <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 h-auto text-center">
                        <div className="image-wrapper">
                            <img className="h-48 w-full object-cover" src="./images/image-1.jpg" alt=""/>
                        </div>
                        <span className="date--post bg-white relative shadow p-1 rounded-full text-xs">12/7/2019</span>
                        <h3 className="title--post my-2 text-2xl font-bold">Condentum integer ridiculs</h3>
                        <span className="description-post text-sm text-gray-500">A sodales suspen disse vestibulum dui ultrices ferm entum a parturient scele risque potenti placerat blandit purus adipiscing eros habitasse sodales</span>
                    </li>
                    <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 h-auto text-center">
                        <div className="image-wrapper">
                            <img className="h-48 w-full object-cover"  src="./images/image-2.jpg" alt=""/>
                        </div>
                        <span className="date--post bg-white relative shadow p-1 rounded-full text-xs">12/7/2019</span>
                        <h3 className="title--post my-2 text-2xl font-bold">Venenatis veulum peus</h3>
                        <span className="description-post text-sm text-gray-500">In suspendisse at condimentum vitae torquent eu nam a adipiscing convallis quis elit quis mi suscipit adipiscing risus nisi quis leo elementum justo</span>
                    </li>
                    <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 h-auto text-center">
                        <div className="image-wrapper">
                            <img className="h-48 w-full object-cover" src="./images/image-3.jpg" alt=""/>
                        </div>
                        <span className="date--post bg-white relative shadow p-1 rounded-full text-xs">12/7/2019</span>
                        <h3 className="title--post my-2 text-2xl font-bold">Urna ligula inceptos</h3>
                        <span className="description-post text-sm text-gray-500">Ut cubilia metus sagittis rhoncus non suspendisse vestibulum a taciti posuere urna scelerisque neque scelerisque condimentum sed hac sem</span>
                    </li>
                </ul>
                <div className="text-center p-5">
                    <button className="bg-teal-500 capitalize hover:bg-teal-600 text-white py-2 px-4 shadow-lg inline-flex items-center">View more</button>
                </div>
            </div>
            </>
        )
    }
}

export default Blog;