import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { plateVariants, staggerContainer, fadeIn } from '../styles/variants';
import { aboutData } from '../constants/data';

const About = () => {
	const { pretitle, title, subtitle, btnText, image } = aboutData;

	return (
		<section className='min-h-[620px] bg-white'>
			<div className='container min-h-[620px] mx-auto'>
				<motion.div
					variants={staggerContainer}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.6 }}
					className='flex flex-col lg:flex-row items-center min-h-[620px]'>
					<motion.div
						variants={fadeIn('right', 'tween', 0.2, 1.8)}
						className='flex-1 text-center lg:text-left'>
						<p className='pretitle'>{pretitle}</p>
						<h2 className='h2 capitalize'>{title}</h2>
						<p className='mb-8 max-w-[560px]'>{subtitle}</p>
						<button className='btn capitalize mx-auto lg:mx-0'>
							{btnText}
						</button>
					</motion.div>
					<motion.div
						variants={plateVariants}
						className='relative mt-8 lg:mt-0'>
						<Image
							src={image}
							alt=''
							width='600'
							height='600'
							className='object-contain'
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
