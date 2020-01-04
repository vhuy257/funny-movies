import React from 'react';
import Swiper from 'react-id-swiper';
import sliderData from '../../data/SliderItems';
import Tilt from 'react-tilt';

const SliderLayout = () => {
    const params = {
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev'
		},
		spaceBetween: 30
	}

	return (
		<Swiper className="slider-wrapper" {...params}>
			{sliderData.map((item, index) => (
				<div
					key={index}
					className={`slider-content cursor-pointer slide-${index + 1}`}
					style={{ background: `url('${item.image}') no-repeat top center` }}
				>
					<div className={`inner inner-item-${index + 1}`}>
						<h1 className="text-6xl font-bold">{item.title}</h1>
						<p className="text-2xl">{item.description}</p>
						<button className="mx-auto bg-white focus:shadow-outline shadow focus:outline-none text-black py-2 px-2" type="button">{item.button}</button>
					</div>
					{
						item.groupImage && item.groupImage.map((i, k) => (
							<div className={i.effect} key={k}>
								<Tilt options={{max: 25}}>
									<img key={k} src={`./images/${i.src}`} alt=""/>
								</Tilt>
							</div>
						))
					}
				</div>
			))}
		</Swiper>
	)
}

export default SliderLayout;