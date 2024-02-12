import { cn } from '@/utils';

import Link from 'next/link';
import Image from 'next/image';

import { GoHeart } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';

import { NextCircleButton } from '@/components/shared/buttons/NextCircleButton';
import { PrevCircleButton } from '@/components/shared/buttons/PrevCircleButton';

export const CardItem = ({ id, galleryImages, title, rate, viewes, total }) => {
	const hasPrevPage = false;
	const hasNextPage = true;

	return (
		<div className='flex flex-col gap-4 select-none group'>
			<Link href={`/rooms/${id}`} className='aspect-square rounded-2xl overflow-hidden'>
				<div className='relative h-full w-full'>
					<span
						className={cn(
							'text-sm font-semibold',
							'absolute top-3 left-3 z-10',
							'px-3 py-1 rounded-full bg-white'
						)}
					>
						Guest favorite
					</span>

					<button type='button' className='absolute top-3 right-4 z-10'>
						<GoHeart size={25} color='white' />
					</button>

					<Image
						fill
						priority
						alt={galleryImages[0].alt}
						src={galleryImages[0].source}
						className='object-cover'
						sizes='(width:100%), (height:100%)'
					/>

					{hasPrevPage && (
						<PrevCircleButton
							styles={[
								'hidden group-hover:block',
								'absolute top-1/2 -translate-y-1/2 left-4',
								'transition-all duration-200 bg-white/90',
								'hover:bg-white hover:scale-105',
							]}
						/>
					)}

					{hasNextPage && (
						<NextCircleButton
							styles={[
								'hidden group-hover:block',
								'absolute top-1/2 -translate-y-1/2 right-4',
								'transition-all duration-200 bg-white/90',
								'hover:bg-white hover:scale-105',
							]}
						/>
					)}

					<div className='absolute bottom-2 right-1/2 transform translate-x-1/2 flex items-center gap-1'>
						{Array.from({ length: 5 }).map((_, index) => (
							<div
								key={index}
								className={cn(
									'rounded-full',
									index !== 4 ? 'h-1.5 w-1.5' : 'h-1 w-1',
									index === 0 ? 'bg-white' : 'bg-gray-200'
								)}
							/>
						))}
					</div>
				</div>
			</Link>

			<div>
				<Link href={`/rooms/${id}`} className='flex flex-col gap-1'>
					<div className='w-full flex justify-between gap-1'>
						<span className='w-full text-sm tracking-tight font-semibold truncate'>{title}</span>

						<div className='flex items-center gap-1'>
							<FaStar className='mb-1' />
							<span className='leading-none'>{rate}</span>
						</div>
					</div>

					<div className='w-full flex'>
						<span className='w-full text-sm tracking-tight leading-none truncate'>
							Viewed {viewes} times last week
						</span>
					</div>

					<div className='w-full flex items-center gap-1 text-sm tracking-tight truncate'>
						<span>5 nights</span>
						<div className='h-[2px] w-[2px] bg-black' />
						<span>May 27-Jun 1</span>
					</div>
				</Link>

				<div className='w-full'>
					<p className='w-full truncate underline text-sm cursor-pointer'>
						<span className='font-semibold'>${total}</span> total before taxes
					</p>
				</div>
			</div>
		</div>
	);
};
