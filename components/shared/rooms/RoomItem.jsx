import { cn } from '@/utils';

import Link from 'next/link';
import Image from 'next/image';

import { GoHeart } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';

import { NextCircleButton } from '@/components/shared/buttons/NextCircleButton';
import { PrevCircleButton } from '@/components/shared/buttons/PrevCircleButton';
import { RoomImagePagination } from '@/components/shared/rooms/RoomImagePagination';

export const RoomItem = ({ galleryImages, title, rate, viewes, total }) => {
	const hasPrevPage = false;
	const hasNextPage = true;

	return (
		<Link href='/' className='flex flex-col gap-4 select-none group'>
			<div className='aspect-square rounded-2xl overflow-hidden'>
				<div className='relative h-full w-full'>
					<span
						className={cn(
							'text-sm font-semibold',
							'absolute top-3 left-3 z-10',
							'px-3 py-1 rounded-full bg-primary'
						)}
					>
						Guest favorite
					</span>

					<button type='button' className='absolute top-3 right-4 z-10'>
						<GoHeart size={25} color='white' />
					</button>

					{hasPrevPage && (
						<PrevCircleButton
							styles={[
								'hidden group-hover:block',
								'absolute top-1/2 -translate-y-1/2 left-4',
								'transition-all duration-200 bg-primary/90',
								'hover:bg-primary hover:scale-105',
							]}
						/>
					)}

					<Image
						fill
						priority
						alt={galleryImages[0].alt}
						src={galleryImages[0].source}
						className='object-cover'
						sizes='(width:100%), (height:100%)'
					/>

					{hasNextPage && (
						<NextCircleButton
							styles={[
								'hidden group-hover:block',
								'absolute top-1/2 -translate-y-1/2 right-4',
								'transition-all duration-200 bg-primary/90',
								'hover:bg-primary hover:scale-105',
							]}
						/>
					)}

					<RoomImagePagination />
				</div>
			</div>

			<div>
				<div className='flex flex-col gap-1'>
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
				</div>

				<div className='w-full'>
					<p className='w-full truncate underline text-sm cursor-pointer'>
						<span className='font-semibold'>${total}</span> total before taxes
					</p>
				</div>
			</div>
		</Link>
	);
};
