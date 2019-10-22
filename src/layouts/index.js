import React from 'react';
import SliderLayout from './slider';
import Lottie from 'react-lottie';
import shippedJson from '../animated-icons/shipped/shipped.json';
import openJson from '../animated-icons/open-sign/open-sign.json';
import shieldJson from '../animated-icons/shield/shield.json';
import refreshJson from '../animated-icons/refresh-wait/refresh-wait.json';

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
            isStoped: false,
        }
    }

    play() {
        this.setState({
            isStoped: false,
        })
    }

    stop() {
        this.setState({
            isStoped: true,
        });
    }

    render() {
        return (
            <>
                <SliderLayout/>
                <div className="container mx-auto my-2">
                        <div className="flex items-center justify-around my-8">
                            <div className="" onMouseOver={() => {this.play()}} onMouseOut={() => {this.stop()}}>
                            <Lottie 
                                options={
                                    shipping
                                }
                                isStopped={this.state.isStoped}
                                height={40}
                                width={40}
                            />
                                Free shipping
                            </div>
                            <div className="" onMouseOver={() => {this.play()}} onMouseOut={() => {this.stop()}}>
                            <Lottie 
                                options={
                                    support
                                }
                                isStopped={this.state.isStoped}
                                height={40}
                                width={40}
                            />
                                Buyer Support 24/7
                            </div>
                            <div className="" onMouseOver={() => {this.play()}} onMouseOut={() => {this.stop()}}>
                            <Lottie 
                                options={
                                    shield
                                }
                                isStopped={this.state.isStoped}
                                height={40}
                                width={40}
                            />
                                Total security
                            </div>
                            <div className="" onMouseOver={() => {this.play()}} onMouseOut={() => {this.stop()}}>
                            <Lottie 
                                options={
                                    refresh
                                }
                                isStopped={this.state.isStoped}
                                height={40}
                                width={40}
                            />
                                Return policy
                            </div>
                        </div>
                </div>
            </>
        )
    }
}

export default HomePage;