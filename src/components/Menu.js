import React from 'react';
import Image from 'next/image';
import { menuData } from '../constants/data';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../styles/variants';
const Menu = () => {
	const { title, subtitle, modelImg, menuItems, btnText } = menuData;
	return (
		<section className='relative min-h-full bg-white'>
			<Image
				src='/menu/bg.png'
				alt=''
				fill
				className='absolute max-h-[590px] '
			/>
			{/* text */}
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				whileInView={'show'}
				viewport={{ once: false, amount: 0.1 }}
				className='z-30 relative top-[150px] lg:top-52'>
				<div className='container mx-auto flex flex-col items-center text-center'>
					<motion.h2
						variants={fadeIn('down', 'tween', 0.2, 1.6)}
						className='max-w-[400px] lg:max-w-full h2 capitalize text-white'>
						{title}
					</motion.h2>
					<motion.p
						variants={fadeIn('down', 'tween', 0.4, 1.6)}
						className='text-white/70 capitalize mb-8'>
						{subtitle}
					</motion.p>
					<motion.div
						variants={fadeIn('down', 'tween', 0.6, 1.6)}
						className='relative w-full h-[50px]'>
						<Image
							src={modelImg}
							alt=''
							fill
							className='object-contain'
						/>
					</motion.div>
				</div>
			</motion.div>
			{/* Gallery */}
			<motion.div
				initial={{
					opacity: 0,
					y: 150,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					type: 'tween',
					delay: 0.2,
					duration: 1.6,
					ease: 'easeOut',
				}}
				className='relative top-72 lg:top-96'>
				<div className='container mx-auto'>
					<div className='z-10 lg:-mt-32 min-h-[590px] mb-8 md:mb-4 xl:mb-16'>
						<div className='grid grid-cols-1 lg:grid-cols-4 min-h-[590px]'>
							{menuItems.map((item, index) => {
								// Get all the props ready :)
								const { image, name, price, description } =
									item;

								return (
									<div key={index}>
										<div className='flex flex-row lg:flex-col h-full'>
											{/* The Image */}
											<div
												className={`relative h-[300px] w-[300px] md:w-auto ${
													index === 1 || index === 3
														? 'lg:order-1'
														: 'order-none'
												}`}>
												<Image
													src={image}
													alt=''
													fill
												/>
											</div>
											{/* text */}
											<div className='flex-1 flex flex-col justify-center px-6 lg:p-12 lg:max-h-[250px]  bg-[#fff2e4]'>
												<div className='text-center'>
													<h3 className='text-xl font-semibold text-dark xl:text-2xl'>
														{name}
													</h3>
													<h4 className='my-1 lg:my-6  text-[20px] lg:text-[40px] text-accent font-semibold'>
														{price}
													</h4>
													<p>{description}</p>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<button className='btn mx-auto capitalize'>
						{btnText}
					</button>
				</div>
			</motion.div>
			{/*  */}
		</section>
	);
};

export default Menu;
