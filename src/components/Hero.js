import React from 'react';
import Image from 'next/image';
import { heroData } from '../constants/data';
import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '../styles/variants';

const Hero = () => {
	const { pretitle, title, subtitle, btnText } = heroData;

	return (
		<section className='realtive min-h-screen bg-pink-200'>
			<Image src='/hero/bg.png' alt='' fill className='object-cover' />
			<div className='z-10 relative container mx-auto min-h-screen flex justify-center items-center font-primary'>
				{/* Text Content */}
				<motion.div
					variants={staggerContainer(0.3, 1)}
					initial='hidden'
					whileInView='show'
					className='flex flex-col items-center text-white text-center '>
					<motion.h4
						variants={fadeIn('down', 'tween', 0.2, 1.1)}
						className='mb-1 italic lg:font-medium'>
						{pretitle}
					</motion.h4>
					<motion.h1
						variants={fadeIn('down', 'tween', 0.3, 1.1)}
						className='h1 mb-5'>
						{title}
					</motion.h1>
					<motion.p
						variants={fadeIn('down', 'tween', 0.4, 1.1)}
						className=' max-w-[548px] mb-8'>
						{subtitle}
					</motion.p>
					<motion.div variants={fadeIn('down', 'tween', 0.5, 1.1)}>
						<button className='btn'>{btnText}</button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
