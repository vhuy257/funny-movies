import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-wrapper border-t-8 mt-10 border-teal-300 bg-teal-600 text-white p-10">
                    <div className="container flex justify-around text-sm">
                        <div className="left-columns flex justify-start">
                            <ul className="mr-40">
                                <li className="title text-base uppercase font-bold">Help</li>
                                <li className="my-2">
                                    Theme and templates
                                </li>
                                <li className="my-2">
                                    Authors
                                </li>
                                <li className="my-2">
                                    Help center
                                </li>
                            </ul>
                            <ul className="mr-40">
                                <li className="title text-base uppercase font-bold">Our Comunity</li>
                                <li className="my-2">
                                    Blog
                                </li>
                                <li className="my-2">
                                    Forum
                                </li>
                                <li className="my-2">
                                    Meetups
                                </li>
                            </ul>
                            <ul className="mr-40">
                                <li className="title text-base uppercase font-bold">Our Services</li>
                                <li className="my-2">
                                    Mens
                                </li>
                                <li className="my-2">
                                    Womens
                                </li>
                                <li className="my-2">
                                    Watchs
                                </li>
                            </ul>
                        </div>
                        <div className="right-columns max-w-xs">
                            <h2 className="text-base uppercase font-bold">Our Store</h2>
                            <p className="whitespace-normal my-2">
                                STORE - worldwide fashion store since 1978. We sell over 1000+ branded products on our web-site.
                            </p>
                            <p className="my-2"><i className="icon-direction icons mr-2"></i><span>666 Le Hong Phong Street, A10 Province, HCM</span></p>
                            <p className="my-2">
                                <i className="icon-phone icons mr-2"></i><span>Phone: (84) 7562 561</span>
                            </p>
                            <p>
                                <img src="./images/payments.png" alt=""/>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;


