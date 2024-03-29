'use client';

import { useAppContext } from '@/context/AppContext';
import { cn } from '@/utils';

import { IoSearch } from 'react-icons/io5';
import { LuSettings2 } from 'react-icons/lu';

export const SearchBar = () => {
	const { handleFilterModalOpen } = useAppContext();

	return (
		<nav className='h-20 w-full flex items-center justify-between gap-2 md:hidden pt-4 px-6 xxl:px-20'>
			<div
				className={cn(
					'w-full flex items-center px-1 rounded-full',
					'border border-border cursor-pointer shadow-md'
				)}
			>
				<div className='h-[54px] w-[54px] flex items-center justify-center'>
					<IoSearch size={24} />
				</div>

				<div className='flex flex-col items-start leading-none'>
					<span className='text-sm font-medium'>Anywhere</span>

					<div className='flex items-center gap-2 text-[12px]'>
						<span>Any week</span>
						<div className='h-[2px] w-[2px] bg-tertiary-foreground' />
						<span>Add guests</span>
					</div>
				</div>
			</div>

			<button
				type='button'
				onClick={handleFilterModalOpen}
				className='aspect-square flex items-center justify-center p-3 rounded-full border border-border cursor-pointer'
			>
				<LuSettings2 strokeWidth={3} />
			</button>
		</nav>
	);
};
