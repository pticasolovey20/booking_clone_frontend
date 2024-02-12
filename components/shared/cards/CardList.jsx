import { cn } from '@/utils';
import { ROOMS } from '@/constants';

import { CardItem } from '@/components/shared/cards/CardItem';
import { Button } from '@/components/ui/Button';

export const CardList = () => {
	const currentCategory = 'arctic';

	return (
		<div className='w-full flex flex-col gap-16'>
			<div
				className={cn(
					'grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3',
					'xl:grid-cols-4 xxl:grid-cols-5 xxxl:grid-cols-6',
					'gap-x-8 gap-y-10'
				)}
			>
				{ROOMS.map((room) => (
					<CardItem key={room.id} {...room} />
				))}
			</div>

			<div className='w-full flex flex-col items-center justify-center gap-4'>
				<span className='font-semibold text-lg'>Continue exploring {currentCategory} homes</span>

				<Button
					label='Show more'
					styles={[
						'text-white font-semibold',
						'py-3 px-6 rounded-lg transition-all',
						'duration-300 bg-black/85 hover:bg-black',
					]}
				/>
			</div>
		</div>
	);
};
