import React, {Component} from 'react';

class Partner extends Component {
    render() {
        return (
            <div className="p-5">
                <div className="container text-center">
                    <h2 className="title-sections text-lg uppercase font-bold text-teal-600 my-10">Our Partner</h2>
                    <ul className="flex flex-wrap -mx-2">
                        <li className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 px-2"><img className="h-32 w-full object-cover" src="./images/partner/burberry.png" alt=""/></li>
                        <li className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 px-2"><img className="h-32 w-full object-cover" src="./images/partner/balenciaga.png" alt=""/></li>
                        <li className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 px-2"><img className="h-32 w-full object-cover" src="./images/partner/hamilton.jpg" alt=""/></li>
                        <li className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 px-2"><img className="h-32 w-full object-cover" src="./images/partner/rayban.jpg" alt=""/></li>
                        <li className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 px-2"><img className="h-32 w-full object-cover" src="./images/partner/giorgio_armani.png" alt=""/></li>
                        <li className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/6 px-2"><img className="h-32 w-full object-cover" src="./images/partner/guci.jpg" alt=""/></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Partner;
