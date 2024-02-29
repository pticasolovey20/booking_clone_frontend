import { cn } from '@/utils';

export const CardSkeleton = ({ amount }) => {
	return (
		<div
			className={cn(
				'grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3',
				'xl:grid-cols-4 xxl:grid-cols-5 xxxl:grid-cols-6',
				'gap-x-8 gap-y-10 animate-pulse'
			)}
		>
			{Array.from({ length: amount }).map((_, index) => (
				<div key={index} className='flex flex-col gap-4 select-none'>
					<div className='aspect-square rounded-2xl bg-tertiary' />

					<div className='flex flex-col gap-1'>
						<div className='flex flex-col gap-1'>
							<div className='w-full flex justify-between gap-1'>
								<div className='w-4/6 h-4 rounded-lg bg-tertiary' />
								<div className='w-1/6 h-4 rounded-lg bg-tertiary' />
							</div>

							<div className='w-3/5 h-4 rounded-lg bg-tertiary' />
							<div className='w-3/5 h-4 rounded-lg bg-tertiary' />
						</div>

						<div className='w-4/5 h-4 rounded-lg bg-tertiary' />
					</div>
				</div>
			))}
		</div>
	);
};
