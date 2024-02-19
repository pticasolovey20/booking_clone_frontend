import { cn, delay } from '@/utils';
import { ROOMS } from '@/constants';

import { CardItem } from '@/components/shared/cards/CardItem';

export const CardList = async () => {
	await delay(500);

	return (
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
	);
};
