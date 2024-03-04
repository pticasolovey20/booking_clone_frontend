'use client';

import { cn } from '@/utils';
import { IoChevronBackOutline } from 'react-icons/io5';

export const PrevCircleButton = ({ styles, onClick }) => {
	return (
		<button
			aria-label='Previous categories'
			type='button'
			onClick={onClick}
			className={cn('relative h-8 w-8 aspect-square rounded-full', styles)}
		>
			<IoChevronBackOutline className='absolute top-1/2 left-1/2 transform -translate-x-[55%] -translate-y-1/2' />
		</button>
	);
};
