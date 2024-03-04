import Link from 'next/link';
import { cn } from '@/utils';

import { IoSearch } from 'react-icons/io5';

import { AirbnbLogo } from '@/components/shared/Logo';
import { LanguagesButton } from '@/components/shared/languages/LanguagesButton';
import { MenuDropdown } from '@/components/shared/header/MenuDropdown';

export const Navbar = () => {
	return (
		<nav
			className={cn(
				'h-20 hidden md:flex items-center justify-between',
				'w-full px-8 xxl:px-20 border-b border-separator'
			)}
		>
			<div className='flex items-center lg:justify-between lg:flex-[3]'>
				<AirbnbLogo />

				<div className='w-max px-5'>
					<div
						className={cn(
							'flex min-w-[350px] items-center gap-2 p-2',
							'rounded-full border border-border cursor-pointer',
							'shadow-sm hover:shadow-md transition-all duration-300'
						)}
					>
						<ul className='w-full flex items-center text-sm'>
							<li className='font-medium px-3'>Anywhere</li>
							<li>
								<div className='block w-px h-6 bg-tertiary' />
							</li>
							<li className='font-medium px-3'>Any week</li>
							<li>
								<div className='block w-px h-6 bg-tertiary' />
							</li>
							<li className='text-gray-500 px-3'>Add guests</li>
						</ul>

						<div className='p-2 rounded-full bg-accent'>
							<IoSearch color='white' strokeWidth={20} />
						</div>
					</div>
				</div>
			</div>

			<div className='flex-[2] flex items-center justify-end lg:gap-2'>
				<div className='flex items-center'>
					<Link
						href='/'
						className={cn(
							'text-sm tracking-tight font-medium whitespace-nowrap',
							'py-2 px-4 rounded-full duration-300 hover:bg-secondary'
						)}
					>
						Airbnb your home
					</Link>

					<LanguagesButton />
				</div>

				<MenuDropdown />
			</div>
		</nav>
	);
};
