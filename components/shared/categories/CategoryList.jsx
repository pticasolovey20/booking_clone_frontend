import { cn } from '@/utils';

import { NextCircleButton } from '../buttons/NextCircleButton';
import { PrevCircleButton } from '../buttons/PrevCircleButton';

import Image from 'next/image';

const CATEGORIES = [
	{ id: 1, source: '/images/trending.jpg', alt: 'trending' },
	{ id: 2, source: '/images/islands.jpg', alt: 'islands' },
	{ id: 3, source: '/images/arctic.jpg', alt: 'arctic' },
	{ id: 4, source: '/images/windmills.jpg', alt: 'windmills' },
	{ id: 5, source: '/images/tropical.jpg', alt: 'tropical' },
	{ id: 6, source: '/images/campers.jpg', alt: 'campers' },
	{ id: 7, source: '/images/cabins.jpg', alt: 'cabins' },
	{ id: 8, source: '/images/omg.jpg', alt: 'omg' },
	{ id: 9, source: '/images/surfing.jpg', alt: 'surfing' },
	{ id: 10, source: '/images/amazing_pools.jpg', alt: 'amazing_pools' },
	{ id: 11, source: '/images/design.jpg', alt: 'design' },
	{ id: 12, source: '/images/national_parks.jpg', alt: 'national_parks' },
	{ id: 13, source: '/images/amazing_views.jpg', alt: 'amazing_views' },
	{ id: 14, source: '/images/caves.jpg', alt: 'caves' },
	{ id: 15, source: '/images/beach.jpg', alt: 'beach' },
	{ id: 16, source: '/images/tiny_homes.jpg', alt: 'tiny_homes' },
];

export const CategoryList = () => {
	return (
		<div className='w-full flex items-center justify-between overflow-x-auto'>
			<PrevCircleButton styles='mr-2 border border-gray-400' />

			<div className='w-full flex gap-8 overflow-x-hidden'>
				{CATEGORIES.map(({ id, source, alt }) => (
					<div
						key={id}
						className={cn(
							'flex flex-col items-center gap-2',
							'py-3 border-b-2 border-transparent cursor-pointer',
							'hover:border-gray-400 transition-all duration-100'
						)}
					>
						<Image src={source} alt={alt} width={24} height={24} />

						<span className={cn('text-[12px] capitalize', alt === 'omg' && 'uppercase')}>
							{alt === 'omg' ? `${alt}!` : alt}
						</span>
					</div>
				))}
			</div>

			<NextCircleButton styles='ml-2 border border-gray-400' />
		</div>
	);
};
