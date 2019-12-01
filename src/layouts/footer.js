import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-wrapper bg-teal-600 text-white p-10">
                    <div className="container flex justify-around text-sm">
                        <div className="left-columns flex justify-start">
                            <ul className="mr-40">
                                <li className="title text-base uppercase">Help</li>
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
                                <li className="title text-base uppercase">Our Comunity</li>
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
                                <li className="title text-base uppercase">Our Services</li>
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
                        <div className="right-columns">
                            <h2 className="text-base uppercase">Our Store</h2>
                            <p className="my-2">666 Le Hong Phong Street, A10 Province, HCM</p>
                            <p>
                                + 847 562 561
                            </p>
                            <p>
                                
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;


