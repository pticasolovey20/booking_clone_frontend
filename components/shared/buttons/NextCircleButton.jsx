'use client';

import { cn } from '@/utils';
import { IoChevronForward } from 'react-icons/io5';

export const NextCircleButton = ({ styles, onClick }) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className={cn('relative h-8 w-8 aspect-square rounded-full', styles)}
		>
			<IoChevronForward className='absolute top-1/2 left-1/2 transform -translate-x-[45%] -translate-y-1/2' />
		</button>
	);
};
