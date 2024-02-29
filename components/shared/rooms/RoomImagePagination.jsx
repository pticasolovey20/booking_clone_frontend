import { cn } from '@/utils';

export const RoomImagePagination = () => {
	return (
		<div className='absolute bottom-2 right-1/2 transform translate-x-1/2 flex items-center gap-1'>
			{Array.from({ length: 5 }).map((_, index) => (
				<div
					key={index}
					className={cn(
						'rounded-full',
						index !== 4 ? 'h-1.5 w-1.5' : 'h-1 w-1',
						index === 0 ? 'bg-primary' : 'bg-tertiary-foreground'
					)}
				/>
			))}
		</div>
	);
};
