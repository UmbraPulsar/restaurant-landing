import React from 'react';
import { socialData } from '@/constants/data';
import Link from 'next/link';

const Socials = () => {
	return (
		<div className='flex gap-x-2'>
			{socialData.map((item, index) => {
				return (
					<Link
						className='flex items-center justify-center w-[35px] h-[35px] border border-white/20 rounded-full text-sm hover:text-accent hover:border-accent transition-all'
						key={index}
						href={item.href}>
						{item.icon}
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;
