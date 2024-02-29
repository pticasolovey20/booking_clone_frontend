import { cn } from '@/utils';
import { CardItem } from '@/components/shared/cards/CardItem';

export const CardList = ({ rooms }) => {
	return (
		<div
			className={cn(
				'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5',
				'gap-x-8 gap-y-10'
			)}
		>
			{rooms.map((room) => (
				<CardItem key={room.id} {...room} />
			))}
		</div>
	);
};
