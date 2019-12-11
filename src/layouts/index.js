import React from 'react';
import SliderLayout from './slider';
import Masonry from 'react-masonry-component';
import SliderProduct from './products/slider-product';
import Blog from '../components/blog';
import Partner from './partner';
const masonryOptions = {
    transitionDuration: 0
}; 
const imagesLoadedOptions = { background: '.my-bg-image-el' };

class HomePage extends React.Component {
    render() {
        return (
            <>
                <SliderLayout/>
                <div className="container mx-auto my-2">
                    <div className="flex items-center justify-around my-8">
                        <div className="item">
                            <div className="text-center text-4xl">
                                <i className="icon-plane icons"></i>
                            </div>
                            <span>
                                Free shipping
                            </span>
                        </div>
                        <div className="item">
                            <div className="text-center text-4xl">
                                <i className="icon-support icons"></i>
                            </div>
                            <span>
                                Buyer Support 24/7
                            </span>
                        </div>
                        <div className="item">
                            <div className="text-center text-4xl">
                                <i className="icon-lock icons"></i>
                            </div>
                            <span>
                                Total security
                            </span>
                        </div>
                        <div className="item">
                            <div className="text-center text-4xl">
                                <i className="icon-refresh icons"></i>
                            </div>
                            <span>
                                Return policy
                            </span>
                        </div>
                    </div>
                    <Masonry
                        className={'gallery-categoryies flex'} // default ''
                        elementType={'ul'} // default 'div'
                        options={masonryOptions} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                        imagesLoadedOptions={imagesLoadedOptions} // default {}
                    >    
                        <li className="image-element-class">
                            <div className="inner-img">
                                <img src="./images/photo-5.jpg" alt=""/>
                                <figure>
                                    New Collection
                                </figure>
                            </div>
                        </li>
                        <li className="image-element-class">      
                            <div className="inner-img">
                                <img src="./images/photo-3.jpg" alt=""/>
                                <figure>
                                    Our special 
                                </figure>
                            </div>                          
                        </li>
                        <li className="image-element-class">
                            <div className="inner-img">
                                <img src="./images/photo-2.jpg" alt=""/>
                                <figure>
                                    Bags
                                </figure>
                            </div>
                        </li>
                        <li className="image-element-class">
                            <div className="inner-img">
                                <img src="./images/photo-1.jpg" alt=""/>
                                <figure>
                                    Giorgio Armani
                                </figure>
                            </div>
                        </li>
                        <li className="image-element-class">
                            <div className="inner-img">
                                <img src="./images/photo-4.jpg" alt=""/>
                                <figure>
                                    Watches
                                </figure>
                            </div>
                        </li>                                                            
                    </Masonry>
                    <SliderProduct/>
                </div>
                <div className="parralax_section mt-4 flex justify-center flex-col items-center mb-4">
                    <h2 className="text-white text-6xl capitalize mb-5">Join our Newsletter</h2>
                    <figure className="text-white flex border-b-2">
                        <input type="text" placeholder="Your email address" className="placeholder-white w-56 bg-transparent text-2xl pl-1 outline-none mr-2"/>
                        <button className="bg-white hover:bg-teal-500 hover:text-white text-2xl text-black text-center px-5 py-1">
                            Subscribe
                        </button>
                    </figure>
                </div>
                <Blog/>
                <Partner/>
            </>
        )
    }
}

export default HomePage;