import React from 'react';
import { motion } from 'framer-motion';

import { navData } from '../constants/data';
import Link from 'next/link';

const Nav = () => {
	return (
		<nav className='w-full h-full'>
			<ul className=' h-full flex flex-col justify-center items-center gap-y-6'>
				{navData.map((item, index) => {
					return (
						<li key={index}>
							<Link href={item.href}>
								<p className='text-xl capitalize font-primary italic hover:text-dark transition-all duration-300'>
									{item.name}
								</p>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Nav;
