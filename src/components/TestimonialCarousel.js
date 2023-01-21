import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/slider.module.css';

const TestimonialCarousel = ({ slider }) => {
	return (
		<Carousel
			showThumbs={false}
			showStatus={false}
			showIndicators={false}
			autoPlay={false}
			infiniteLoop={true}
			className='flex items-center justify-center w-full max-w-[1024px]'>
			{slider.map((item, index) => {
				const { image, message, name, occupation } = item;
				return (
					<div
						key={index}
						className='max-w-[840px] mx-auto px-24 text-white'>
						<p className='mb-9 text-lg lg:text-2xl leading-snug'>
							{message}
						</p>
						<div className='relative w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] mx-auto mb-3'>
							<Image src={image} alt='' fill />
						</div>
						<h4 className='font-bold text-[22px] text-accent'>
							{name}
						</h4>
						<p className='font-medium italic'>{occupation}</p>
					</div>
				);
			})}
		</Carousel>
	);
};

export default TestimonialCarousel;
