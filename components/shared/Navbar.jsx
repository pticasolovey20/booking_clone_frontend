import { cn } from '@/utils';

import { AirbnbLogo } from '@/components/ui/Logo';
import { IoSearch } from 'react-icons/io5';
import { FiGlobe } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaUserCircle } from 'react-icons/fa';

export const Navbar = () => {
	return (
		<nav
			className={cn(
				'h-20 hidden md:flex items-center justify-between',
				'w-full px-8 xxl:px-20 border-b border-gray-200'
			)}
		>
			<div className='flex items-center lg:justify-between lg:flex-[3]'>
				<AirbnbLogo />

				<div className='w-max px-5'>
					<div
						className={cn(
							'flex min-w-[350px] w-full items-center gap-2 p-2',
							'rounded-full border border-gray-300 cursor-pointer',
							'shadow-sm hover:shadow-md transition-all duration-300'
						)}
					>
						<ul className='w-full flex items-center gap-2 text-sm'>
							<li className='font-semibold px-3 truncate'>Anywhere</li>
							<div className='block w-px h-6 bg-gray-300' />
							<li className='font-semibold px-3 truncate'>Any week</li>
							<div className='block w-px h-6 bg-gray-300' />
							<li className='text-gray-500 px-3 truncate'>Add guests</li>
						</ul>

						<div className='p-2 rounded-full bg-[#FF385C]'>
							<IoSearch color='white' strokeWidth={20} />
						</div>
					</div>
				</div>
			</div>

			<div className='flex-[2]'>
				<ul className='flex items-center justify-end gap-4'>
					<li className='cursor-pointer'>
						<span className='text-sm tracking-tight font-semibold'>Airbnb your home</span>
					</li>

					<li className='cursor-pointer'>
						<FiGlobe />
					</li>

					<li
						className={cn(
							'flex items-center gap-3 py-2 px-3',
							'rounded-full border border-gray-300 cursor-pointer',
							'hover:shadow-lg transition-all duration-300'
						)}
					>
						<RxHamburgerMenu />

						<span className='w-8 h-8'>
							<FaUserCircle size={33} />
						</span>
					</li>
				</ul>
			</div>
		</nav>
	);
};
