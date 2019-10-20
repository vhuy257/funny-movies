import React from 'react';
import Swiper from 'react-id-swiper';
const content = [
	{
		title: 'Vulputate Mollis Ultricies Fermentum Parturient',
		description:
		'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
        button: 'Read More',
		image: './images/sliders/142.jpg',
		user: 'Luan Gjokaj',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Tortor Dapibus Commodo Aenean Quam',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        button: 'Discover',
        effect: '',
		image: './images/sliders/143.jpg',
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Phasellus volutpat metus',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
        button: 'Buy now',
        effect: '',
		image: './images/sliders/144.jpg',
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];


class SliderLayout extends React.Component {
	
	eventHandler(eventData) {
		console.log(eventData);
	}

    render() {
        return (
            <Swiper className="slider-wrapper">
                {content.map((item, index) => (
					<div
						key={index}
						className={`slider-content cursor-pointer slide-${index + 1}`}
						style={{ background: `url('${item.image}') no-repeat top center` }}
					>
						<div className={`inner inner-item-${index + 1}`}>
							<h1 className="text-6xl font-bold">{item.title}</h1>
							<p className="text-2xl">{item.description}</p>
							<button className="mx-auto bg-white focus:shadow-outline uppercase focus:outline-none text-black py-2 px-2" type="button">{item.button}</button>
						</div>
					</div>
                ))}
			</Swiper>
        )
    }
}

export default SliderLayout;