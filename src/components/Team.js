import React from 'react';
import Image from 'next/image';
import { teamData } from '../constants/data';
import { motion } from 'framer-motion';

import { fadeIn } from '../styles/variants';

const Team = () => {
	const {
		pretitle,
		title,
		sub1,
		sub2,
		name,
		occupation,
		signatureImg,
		chefImg,
	} = teamData;
	return (
		<section className='z-10 relative top-96 lg:top-[480px] min-h-[720px]'>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row items-center lg:items-start lg:gap-x-[120px]'>
					{/* Text */}
					<motion.div
						variants={fadeIn('down', 'tween', 0.6, 1.6)}
						initial='hidden'
						whileInView={'show'}
						className='flex-1 text-center lg:text-left lg:pt-16'>
						<p className='pretitle'>{pretitle}</p>
						<h2 className='h2'>{title}</h2>
						<p className='mb-[60px]'>{sub1}</p>
						<p>{sub2}</p>
						<div className='my-6'>
							<h3 className='text-2xl capitalize font-semibold text-accent'>
								{name}
							</h3>
							<p className='text-[15px] font-semibold capitalize text-grey/70'>
								{occupation}
							</p>
						</div>
						<div className='flex justify-center lg:justify-start mb-6 lg:mb-0'>
							<Image
								src={signatureImg}
								alt=''
								width={300}
								height={40}
							/>
						</div>
					</motion.div>
					{/* Image */}
					<motion.div
						variants={fadeIn('up', 'tween', 0.7, 1.6)}
						initial='hidden'
						whileInView={'show'}
						className='flex-1 mt-8'>
						<Image
							src={chefImg}
							alt=''
							width={800}
							height={800}
							className=''
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Team;
