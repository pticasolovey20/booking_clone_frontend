import { cn } from '@/utils';

import Image from 'next/image';

export const Gallery = ({ galleryImages }) => {
	return (
		<div className='w-full'>
			<div className='relative md:hidden aspect-video'>
				<Image
					fill
					priority
					alt={galleryImages[0].alt}
					src={galleryImages[0].source}
					className='object-cover'
					sizes='(width:100%), (height:100%)'
				/>
			</div>

			<div
				className={cn(
					'hidden aspect-[21/9.5] w-full',
					'md:grid grid-cols-2 space-x-2',
					'rounded-2xl overflow-hidden'
				)}
			>
				<div className='relative col-span-1'>
					<Image
						fill
						priority
						alt={galleryImages[0].alt}
						src={galleryImages[0].source}
						className='object-cover'
						sizes='(width:100%), (height:100%)'
					/>
				</div>

				<div className='col-span-1 grid grid-cols-2 gap-2'>
					{galleryImages.slice(1, galleryImages.length).map(({ id, alt, source }) => (
						<div key={id} className='relative col-span-1'>
							<Image
								fill
								priority
								alt={alt}
								src={source}
								className='object-cover'
								sizes='(width:100%), (height:100%)'
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
