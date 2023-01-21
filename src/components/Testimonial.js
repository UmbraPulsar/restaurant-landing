import React from 'react';
import Image from 'next/image';

import TestimonialCarousel from '../components/TestimonialCarousel';

import { testimonialData } from '../constants/data';
import { motion } from 'framer-motion';
import { fadeIn } from '../styles/variants';

const Testimonial = () => {
	const { title, subtitle, modelImg, slider } = testimonialData;

	return (
		<section className='z-10 relative top-[340px] lg:top-[390px] min-h-[800px] pt-[60px] md:pt-[120px]'>
			{/* BG */}
			<Image
				src='/testimonial/bg.png'
				alt=''
				fill
				className='z-[-1] object-cover'
			/>

			{/* text */}
			<motion.div
				variants={fadeIn('up', 'tween', 0.2, 1.6)}
				initial='hidden'
				whileInView={'show'}
				className='container mx-auto'>
				<div className='flex flex-col items-center text-center capitalize'>
					<h2 className='h2 text-white'>{title}</h2>
					<p className='text-white/70 capitalize mb-8'>{subtitle}</p>
					<div className='mb-12'>
						<Image src={modelImg} alt='' width={300} height={300} />
					</div>
				</div>

				{/* Testimonial Slider */}
				{/* Arrows are not propperly styled. Add to ToDo */}
				<motion.div
					variants={fadeIn('up', 'tween', 0.4, 1.6)}
					initial='hidden'
					whileInView={'show'}
					className='flex justify-center'>
					<TestimonialCarousel slider={slider} />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Testimonial;
