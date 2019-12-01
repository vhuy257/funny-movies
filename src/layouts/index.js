import React from 'react';
import SliderLayout from './slider';
import Lottie from 'react-lottie';
import shippedJson from '../animated-icons/shipped/shipped.json';
import openJson from '../animated-icons/open-sign/open-sign.json';
import shieldJson from '../animated-icons/shield/shield.json';
import refreshJson from '../animated-icons/refresh-wait/refresh-wait.json';
import Masonry from 'react-masonry-component';
import SliderProduct from './products/slider-product';
import Footer from './footer';

const masonryOptions = {
    transitionDuration: 0
}; 

const imagesLoadedOptions = { background: '.my-bg-image-el' };

const shipping = {
    autoplay: false,
    loop: false,
    animationData: shippedJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}

const support = {
    autoplay: false,
    loop: false,
    animationData: openJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}

const shield = {
    autoplay: false,
    loop: false,
    animationData: shieldJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}

const refresh = {
    autoplay: false,
    loop: false,
    animationData: refreshJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStoped1: false,
            isStoped2: false,
            isStoped3: false,
            isStoped4: false,
        }
    }

    play(isStoped) {
        switch(isStoped) {
            case '1':
                this.setState({ isStoped1: false }) 
            break;
            case '2':
                this.setState({ isStoped2: false }) 
            break;
            case '3':
                this.setState({ isStoped3: false })
            break;
            case '4':
                this.setState({isStoped4: false})
            break;
            default:
        }
    }

    stop(isStoped) {
        switch(isStoped) {
            case '1':
                this.setState({ isStoped1: true }) 
            break;
            case '2':
                this.setState({ isStoped2: true }) 
            break;
            case '3':
                this.setState({ isStoped3: true })
            break;
            case '4':
                this.setState({isStoped4: true})
            break;
            default:
        }
    }

    render() {
        return (
            <>
                <SliderLayout/>
                <div className="container mx-auto my-2">
                        <div className="flex items-center justify-around my-8">
                            <div className="" onMouseOver={() => {this.play('1')}} onMouseOut={() => {this.stop('1')}}>
                            <Lottie 
                                options={
                                    shipping
                                }
                                isStopped={this.state.isStoped1}
                                height={40}
                                width={40}
                            />
                                Free shipping
                            </div>
                            <div className="" onMouseOver={() => {this.play('2')}} onMouseOut={() => {this.stop('2')}}>
                            <Lottie 
                                options={
                                    support
                                }
                                isStopped={this.state.isStoped2}
                                height={40}
                                width={40}
                            />
                                Buyer Support 24/7
                            </div>
                            <div className="" onMouseOver={() => {this.play('3')}} onMouseOut={() => {this.stop('3')}}>
                            <Lottie 
                                options={
                                    shield
                                }
                                isStopped={this.state.isStoped3}
                                height={40}
                                width={40}
                            />
                                Total security
                            </div>
                            <div className="" onMouseOver={() => {this.play('4')}} onMouseOut={() => {this.stop('4')}}>
                            <Lottie 
                                options={
                                    refresh
                                }
                                isStopped={this.state.isStoped4}
                                height={40}
                                width={40}
                            />
                                Return policy
                            </div>
                        </div>
                        
                        <Masonry
                            className={'my-gallery-class flex'} // default ''
                            elementType={'ul'} // default 'div'
                            options={masonryOptions} // default {}
                            disableImagesLoaded={false} // default false
                            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                            imagesLoadedOptions={imagesLoadedOptions} // default {}
                        >    
                            <li className="image-element-class">
                                <div className="inner-img">
                                    <img src="./images/photo-5.jpg" alt=""/>
                                </div>
                            </li>
                            <li className="image-element-class">      
                                <div className="inner-img">
                                    <img src="./images/photo-3.jpg" alt=""/>
                                </div>                          
                            </li>
                            <li className="image-element-class">
                                <div className="inner-img">
                                    <img src="./images/photo-2.jpg" alt=""/>
                                </div>
                            </li>
                            <li className="image-element-class">
                                <div className="inner-img">
                                    <img src="./images/photo-1.jpg" alt=""/>
                                </div>
                            </li>
                            <li className="image-element-class">
                                <div className="inner-img">
                                    <img src="./images/photo-4.jpg" alt=""/>
                                </div>
                            </li>                                                            
                        </Masonry>
                        <SliderProduct/>
                </div>
                <div className="parralax_section mt-4 flex justify-center items-center mb-4">
                    <figure className="text-white flex">
                        <input type="text" placeholder="Your Email" className="placeholder-white border-0 border-b w-56 bg-transparent pl-1 outline-none mr-2"/>
                        <button className="bg-white hover:bg-teal-500 hover:text-white text-black text-center px-5 py-1">
                            Subscribe
                        </button>
                    </figure>
                </div>

                <Footer/>
            </>
        )
    }
}

export default HomePage;