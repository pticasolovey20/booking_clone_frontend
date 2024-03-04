import Image from 'next/image';

import { categories } from '@/constants';
import { cn } from '@/utils';

import { NextCircleButton } from '@/components/shared/buttons/NextCircleButton';
import { PrevCircleButton } from '@/components/shared/buttons/PrevCircleButton';

export const CategoryList = () => {
	return (
		<div className='w-full flex items-center justify-between overflow-x-auto'>
			<PrevCircleButton styles='mr-2 border border-border' />

			<div className='w-full flex gap-8 overflow-x-hidden'>
				{categories.map(({ id, source, alt }) => (
					<div key={id} className='flex flex-col items-center gap-2 py-3 cursor-pointer'>
						<Image src={source} alt={alt} width={24} height={24} />

						<span className={cn('text-[12px] capitalize', alt === 'omg' && 'uppercase')}>
							{alt === 'omg' ? `${alt}!` : alt}
						</span>
					</div>
				))}
			</div>

			<NextCircleButton styles='ml-2 border border-border' />
		</div>
	);
};
