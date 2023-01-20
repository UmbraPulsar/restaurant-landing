import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Socials from './Socials';

import { motion } from 'framer-motion';

import { staggerContainer, fadeIn } from '@/styles/variants';
import Link from 'next/link';
import Image from 'next/image';
const headerVariants = {
	hidden: {
		padding: '84px 0 84px 0',
		background: 'none',
	},
	show: {
		padding: '14px 0 14px 0',
		background: 'rgba(0,0,0,0.92)',
		transition: {
			type: 'spring',
		},
	},
};

const navVariants = {
	hidden: {
		clipPath: 'circle(5.8% at 50% 0)',
		opacity: 0,
		transition: {
			type: 'type',
			delay: 0.2,
			stiffness: 300,
			damping: 140,
		},
	},
	show: {
		opacity: 1,
		clipPath: 'circle(130% at 50% 0)',
		transition: {
			type: 'spring',
			stiffness: 80,
		},
	},
};

const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const [nav, setNav] = useState(false);

	// This sets classes on the navigation when the window is scrolled past 50 pixels
	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
		});
	});

	return (
		<motion.header
			variants={headerVariants}
			initial='hidden'
			animate={isActive ? 'show' : ''}
			className='z-50 fixed w-full max-w-[1840px] py-4 bg-pink-200'>
			<motion.div
				variants={staggerContainer(0.3, 1)}
				initial='hidden'
				animate={'show'}
				className='container mx-auto'>
				<div className='relative flex justify-between items-center px-4 lg:px-8 text-white'>
					<motion.button
						variants={fadeIn('down', 'tween', 1.2, 1.2)}
						className={`${
							nav ? 'gap-y-0' : 'gap-y-2'
						} flex flex-col justify-center w-12 h-12 p-3 order-2 lg:order-none curosr-pointer border-2 rounded-full`}
						onClick={() => {
							setNav(!nav);
						}}>
						<motion.div
							initial={{ rotate: 0 }}
							animate={{
								rotate: nav ? -45 : 0,
								translateY: nav ? 2 : 0,
							}}
							className='w-full h-[2px] bg-white'></motion.div>

						<motion.div
							initial={{ rotate: 0 }}
							animate={{
								rotate: nav ? 45 : 0,
							}}
							className='w-full h-[2px] bg-white'></motion.div>
					</motion.button>
					{/* Logo */}
					<motion.div variants={fadeIn('down', 'tween', 1.4, 1.2)}>
						<Link href='/'>
							<div
								className={`relative max-w-fit ${
									isActive
										? 'min-w-[90px] min-h-[90px]'
										: 'min-w-[107px] min-h-[107px]'
								}`}>
								<Image
									src='/header/logo-white.png'
									alt=''
									fill
									className='object-contain'
								/>
							</div>
						</Link>
					</motion.div>
					<motion.div
						variants={fadeIn('down', 'tween', 1.6, 1.2)}
						className='hidden lg:flex'>
						<Socials />
					</motion.div>
					<motion.div
						variants={navVariants}
						initial='hidden'
						animate={nav ? 'show' : ''}
						className='z-50 absolute bg-accent w-[310px] h-[50vh] right-0 lg:left-0 top-[120px] bottom-0 rounded-lg shadow-xl'>
						<Nav />
					</motion.div>
				</div>
			</motion.div>
		</motion.header>
	);
};

export default Header;
