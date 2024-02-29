'use client';

import Link from 'next/link';

import { useAppContext } from '@/context/AppContext';
import { cn } from '@/utils';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FaUserCircle } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';

export const MenuDropdown = () => {
	const { handleSignUpModalOpen, handleSignInModalOpen } = useAppContext();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div
					role='li'
					className={cn(
						'flex items-center gap-3 py-2 px-3',
						'rounded-full border border-border cursor-pointer',
						'hover:shadow-lg transition-all duration-300'
					)}
				>
					<RxHamburgerMenu />

					<span className='w-8 h-8'>
						<FaUserCircle size={33} color='#6b7280d9' />
					</span>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='mt-1 w-[250px] p-0 py-2 border border-border rounded-2xl shadow-lg'
			>
				<DropdownMenuItem role='button' onClick={handleSignUpModalOpen}>
					Sign up
				</DropdownMenuItem>
				<DropdownMenuItem role='button' onClick={handleSignInModalOpen}>
					Log in
				</DropdownMenuItem>

				<DropdownMenuSeparator className='my-2' />

				<DropdownMenuItem>
					<Link href='/'>Airbnb your home</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href='/'>Help Center</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
